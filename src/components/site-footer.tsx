import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { socialLinks } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="eyebrow">Bourbon at Tiffany&apos;s</p>
          <h2>A Southern whiskey point of view.</h2>
          <p className="footer-copy">
            Private tastings, barrel-pick stories, and upcoming release details rooted in hospitality,
            clarity, and good bourbon conversation.
          </p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <ul className="footer-list">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/experiences">Experiences</Link></li>
            <li><Link href="/consulting">Consulting</Link></li>
            <li><Link href="/picks">Picks</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <ul className="footer-list">
            <li><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
        <div>
          <p className="footer-label">Follow</p>
          <ul className="footer-list">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
