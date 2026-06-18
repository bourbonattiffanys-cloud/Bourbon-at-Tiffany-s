import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/services";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Experiences",
  path: "/experiences",
  description: "Private bourbon tastings, advanced classes, and custom whiskey experiences led by Tiffany.",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="The stories behind the bottle, brought to your table."
        description="Not everyone can visit every distillery. I bring the brands you've never heard of, the history you didn't know existed, and the bottles you can't find on a shelf — and I make it feel like you were there."
      >
        <div className="hero__actions hero__actions--compact">
          <a className="button" href={siteConfig.bookingUrl ?? "/contact"}>
            Book a tasting
          </a>
          <Link className="button button--ghost" href="/contact">
            Ask about a custom event
          </Link>
        </div>
      </PageHero>
      <section className="shell section consulting-intro">
        <Reveal className="consulting-intro__copy">
          <h2>Every flight has a reason.</h2>
        </Reveal>
        <Reveal className="consulting-intro__detail" delay={0.08}>
          <p>
            I build every menu by hand, pulling from a collection that has long since outgrown its dedicated
            space. These aren&apos;t everyday pours — they&apos;re specialty barrels, rare grains,
            distillery-only bottles, and selections chosen because they have something worth talking about.
            The science of the barrel, the story of the distillery, the reason one sip tastes nothing like
            the last.
          </p>
        </Reveal>
      </section>

      <section className="shell section">
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <article className="service-card service-card--tall">
                <p className="eyebrow">{service.price}</p>
                <h2>{service.name}</h2>
                <p>{service.summary}</p>
                <ul>
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
