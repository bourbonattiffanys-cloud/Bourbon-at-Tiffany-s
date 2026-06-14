import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/consulting", label: "Consulting" },
  { href: "/picks", label: "Picks" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand-mark" href="/" aria-label="Bourbon at Tiffany's home">
          <Image src="/assets/logo.png" alt="Bourbon at Tiffany's logo" width={94} height={94} priority />
          <span>
            <strong>Bourbon at Tiffany&apos;s</strong>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
