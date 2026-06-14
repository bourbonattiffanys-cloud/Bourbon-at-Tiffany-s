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
        title="Educational tastings that still know how to host a room."
        description="From first pours to collector-level conversations, each offering is framed to feel polished, personal, and easy to book."
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
