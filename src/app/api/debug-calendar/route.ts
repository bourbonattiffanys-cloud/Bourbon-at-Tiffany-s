import { DEFAULT_EVENTS_ICS_URL } from "@/lib/public-calendar";

export async function GET() {
  const calendarUrl = process.env.GOOGLE_EVENTS_ICS_URL ?? DEFAULT_EVENTS_ICS_URL;
  const response = await fetch(calendarUrl, { cache: "no-store" });

  if (!response.ok) {
    return Response.json({ error: "Failed to fetch calendar", status: response.status });
  }

  const ics = await response.text();

  // Extract VEVENT blocks and show titles + descriptions
  const blocks = ics.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) ?? [];
  const events = blocks.map((block) => {
    const title = block.match(/SUMMARY[^:]*:(.*)/)?.[1]?.trim() ?? "(no title)";
    const description = block.match(/DESCRIPTION[^:]*:(.*)/)?.[1]?.trim() ?? "(no description)";
    const status = block.match(/STATUS:(.*)/)?.[1]?.trim() ?? "(no status)";
    return { title, description, status };
  });

  return Response.json({ total: events.length, events });
}
