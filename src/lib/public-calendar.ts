import {
  CALENDAR_REVALIDATE_SECONDS,
  extractFirstUrl,
  normalizeCalendarDescription,
  sortScheduleItems,
} from "@/lib/google-calendar";
import type { ScheduleItem, ScheduleKind } from "@/lib/types";

export const DEFAULT_EVENTS_ICS_URL =
  "https://calendar.google.com/calendar/ical/bourbonattiffanys%40gmail.com/public/basic.ics";

type IcsDateValue = {
  allDay: boolean;
  timeZone?: string;
  value: string;
};

type IcsEvent = {
  description?: string;
  end?: IcsDateValue;
  id?: string;
  location?: string;
  start?: IcsDateValue;
  status?: string;
  title?: string;
  url?: string;
};

function unfoldIcs(value: string) {
  return value.replace(/\r?\n[ \t]/g, "");
}

function unescapeIcsText(value: string) {
  return value
    .replace(/\\n/gi, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\")
    .trim();
}

function splitIcsLine(line: string) {
  const separatorIndex = line.indexOf(":");
  if (separatorIndex === -1) {
    return undefined;
  }

  const rawKey = line.slice(0, separatorIndex);
  const rawValue = line.slice(separatorIndex + 1);
  const [name = "", ...paramParts] = rawKey.split(";");
  const params = new Map<string, string>();

  paramParts.forEach((part) => {
    const [paramName, ...paramValueParts] = part.split("=");
    if (paramName && paramValueParts.length) {
      params.set(paramName.toUpperCase(), paramValueParts.join("="));
    }
  });

  return { name: name.toUpperCase(), params, value: rawValue };
}

function formatIcsDate(value: string) {
  if (/^\d{8}$/.test(value)) {
    return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
  }

  const match = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/);
  if (!match) {
    return value;
  }

  const [, year, month, day, hour, minute, second, zulu] = match;
  return `${year}-${month}-${day}T${hour}:${minute}:${second}${zulu ? "Z" : ""}`;
}

function parseIcsDate(line: ReturnType<typeof splitIcsLine>): IcsDateValue | undefined {
  if (!line) {
    return undefined;
  }

  return {
    allDay: line.params.get("VALUE") === "DATE" || /^\d{8}$/.test(line.value),
    timeZone: line.params.get("TZID"),
    value: formatIcsDate(line.value),
  };
}

export function parsePublicCalendarIcs(ics: string, kind: ScheduleKind = "event") {
  const unfolded = unfoldIcs(ics);
  const blocks = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) ?? [];

  return sortScheduleItems(
    blocks
      .map((block) => normalizeIcsEvent(parseIcsEvent(block), kind))
      .filter((item): item is ScheduleItem => Boolean(item)),
  );
}

function parseIcsEvent(block: string): IcsEvent {
  const event: IcsEvent = {};

  block.split(/\r?\n/).forEach((line) => {
    const parsed = splitIcsLine(line);
    if (!parsed) {
      return;
    }

    switch (parsed.name) {
      case "UID":
        event.id = parsed.value.trim();
        break;
      case "SUMMARY":
        event.title = unescapeIcsText(parsed.value);
        break;
      case "DESCRIPTION":
        event.description = unescapeIcsText(parsed.value);
        break;
      case "LOCATION":
        event.location = unescapeIcsText(parsed.value);
        break;
      case "URL":
        event.url = parsed.value.trim();
        break;
      case "STATUS":
        event.status = parsed.value.trim();
        break;
      case "DTSTART":
        event.start = parseIcsDate(parsed);
        break;
      case "DTEND":
        event.end = parseIcsDate(parsed);
        break;
      default:
        break;
    }
  });

  return event;
}

function normalizeIcsEvent(event: IcsEvent, kind: ScheduleKind): ScheduleItem | undefined {
  const title = event.title?.trim();

  if (!event.id || !event.start || !title || event.status === "CANCELLED" || title.toLowerCase() === "busy") {
    return undefined;
  }

  return {
    id: event.id,
    kind,
    title,
    startsAt: event.start.value,
    endsAt: event.end?.value,
    allDay: event.start.allDay,
    location: event.location?.trim() || undefined,
    description: normalizeCalendarDescription(event.description),
    eventUrl: event.url,
    ctaUrl: extractFirstUrl(event.description),
    timeZone: event.start.timeZone ?? event.end?.timeZone,
  };
}

function isUpcoming(item: ScheduleItem, referenceDate = new Date()) {
  const endDate = item.endsAt ?? item.startsAt;
  const compareDate =
    item.allDay && /^\d{4}-\d{2}-\d{2}$/.test(endDate) ? new Date(`${endDate}T23:59:59`) : new Date(endDate);

  return compareDate >= referenceDate;
}

export async function getPublicCalendarItems(kind: ScheduleKind = "event"): Promise<ScheduleItem[]> {
  const calendarUrl = process.env.GOOGLE_EVENTS_ICS_URL ?? DEFAULT_EVENTS_ICS_URL;

  const response = await fetch(calendarUrl, { next: { revalidate: CALENDAR_REVALIDATE_SECONDS } });
  if (!response.ok) {
    return [];
  }

  const ics = await response.text();
  return parsePublicCalendarIcs(ics, kind).filter((item) => isUpcoming(item)).slice(0, 50);
}
