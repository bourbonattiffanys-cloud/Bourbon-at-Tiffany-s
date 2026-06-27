import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PickCard } from "@/components/pick-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredPicks } from "@/data/barrel-picks";
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

      <section className="shell section split-showcase split-showcase--framed section--alt">
        <Reveal className="split-showcase__story">
          <p className="eyebrow">About Tiffany</p>
          <h2>Every sip has a story. I&apos;m here to tell it.</h2>
          <p>
            Most people pour without knowing the half of it — the grain, the barrel, the decision to cut
            at exactly the right moment. I&apos;ve spent years learning those stories so that when you sit
            down at one of my tastings, what&apos;s in the glass actually means something. Every bottle has
            a story most people never hear. I make sure you do.
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

      <section className="shell section home-experiences">
        <Reveal className="home-experiences__copy">
          <p className="eyebrow">Experiences</p>
          <h2>Every occasion. Every story. Every pour.</h2>
          <p>From themed birthday celebrations to corporate client appreciation events to an intimate evening among friends.</p>
          <p className="home-experiences__tagline">Every pour has a purpose.</p>
          <Link className="text-link" href="/experiences">
            See experiences
          </Link>
        </Reveal>
        <Reveal className="home-experiences__photos" delay={0.08}>
          <div className="home-experiences__grid">
            <div className="home-experiences__photo">
              <Image src="/assets/events/clemson-wbb-10-2025-03.JPEG" alt="Private tasting event" fill sizes="33vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="home-experiences__photo">
              <Image src="/assets/events/private-group-9-2023-01.JPG" alt="Private tasting event" fill sizes="33vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="home-experiences__photo">
              <Image src="/assets/events/private-group-8-2023-03.JPEG" alt="Private tasting event" fill sizes="33vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell section testimonials-block">
        <Reveal>
          <SectionHeading
            eyebrow="What Clients Say"
            title="From the people in the room."
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
