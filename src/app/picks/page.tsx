import { BarrelLogTabs } from "@/components/barrel-log-tabs";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  clientProjectEntries,
  collabPickLogEntries,
  myPickLogEntries,
  sortBarrelLogEntries,
  sortClientProjectEntries,
} from "@/data/barrel-log";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Picks",
  path: "/picks",
  description: "Follow Tiffany's selected releases, barrel-log archive, and collaborations.",
});

export default async function PicksPage() {
  const sortedMyPicks = sortBarrelLogEntries(myPickLogEntries);
  const sortedCollabs = sortBarrelLogEntries(collabPickLogEntries);
  const sortedClientProjects = sortClientProjectEntries(clientProjectEntries);

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
            eyebrow="The Log"
            title="Every barrel, one place"
            description="My picks, collaborations, and client projects — all in one searchable log."
          />
        </Reveal>
        <BarrelLogTabs
          myPicks={sortedMyPicks}
          collabs={sortedCollabs}
          clientProjects={sortedClientProjects}
        />
      </section>
    </>
  );
}
