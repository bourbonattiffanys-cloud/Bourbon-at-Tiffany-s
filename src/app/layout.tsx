import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { createMetadata, siteConfig } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = createMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.legalName,
            description: siteConfig.description,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chapin",
              addressRegion: "SC",
              postalCode: "29036",
              addressCountry: "US",
            },
            image: `${siteConfig.url}/assets/hero.jpg`,
            sameAs: [siteConfig.instagram, siteConfig.youtube],
          }}
        />
        <div className="site-frame">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
