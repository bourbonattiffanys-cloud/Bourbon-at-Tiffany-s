import type { MetadataRoute } from "next";
import { barrelPicks } from "@/data/barrel-picks";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/experiences",
    "/consulting",
    "/picks",
    "/events",
    "/past-picks",
    "/upcoming-picks",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...barrelPicks.map((pick) => ({
      url: `${siteConfig.url}/picks/${pick.slug}`,
      lastModified: new Date(pick.releaseDate ?? Date.now()),
    })),
  ];
}
