import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Reach Tiffany to plan a bourbon tasting, ask about barrel picks, or start a custom whiskey event conversation.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="The conversation starts here."
        title="You made it this far for a reason."
      />
      <section className="shell section contact-layout">
        <div className="contact-copy editorial-panel">
          <h2>I read every message personally.</h2>
          <ul className="detail-list">
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
          </ul>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
