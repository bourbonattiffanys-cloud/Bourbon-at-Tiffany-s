import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About",
  path: "/about",
  description: "Learn Tiffany's story, tasting philosophy, and why her barrel-pick point of view connects with bourbon drinkers in South Carolina.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tiffany"
        title="A whiskey voice shaped by curiosity, trust, and a sharp palate."
        description="The redesign gives Tiffany space to feel like a real host and guide, not just a name attached to a generic business card website."
      />
      <section className="shell section split-copy">
        <Reveal>
          <p>
            Bourbon at Tiffany&apos;s began with curiosity and turned into a real point of view: bourbon should be
            generous, legible, and memorable. Tiffany&apos;s work sits at the intersection of education and taste,
            helping people understand what they are drinking and why a barrel or bottle is worth their time.
          </p>
          <p>
            Her approach is welcoming without watering things down. New drinkers feel comfortable. Experienced
            enthusiasts get detail. Everyone gets a better conversation around the glass.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="editorial-panel">
            <p className="eyebrow">Credentials</p>
            <h2>Grounded in learning, not gatekeeping</h2>
            <ul className="detail-list">
              <li>Stave &amp; Thief Society Certified Bourbon Steward</li>
              <li>Known locally for thoughtful barrel picks and strong tasting notes</li>
              <li>Based in Chapin, serving bourbon lovers across South Carolina</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
