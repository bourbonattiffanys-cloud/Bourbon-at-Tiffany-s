import { PageHero } from "@/components/page-hero";
import { ScheduleList } from "@/components/schedule-list";
import { StructuredData } from "@/components/structured-data";
import { getPublicCalendarItems } from "@/lib/public-calendar";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Events",
  path: "/events",
  description:
    "See where Tiffany is appearing next for bourbon tastings, promotions, store visits, and public whiskey events.",
});

export default async function EventsPage() {
  const events = await getPublicCalendarItems("event");

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${siteConfig.name} events`,
          itemListElement: events.map((event, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Event",
              name: event.title,
              startDate: event.startsAt,
              endDate: event.endsAt,
              location: event.location,
              url: event.ctaUrl ?? event.eventUrl,
              description: event.description,
            },
          })),
        }}
      />
      <PageHero
        eyebrow="Events"
        title="Where the next pour is happening."
        description="Retail tastings, barrel picks, bottle shares, and the occasional top secret screening. If it's on here, you're invited."
      />
      <section className="shell section">
        <ScheduleList
          items={events}
          emptyTitle="No public events are posted yet."
          emptyDescription="Once Tiffany adds events to her public Google Calendar, they will appear here automatically with the site styling."
        />
      </section>
    </>
  );
}
