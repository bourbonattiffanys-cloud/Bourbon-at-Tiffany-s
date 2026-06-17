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
    title: "Showing up for your brand",
    copy: "Tastings, launch events, club dinners, retail appearances — I show up prepared, on brand, and with an audience that already trusts my recommendations. The people who follow me know I don't work with brands I don't believe in. Every bottle I represent is already in my cabinet because I've been buying that brand for years. That means I can speak to the history, the story, the mashbill, and the reasons it belongs in someone's glass — and people in that room can tell the difference.",
  },
  {
    title: "Retail that actually sticks",
    copy: "A one-time tasting bump isn't a strategy. The goal is retail partners who know the bottle well enough to recommend it, reorder it, and eventually want to pick their own barrel. I work with store staff and buyers to build real familiarity with a brand — the kind that shows up in conversations with customers long after I've left the room.",
  },
  {
    title: "Relationships that move product",
    copy: "Distributors are an essential part of getting a bottle to market, and those relationships matter. What I add is deep familiarity with the South Carolina market — real connections with buyers, store staff, and the bourbon community that took time and consistency to build. That's the difference between a placement and a partnership.",
  },
  {
    title: "Field notes and next steps",
    copy: "After every event or tasting, I follow up — with the brand, with the store, and thirty days later to see what actually moved. I communicate however works best for the team: forms, email, text. What I bring back isn't just a recap — it's observations, opportunities, and a clear picture of what to do next. The brands I do my best work for are the ones who are ready to have that conversation.",
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
        title="The South Carolina market presence your brand can't afford to skip."
        description="Hiring a full-time sales rep isn't always an option. Distributor incentives buy a moment, not a relationship. I work with whiskey brands that want more than a placement — stores that know the bottle, staff that can talk about it, and accounts that keep coming back."
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
            I don&apos;t just show up and pour — I bring people with me. After years of building a community
            around honest picks, real relationships, and showing up consistently, my audience follows me to
            tastings, clubs, and events. When I&apos;m in the room representing your brand, I&apos;m not
            starting cold. People are there because they trust what I recommend. That trust is what I bring
            to every pour.
          </p>
        </Reveal>
      </section>

      <section className="shell section consulting-partners">
        <Reveal>
          <SectionHeading
            eyebrow="Who I Work With"
            title="Brands I believe in."
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
            eyebrow="What I Bring"
            title="The work behind the reputation."
            description="Whether you need me for a single event or as your boots on the ground in South Carolina, here's what that looks like."
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
