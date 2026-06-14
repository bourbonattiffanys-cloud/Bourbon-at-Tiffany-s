import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScheduleList } from "@/components/schedule-list";
import {
  CALENDAR_REVALIDATE_SECONDS,
  extractFirstUrl,
  getGoogleCalendarItems,
  normalizeCalendarDescription,
  normalizeGoogleCalendarEvent,
  sortScheduleItems,
} from "@/lib/google-calendar";
import type { ScheduleItem } from "@/lib/types";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("google calendar normalization", () => {
  it("normalizes timed events with location, links, and clean descriptions", () => {
    const item = normalizeGoogleCalendarEvent(
      {
        id: "event-1",
        summary: "C&M Beverages Tasting",
        location: "High Wire Distilling",
        description: "Join Tiffany for pours. https://example.com/tasting",
        htmlLink: "https://calendar.google.com/event",
        start: { dateTime: "2026-05-02T12:00:00-04:00", timeZone: "America/New_York" },
        end: { dateTime: "2026-05-02T15:00:00-04:00", timeZone: "America/New_York" },
      },
      "event",
    );

    expect(item).toMatchObject({
      id: "event-1",
      kind: "event",
      title: "C&M Beverages Tasting",
      allDay: false,
      location: "High Wire Distilling",
      ctaUrl: "https://example.com/tasting",
      eventUrl: "https://calendar.google.com/event",
      timeZone: "America/New_York",
    });
  });

  it("normalizes all-day pick dates without requiring time fields", () => {
    const item = normalizeGoogleCalendarEvent(
      {
        id: "pick-1",
        summary: "Firefly barrel pick",
        start: { date: "2026-05-01" },
        end: { date: "2026-05-02" },
      },
      "pick",
    );

    expect(item).toMatchObject({
      id: "pick-1",
      kind: "pick",
      startsAt: "2026-05-01",
      endsAt: "2026-05-02",
      allDay: true,
    });
  });

  it("filters cancelled and incomplete events", () => {
    expect(
      normalizeGoogleCalendarEvent(
        {
          id: "cancelled",
          status: "cancelled",
          summary: "Cancelled",
          start: { date: "2026-05-01" },
        },
        "event",
      ),
    ).toBeUndefined();

    expect(normalizeGoogleCalendarEvent({ id: "missing-start", summary: "Missing start" }, "event")).toBeUndefined();
  });

  it("extracts URLs and trims description text", () => {
    expect(extractFirstUrl("Details <b>here</b>: https://example.com/path.")).toBe("https://example.com/path");
    expect(normalizeCalendarDescription("<p>Line one&nbsp;&amp; line two</p>")).toBe("Line one & line two");
  });

  it("sorts by start time", () => {
    const items: ScheduleItem[] = [
      { id: "late", kind: "event", title: "Late", startsAt: "2026-05-04T12:00:00Z", allDay: false },
      { id: "early", kind: "event", title: "Early", startsAt: "2026-05-01T12:00:00Z", allDay: false },
    ];

    expect(sortScheduleItems(items).map((item) => item.id)).toEqual(["early", "late"]);
  });

  it("returns an empty list when calendar env vars are missing", async () => {
    expect(await getGoogleCalendarItems("event")).toEqual([]);
  });

  it("fetches the configured calendar with a six-hour revalidation window", async () => {
    vi.stubEnv("GOOGLE_CALENDAR_API_KEY", "api-key");
    vi.stubEnv("GOOGLE_EVENTS_CALENDAR_ID", "events@example.com");
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ items: [] }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await getGoogleCalendarItems("event");

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining("/events%40example.com/events?"),
      { next: { revalidate: CALENDAR_REVALIDATE_SECONDS } },
    );
  });
});

describe("schedule list", () => {
  it("renders an empty state", () => {
    render(<ScheduleList items={[]} emptyTitle="Nothing posted" emptyDescription="Check back soon." />);

    expect(screen.getByRole("heading", { name: /Nothing posted/i })).toBeInTheDocument();
    expect(screen.getByText(/Check back soon/i)).toBeInTheDocument();
  });

  it("renders all-day and timed schedule cards", () => {
    render(
      <ScheduleList
        emptyTitle="Empty"
        emptyDescription="None"
        items={[
          { id: "pick", kind: "pick", title: "Firefly Barrel Pick", startsAt: "2026-05-01", allDay: true },
          {
            id: "event",
            kind: "event",
            title: "High Wire Tasting",
            startsAt: "2026-05-02T12:00:00-04:00",
            endsAt: "2026-05-02T15:00:00-04:00",
            allDay: false,
            location: "High Wire Distilling",
          },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { name: /May 2026/i })).toBeInTheDocument();
    expect(screen.getByText(/Firefly Barrel Pick/i)).toBeInTheDocument();
    expect(screen.getByText(/All day/i)).toBeInTheDocument();
    expect(screen.getByText(/High Wire Distilling/i)).toBeInTheDocument();
  });
});
