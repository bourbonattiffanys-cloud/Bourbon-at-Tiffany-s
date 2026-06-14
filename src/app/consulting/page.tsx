import Image from "next/image";
import Link from "next/link";
import { ConsultingForm } from "@/components/consulting-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/site";

const brandPartners = [
  { name: "High Wire Distilling", domain: "highwiredistilling.com" },
  { name: "Broad Branch Distillery", domain: "broadbranchdistillery.com" },
  { name: "ASW Distillery", domain: "aswdistillery.com" },
  { name: "Driftless Glen", domain: "driftlessglen.com" },
];

const consultingServices = [
  {
    title: "Brand ambassador presence",
    copy: "A polished whiskey voice for tastings, launches, account visits, and consumer moments that need more than a script.",
  },
  {
    title: "Retail tasting execution",
    copy: "Store-level experiences that make the bottle easier to understand, recommend, and remember.",
  },
  {
    title: "Trade relationship support",
    copy: "Clear communication with stores, distributors, and brand teams before and after the public-facing work.",
  },
  {
    title: "Field notes and next steps",
    copy: "Useful readouts on buyer feedback, account needs, consumer response, and where the brand can go next.",
  },
];

const processSteps = [
  "Learn the brand, the bottle, and the audience you want to reach.",
  "Shape the right mix of tastings, account visits, education, and event support.",
  "Represent the brand with a consistent voice in the room.",
  "Follow up with the signals, questions, and opportunities worth acting on.",
];

export const metadata = createMetadata({
  title: "Consulting",
  path: "/consulting",
  description:
    "Brand ambassador and field support for distilleries and whiskey brands that need a trusted voice in the market.",
});

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title="A trusted voice for the bottle beyond the label."
        description="Brand ambassador and field support for whiskey teams that want the story, the tasting, and the follow-up to feel connected."
      >
        <div className="hero__actions hero__actions--compact">
          <Link className="button" href="#consulting-inquiry">
            Start a brand conversation
          </Link>
          <Link className="button button--secondary" href="/events">
            See public events
          </Link>
        </div>
      </PageHero>

      <section className="shell section consulting-intro">
        <Reveal className="consulting-intro__copy">
          <p className="eyebrow">Brand Field Partner</p>
          <h2>When the bottle needs someone in the room.</h2>
        </Reveal>
        <Reveal className="consulting-intro__detail" delay={0.08}>
          <p>
            Tiffany helps whiskey brands show up with warmth, clarity, and credibility: translating the
            product for retail teams, leading tastings with confidence, and bringing useful feedback back to
            the people building the brand.
          </p>
        </Reveal>
      </section>

      <section className="shell section consulting-partners">
        <Reveal>
          <SectionHeading
            eyebrow="Current Partners"
            title="Brands Tiffany is working with"
          />
        </Reveal>
        <div className="consulting-partners__grid">
          {brandPartners.map((brand, index) => (
            <Reveal key={brand.domain} delay={index * 0.05}>
              <div className="consulting-partners__item">
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`}
                  alt={`${brand.name} logo`}
                  width={64}
                  height={64}
                  className="consulting-partners__logo"
                />
                <p>{brand.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section">
        <Reveal>
          <SectionHeading
            eyebrow="What Tiffany Supports"
            title="Presence, education, and practical follow-through"
            description="The work can flex around the brand: a polished public appearance, a focused retail push, or a fuller field-support rhythm."
          />
        </Reveal>
        <div className="consulting-service-list">
          {consultingServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="consulting-service">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section consulting-proof">
        <Reveal>
          <p className="eyebrow">Where It Helps</p>
          <h2>Useful when a brand needs more than a placement.</h2>
        </Reveal>
        <div className="consulting-proof__grid">
          <Reveal className="editorial-panel" delay={0.05}>
            <h3>Emerging brands</h3>
            <p>
              Bring a credible, hospitality-minded whiskey voice into markets where the brand is still
              earning recognition.
            </p>
          </Reveal>
          <Reveal className="editorial-panel" delay={0.1}>
            <h3>Launch moments</h3>
            <p>
              Give a new bottle or campaign a stronger room presence, clearer education, and a better path
              after the first pour.
            </p>
          </Reveal>
          <Reveal className="editorial-panel" delay={0.15}>
            <h3>Retail learning</h3>
            <p>
              Understand what buyers, staff, and drinkers are responding to so the next conversation gets
              sharper.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell section consulting-process">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple rhythm for showing up well"
            description="Start with the bottle and the audience, then shape the right mix of education, appearances, retail support, and follow-up."
          />
        </Reveal>
        <ol className="consulting-process__list">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <li>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="consulting-inquiry" className="shell section contact-layout consulting-contact">
        <Reveal className="contact-copy editorial-panel">
          <p className="eyebrow">Start The Conversation</p>
          <h2>Tell Tiffany what the brand is trying to build.</h2>
          <p>
            Share the bottle, the audience, and the kind of support that would make the next chapter easier.
            Tiffany can follow up with the right questions and a private path forward.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ConsultingForm />
        </Reveal>
      </section>
    </>
  );
}
