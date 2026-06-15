import type { ScheduleItem, ScheduleKind } from "@/lib/types";

export const CALENDAR_REVALIDATE_SECONDS = 21_600;

type GoogleCalendarDate = {
  date?: string;
  dateTime?: string;
  timeZone?: string;
};

export type GoogleCalendarEvent = {
  id?: string;
  status?: string;
  summary?: string;
  description?: string;
  location?: string;
  htmlLink?: string;
  start?: GoogleCalendarDate;
  end?: GoogleCalendarDate;
};

type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[];
};

const googleCalendarEndpoint = "https://www.googleapis.com/calendar/v3/calendars";

function stripHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .trim();
}

export function extractFirstUrl(value?: string) {
  if (!value) {
    return undefined;
  }

  const text = stripHtml(value);
  const matches = text.matchAll(/https?:\/\/[^\s<>"')]+/gi);
  for (const match of matches) {
    const url = match[0].replace(/[.,;:!?]+$/, "");
    if (!url.includes("meet.google.com") && !url.includes("google.com/calendar")) {
      return url;
    }
  }
  return undefined;
}

export function normalizeCalendarDescription(value?: string) {
  if (!value) {
    return undefined;
  }

  const text = stripHtml(value).replace(/\s+/g, " ").trim();
  if (!text) {
    return undefined;
  }

  return text.length > 220 ? `${text.slice(0, 217).trim()}...` : text;
}

function getEventStart(event: GoogleCalendarEvent) {
  return event.start?.dateTime ?? event.start?.date;
}

function getEventEnd(event: GoogleCalendarEvent) {
  return event.end?.dateTime ?? event.end?.date;
}

export function normalizeGoogleCalendarEvent(
  event: GoogleCalendarEvent,
  kind: ScheduleKind,
): ScheduleItem | undefined {
  const startsAt = getEventStart(event);
  const title = event.summary?.trim();

  if (!event.id || !startsAt || !title || event.status === "cancelled") {
    return undefined;
  }

  return {
    id: event.id,
    kind,
    title,
    startsAt,
    endsAt: getEventEnd(event),
    allDay: Boolean(event.start?.date),
    location: event.location?.trim() || undefined,
    description: normalizeCalendarDescription(event.description),
    eventUrl: event.htmlLink,
    ctaUrl: extractFirstUrl(event.description),
    timeZone: event.start?.timeZone ?? event.end?.timeZone,
  };
}

export function sortScheduleItems(items: ScheduleItem[]) {
  return [...items].sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
}

export async function getGoogleCalendarItems(kind: ScheduleKind): Promise<ScheduleItem[]> {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  const calendarId =
    kind === "pick" ? process.env.GOOGLE_PICK_CALENDAR_ID : process.env.GOOGLE_EVENTS_CALENDAR_ID;

  if (!apiKey || !calendarId) {
    return [];
  }

  const now = new Date();
  const timeMax = new Date(now);
  timeMax.setFullYear(now.getFullYear() + 1);

  const params = new URLSearchParams({
    key: apiKey,
    singleEvents: "true",
    orderBy: "startTime",
    timeMin: now.toISOString(),
    timeMax: timeMax.toISOString(),
    maxResults: "50",
  });

  const response = await fetch(
    `${googleCalendarEndpoint}/${encodeURIComponent(calendarId)}/events?${params.toString()}`,
    { next: { revalidate: CALENDAR_REVALIDATE_SECONDS } },
  );

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as GoogleCalendarResponse;

  return sortScheduleItems(
    (data.items ?? [])
      .map((event) => normalizeGoogleCalendarEvent(event, kind))
      .filter((item): item is ScheduleItem => Boolean(item)),
  );
}
