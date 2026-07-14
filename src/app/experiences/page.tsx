import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata, siteConfig } from "@/lib/site";

const eventGalleries = [
  {
    caption: "A private tasting hosted for Clemson Women's Basketball Head Coach Shawn Poppie",
    images: [
      { src: "/assets/events/clemson-wbb-10-2025-01.JPEG", aspect: "1536/1871" },
      { src: "/assets/events/clemson-wbb-10-2025-02.JPEG", aspect: "1606/1958" },
      { src: "/assets/events/clemson-wbb-10-2025-03.JPEG", aspect: "3/4" },
      { src: "/assets/events/clemson-wbb-10-2025-04.JPEG", aspect: "3/4" },
      { src: "/assets/events/clemson-wbb-10-2025-05.JPEG", aspect: "3/4" },
    ],
  },
  {
    caption: "A food and bourbon pairing experience",
    images: [
      { src: "/assets/events/food-bourbon-pairing-02.JPEG", aspect: "12/5", span: 2 },
      { src: "/assets/events/food-bourbon-pairing-03.JPEG", aspect: "3/4" },
    ],
  },
  {
    caption: "A private tasting, August 2023",
    images: [
      { src: "/assets/events/private-group-8-2023-03.JPEG", aspect: "3/4" },
      { src: "/assets/events/private-group-8-2023-04.JPEG" },
    ],
  },
  {
    caption: "A private tasting, September 2023",
    images: [
      { src: "/assets/events/private-group-9-2023-01.JPG" },
      { src: "/assets/events/private-group-9-2023-02.JPG", aspect: "3024/3290" },
      { src: "/assets/events/private-group-9-2023-03.JPG", aspect: "1250/1257", position: "top left" },
    ],
  },
  {
    caption: "A 70th birthday tasting — six bottles selected so their ages added up to exactly seventy, with custom glassware made for the occasion",
    images: [{ src: "/assets/events/70th-birthday-party-01.JPEG", aspect: "1067/1388" }],
  },
  {
    caption: "A private birthday tasting",
    images: [
      { src: "/assets/events/private-birthday-party-01.jpg", aspect: "2048/1366" },
      { src: "/assets/events/private-birthday-party-02.jpg", aspect: "2048/1366" },
      { src: "/assets/events/private-birthday-party-03.jpg", aspect: "2048/1366" },
      { src: "/assets/events/private-birthday-party-04.jpg", aspect: "2048/1345" },
      { src: "/assets/events/private-birthday-party-05.jpg", aspect: "2048/1556" },
      { src: "/assets/events/private-birthday-party-06.jpg", aspect: "1575/1366" },
    ],
  },
  {
    caption: "A few more moments from tastings along the way",
    images: [
      { src: "/assets/events/misc-events.JPEG", aspect: "2389/2026" },
      { src: "/assets/events/misc-events-03.JPEG", aspect: "2172/1448" },
      { src: "/assets/events/misc-events-05.jpg", aspect: "1126/907" },
      { src: "/assets/events/misc-events-04.jpeg", aspect: "2207/2412" },
      { src: "/assets/events/misc-events-02-cropped.jpg", aspect: "3/4" },
    ],
  },
];

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

      {eventGalleries.map((gallery, gi) => (
        <section key={gi} className="shell section event-gallery">
          <Reveal>
            <p className="event-gallery__caption eyebrow">{gallery.caption}</p>
          </Reveal>
          {gallery.images.length > 0 && (
            <div className="event-gallery__grid">
              {gallery.images.map((image, i) => (
                <Reveal
                  key={image.src}
                  delay={i * 0.05}
                  style={image.span ? { gridColumn: `span ${image.span}` } : undefined}
                >
                  <div
                    className="event-gallery__item"
                    style={{ aspectRatio: image.aspect ?? "4/3" }}
                  >
                    <Image
                      src={image.src}
                      alt={`Event photo ${i + 1}`}
                      width={800}
                      height={600}
                      className="event-gallery__img"
                      style={{ objectPosition: image.position ?? "center" }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="shell section experiences-contact">
        <Reveal className="experiences-contact__inner">
          <h2>Ready to plan something?</h2>
          <p>
            Every tasting is built around the people in the room. Tell me who you&apos;re hosting,
            what you want them to walk away knowing, and I&apos;ll take it from there.
          </p>
          <Link className="button" href="/contact">
            Get in touch
          </Link>
        </Reveal>
      </section>
    </>
  );
}
