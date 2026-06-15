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
import { faqs } from "@/data/site-content";
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

  const totalBarrels =
    myPickLogEntries.length + collabPickLogEntries.length + clientProjectEntries.length;

  const totalBottles = [
    ...myPickLogEntries,
    ...collabPickLogEntries,
    ...clientProjectEntries,
  ].reduce((sum, e) => sum + (e.bottleCount ?? 0), 0);

  return (
    <>
      <PageHero
        eyebrow="Barrel Picks"
        title="Barrel picks, past and present."
        description="Revisit favorite releases, follow what is coming next, and see the collaborations that have shaped the Bourbon at Tiffany's story."
      />

      <div className="shell log-totals-strip">
        <Reveal>
          <div className="log-totals">
            <div className="log-totals__stat">
              <span className="log-totals__value">{totalBarrels}</span>
              <span className="log-totals__label">Total Barrels</span>
            </div>
            <div className="log-totals__stat">
              <span className="log-totals__value">{totalBottles.toLocaleString()}</span>
              <span className="log-totals__label">Total Bottles</span>
            </div>
          </div>
        </Reveal>
      </div>

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
      <section className="shell section faq-block">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="How picks work"
            description="Register interest early, then check back once the release details are confirmed."
          />
        </Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <article className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
