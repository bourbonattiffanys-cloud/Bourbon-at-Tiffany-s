import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_EVENTS_ICS_URL,
  getPublicCalendarItems,
  parsePublicCalendarIcs,
} from "@/lib/public-calendar";
import { CALENDAR_REVALIDATE_SECONDS } from "@/lib/google-calendar";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

const publicEventIcs = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:event-1
DTSTART:20260601T220000Z
DTEND:20260602T000000Z
SUMMARY:High Wire Tasting
LOCATION:C&M Beverages
DESCRIPTION:Join Tiffany for pours. https://example.com/details
URL:https://calendar.google.com/event
END:VEVENT
BEGIN:VEVENT
UID:busy-1
DTSTART:20260603T220000Z
DTEND:20260603T230000Z
SUMMARY:Busy
END:VEVENT
BEGIN:VEVENT
UID:cancelled-1
DTSTART:20260604T220000Z
DTEND:20260604T230000Z
SUMMARY:Cancelled tasting
STATUS:CANCELLED
END:VEVENT
END:VCALENDAR`;

describe("public calendar ICS parsing", () => {
  it("normalizes public events and filters busy/cancelled entries", () => {
    const items = parsePublicCalendarIcs(publicEventIcs);

    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      id: "event-1",
      kind: "event",
      title: "High Wire Tasting",
      startsAt: "2026-06-01T22:00:00Z",
      endsAt: "2026-06-02T00:00:00Z",
      allDay: false,
      location: "C&M Beverages",
      ctaUrl: "https://example.com/details",
      eventUrl: "https://calendar.google.com/event",
    });
  });

  it("handles all-day dates and folded lines", () => {
    const items = parsePublicCalendarIcs(`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:event-2
DTSTART;VALUE=DATE:20260615
DTEND;VALUE=DATE:20260616
SUMMARY:Bourbon Dinner
LOCATION:Broad Branch Distillery
DESCRIPTION:First line that folds
 onto the next line.
END:VEVENT
END:VCALENDAR`);

    expect(items[0]).toMatchObject({
      startsAt: "2026-06-15",
      endsAt: "2026-06-16",
      allDay: true,
      description: "First line that foldsonto the next line.",
    });
  });

  it("fetches Tiffany's public ICS feed with six-hour revalidation", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => publicEventIcs,
    });
    vi.stubGlobal("fetch", fetchMock);

    await getPublicCalendarItems("event");

    expect(fetchMock).toHaveBeenCalledWith(DEFAULT_EVENTS_ICS_URL, {
      next: { revalidate: CALENDAR_REVALIDATE_SECONDS },
    });
  });

  it("allows the public ICS URL to be overridden by env", async () => {
    vi.stubEnv("GOOGLE_EVENTS_ICS_URL", "https://example.com/calendar.ics");
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => publicEventIcs,
    });
    vi.stubGlobal("fetch", fetchMock);

    await getPublicCalendarItems("event");

    expect(fetchMock).toHaveBeenCalledWith("https://example.com/calendar.ics", expect.any(Object));
  });
});
