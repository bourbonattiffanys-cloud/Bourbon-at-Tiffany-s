"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/consulting", label: "Consulting" },
  { href: "/picks", label: "Picks" },
  { href: "/events", label: "Events" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand-mark" href="/" aria-label="Bourbon at Tiffany's home" onClick={closeMenu}>
          <Image src="/assets/logo.png" alt="Bourbon at Tiffany's logo" width={94} height={94} priority />
          <span>
            <strong>Bourbon at Tiffany&apos;s</strong>
          </span>
        </Link>
        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
        </button>
        <nav
          id="primary-nav"
          className={isMenuOpen ? "site-nav site-nav--open" : "site-nav"}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
