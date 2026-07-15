import { PageHero } from "@/components/page-hero";
import { PickCard } from "@/components/pick-card";
import { Reveal } from "@/components/reveal";
import { upcomingPicks } from "@/data/barrel-picks";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Upcoming Picks",
  path: "/upcoming-picks",
  description: "Track Tiffany's announced and available picks, register interest, and find out where bottles will land when they go live.",
});

export default function UpcomingPicksPage() {
  return (
    <>
      <PageHero
        eyebrow="Upcoming Picks"
        title="Follow the next releases before they hit the shelf."
        description="Register interest early, and I'll follow up with store details and next steps as each release comes together."
      />
      <section className="shell section">
        <div className="pick-grid">
          {upcomingPicks.map((pick, index) => (
            <Reveal key={pick.slug} delay={index * 0.05}>
              <PickCard pick={pick} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
