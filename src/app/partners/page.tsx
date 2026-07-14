import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { partners } from "@/data/partners";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Partners",
  path: "/partners",
  description:
    "The people who showed up before it was a business — the craftspeople, creatives, and collaborators behind Bourbon at Tiffany's.",
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="The people behind the pour."
      />

      <section className="shell section">
        <Reveal>
          <p className="partners-intro">
            These are the people who showed up before it was a business. They believed in what I was
            building, contributed their craft to it, and helped make it real. None of this looks the
            way it does without them.
          </p>
        </Reveal>

        <div className="partner-list">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 0.06}>
              <article className="partner-card">
                <div className="partner-card__media">
                  <Image
                    src={partner.photo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    style={{ objectFit: partner.photoFit ?? "cover" }}
                  />
                </div>
                <div className="partner-card__copy editorial-panel">
                  <p className="eyebrow">{partner.role}</p>
                  <h2>{partner.name}</h2>
                  <p className="partner-card__business">{partner.business}</p>
                  <p>{partner.description}</p>
                  {partner.projects?.length ? (
                    <div className="partner-card__projects">
                      <p className="eyebrow">Work together</p>
                      <ul>
                        {partner.projects.map((project) => (
                          <li key={project}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {partner.website ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Visit {partner.business}
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
