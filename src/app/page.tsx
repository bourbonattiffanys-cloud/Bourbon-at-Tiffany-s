import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PickCard } from "@/components/pick-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredPicks } from "@/data/barrel-picks";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: siteConfig.name,
  description:
    "A refined home for Tiffany's bourbon education, barrel picks, and upcoming releases in South Carolina.",
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero__content hero__content--split">
          <Reveal className="hero__panel">
            <p className="eyebrow">Life&apos;s too short to drink average bourbon.</p>
            <h1>Taste matters. Find yours.</h1>
            <p className="hero__lede">
              Hand-curated tastings, a living barrel log, and a filter for all the noise. No recycled
              reviews — just real guidance for people who want to know what&apos;s actually worth pouring.
            </p>
            <div className="hero__actions">
              <Link className="button" href="/contact">
                Plan a tasting
              </Link>
              <Link className="button button--secondary" href="/picks">
                Explore picks
              </Link>
            </div>
          </Reveal>
          <Reveal className="hero__art" delay={0.08}>
            <div className="hero__image-frame">
              <Image
                src="/assets/hero.jpg"
                alt="Tiffany with bourbon glasses"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

<section className="shell section">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Picks"
            title="What's coming next."
            action={
              <Link className="text-link" href="/picks">
                Browse all picks
              </Link>
            }
          />
        </Reveal>
        <div className="pick-grid">
          {featuredPicks.map((pick, index) => (
            <Reveal key={pick.slug} delay={index * 0.06}>
              <PickCard pick={pick} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section split-showcase split-showcase--framed">
        <Reveal className="split-showcase__story">
          <p className="eyebrow">About Tiffany</p>
          <h2>Every sip has a story. I&apos;m here to tell it.</h2>
          <p>
            Bourbon at Tiffany&apos;s was built around the untold stories. A tasting isn&apos;t just about
            what&apos;s in the glass — it&apos;s about the farmer who grew the grain, the timber farmer who
            supplied the oak, the cooper who built the barrel, the distiller who made the cut, the team
            rolling barrels into the rickhouse, the bottling line, the logistics crew getting it to the
            shelf, and everyone in between whose work made that sip possible. Most people will never travel
            to every distillery across the country. I go so you don&apos;t have to, and I bring the whole
            story back with me.
          </p>
          <Link className="text-link" href="/about">
            Read my story
          </Link>
        </Reveal>
        <Reveal className="split-showcase__detail" delay={0.1}>
          <div className="showcase-photo">
            <Image
              src="/assets/hero.jpg"
              alt="Bourbon tasting atmosphere"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="shell section">
        <Reveal>
          <SectionHeading
            eyebrow="Experiences"
            title="Tastings for every stage of the bourbon journey"
            description="The service side stays premium and easy to scan, with each offer focused on one audience and outcome."
            action={
              <Link className="text-link" href="/experiences">
                View experiences
              </Link>
            }
          />
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <article className="service-card">
                <p className="eyebrow">{service.price}</p>
                <h3>{service.name}</h3>
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

      <section className="shell section testimonials-block">
        <Reveal>
          <SectionHeading
            eyebrow="What Clients Say"
            title="Credibility without the corporate tone"
            description="The best proof is still the room after the tasting: informed, energized, and talking about the next pour."
            align="center"
          />
        </Reveal>
        <div className="quote-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <blockquote className="quote-card">
                <p>{testimonial.quote}</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

<section className="shell section final-cta">
        <Reveal>
          <p className="eyebrow">Ready to work together?</p>
          <h2>Book a tasting or join the next barrel-pick list.</h2>
          <div className="hero__actions final-cta__actions">
            <Link className="button" href="/contact">
              Contact Tiffany
            </Link>
            <Link className="button button--secondary" href="/picks">
              Register for a pick
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
