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
        eyebrow="Contact"
        title="Reach out to plan a tasting or ask about a pick."
        description="The contact page keeps the brand feeling polished while still making it simple for people to start the conversation."
      />
      <section className="shell section contact-layout">
        <div className="contact-copy editorial-panel">
          <p className="eyebrow">Direct contact</p>
          <h2>Whiskey conversations start here.</h2>
          <ul className="detail-list">
            <li><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
