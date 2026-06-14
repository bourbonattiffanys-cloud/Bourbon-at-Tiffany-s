import { PageHero } from "@/components/page-hero";
import { PickCard } from "@/components/pick-card";
import { Reveal } from "@/components/reveal";
import { pastPicks } from "@/data/barrel-picks";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Past Picks",
  path: "/past-picks",
  description: "An archive of Tiffany-led barrel picks with release details, tasting notes, bottle counts, and proof points.",
});

export default function PastPicksPage() {
  return (
    <>
      <PageHero
        eyebrow="Past Picks"
        title="An archive built for people who want the whole story behind a bottle."
        description="Each past pick can carry the details enthusiasts actually care about: bottle count, mashbill, age, tasting notes, and Tiffany's commentary on why the barrel stood out."
      />
      <section className="shell section">
        <div className="pick-grid">
          {pastPicks.map((pick, index) => (
            <Reveal key={pick.slug} delay={index * 0.05}>
              <PickCard pick={pick} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
