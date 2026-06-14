import { BarrelLogCard } from "@/components/barrel-log-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { collabPickLogEntries, myPickLogEntries, sortBarrelLogEntries } from "@/data/barrel-log";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Picks",
  path: "/picks",
  description: "Follow Tiffany's selected releases, barrel-log archive, and collaborations.",
});

export default async function PicksPage() {
  const sortedMyPicks = sortBarrelLogEntries(myPickLogEntries);
  const sortedCollabs = sortBarrelLogEntries(collabPickLogEntries);

  return (
    <>
      <PageHero
        eyebrow="Barrel Picks"
        title="Barrel picks, past and present."
        description="Revisit favorite releases, follow what is coming next, and see the collaborations that have shaped the Bourbon at Tiffany's story."
      />

      <section className="shell section">
        <Reveal>
          <SectionHeading
            eyebrow="Tiffany's Picks"
            title="The barrel log"
            description="A running look at the barrels Tiffany has chosen, from early favorites to the releases still on the horizon."
          />
        </Reveal>
        <div className="barrel-log-grid">
          {sortedMyPicks.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.035}>
              <BarrelLogCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section">
        <Reveal>
          <SectionHeading
            eyebrow="Collaborations"
            title="Collaborations"
            description="Shared selections, special projects, and one-off picks that brought Tiffany's palate into the room with other whiskey people."
          />
        </Reveal>
        <div className="barrel-log-grid">
          {sortedCollabs.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.04}>
              <BarrelLogCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
