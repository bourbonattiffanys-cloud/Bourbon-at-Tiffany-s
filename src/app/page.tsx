import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PickCard } from "@/components/pick-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredPicks } from "@/data/barrel-picks";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/site-content";
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
            <div className="hero__brand">
              <Image
                src="/assets/logo.png"
                alt="Bourbon at Tiffany's logo"
                width={120}
                height={120}
                priority
              />
              <div>
                <p className="eyebrow">Bourbon Education, On Your Time</p>
              </div>
            </div>
            <h1>Tiffany&apos;s palate. Your next pour.</h1>
            <p className="hero__lede">
              Thoughtful tastings, documented barrel picks, and clean release guidance for people who care
              what is in the glass.
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

      <section className="shell section section--tight proof-band">
        <div>
          <p className="eyebrow">At a glance</p>
          <h2>Education, barrel picks, and clean buyer guidance in one place.</h2>
        </div>
        <ul className="proof-band__list">
          <li>Stave &amp; Thief Society Certified Bourbon Steward</li>
          <li>Serving bourbon lovers from Chapin and across South Carolina</li>
          <li>Private tastings, custom events, and pick-release updates</li>
          <li>Barrel-pick pages with specs, notes, and buying details</li>
        </ul>
      </section>

      <section className="shell section">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Picks"
            title="Where the bottle story lives"
            description="Past selections, live links, and interest-first upcoming releases all run through one clear system."
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
          <h2>A warm guide for drinkers who want clarity, not noise.</h2>
          <p>
            Tiffany built Bourbon at Tiffany&apos;s to make whiskey legible and memorable. Her approach is
            equal parts palate, hospitality, and honest translation for people who want to know why a bottle
            matters.
          </p>
          <Link className="text-link" href="/about">
            Read Tiffany&apos;s story
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

      <section className="shell section faq-block">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="Clear expectations before release day"
            description="These answers keep the pick flow straightforward: register interest, watch for release updates, then buy through the listed partner or store."
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
