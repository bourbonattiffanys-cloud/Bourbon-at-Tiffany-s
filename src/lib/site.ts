import type { Metadata } from "next";

export const siteConfig = {
  name: "Bourbon at Tiffany's",
  legalName: "Bourbon Education, On Your Time",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bourbonattiffanys.com",
  description:
    "Private bourbon tastings, barrel-pick coverage, and whiskey education rooted in Tiffany's palate, hospitality, and South Carolina whiskey community.",
  email: "tiffany@bourbonattiffanys.com",
  phone: "(812) 764-5412",
  phoneHref: "tel:8127645412",
  location: "Chapin, South Carolina",
  address: "Chapin, South Carolina 29036, United States",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL,
  instagram: "https://www.instagram.com/bourbon_at_tiffanys/",
  youtube: "https://www.youtube.com/channel/UCzlICdsAUfMQkfWxKaEysoQ",
} as const;

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const resolvedDescription = description ?? siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: resolvedDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/assets/hero.jpg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      images: ["/assets/hero.jpg"],
    },
  };
}
