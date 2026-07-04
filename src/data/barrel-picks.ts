import type { BarrelPick } from "@/lib/types";

export const barrelPicks: BarrelPick[] = [
  {
    slug: "alvin-langston-vault-rye-2026",
    title: "The Vault Collection, presented by Bourbon at Tiffany's",
    subtitle: "Alvin Langston · 8.5 Year Straight Rye · Single Barrel · Cask Strength",
    status: "available",
    releaseDate: "2026-06",
    bottleCount: 186,
    proof: "110 proof",
    age: "8.5 years",
    mashbill: "51% rye, 45% corn, 4% malted barley",
    barrelType: "Single barrel straight rye",
    stores: [
      { name: "C&M Beverages" },
      { name: "Clyde's Spirits" },
      { name: "Creekville Spirits" },
      { name: "Micky Finn's – Buc-ee's" },
      { name: "Mix & More", location: "N. Charleston & Mt. Pleasant" },
      { name: "Premier Spirits", location: "Camden & Manning" },
      { name: "Seven Star Liquors" },
      { name: "Wine & Bourbon Barn", location: "Greenville, Mauldin & Simpsonville" },
    ],
    onlineSellerName: "Seven Star Liquors",
    onlineSellerUrl: "https://sevenstarliquors.com",
    tastingNotes: [
      "Sweet cherry",
      "Confectioners sugar",
      "Dry cherry (Sweet Tart)",
      "Nutmeg",
      "Baking spice",
      "Whipped cream finish",
    ],
    tiffanyNotes:
      "Sweet cherry and confectioners sugar on the nose. The palate starts with a dry cherry note that reminds me more of a cherry Sweet Tart than the dark cherry notes you often find in bourbon. Nutmeg and baking spice build as it opens, bringing balance without overpowering the fruit.\n\nThe finish is what kept bringing me back to this barrel. It's warm, full, and coats the entire mouth, but never turns hot. The flavors just keep hanging around long after the sip is gone. Even after the glass is empty, sweet cherry and whipped cream linger behind, making the last impression just as enjoyable as the first.",
    heroImage: "/assets/barrel-picks/alvin-langston-vault-rye.jpg",
    ctaMode: "store-info",
    featured: true,
  },
  {
    slug: "broad-branch-rye-2026",
    title: "Broad Branch Distillery — Single Barrel Rye",
    subtitle: "Caramel apple pie in a glass. Upcoming release, August 2026.",
    status: "announced",
    releaseDate: "2026-08",
    proof: "139 proof",
    mashbill: "100% heritage prairie rye",
    barrelType: "Single barrel rye — Barrel 219",
    tastingNotes: [
      "Nose: Granny Smith apple, tobacco, brown sugar, maple",
      "Palate: Nutmeg, confectioners sugar, vanilla",
      "Finish: Long, with an effervescent spice that tingles on the palate",
    ],
    stores: [
      { name: "Clyde's Spirits" },
      { name: "C&M Beverages" },
      { name: "Micky Finn's – Buc-ee's" },
      { name: "Mix & More" },
      { name: "Wine & Bourbon Barn" },
    ],
    heroImage: "/assets/barrel-picks/broad-branch-rye-2026.jpg",
    ctaMode: "interest",
    featured: true,
  },
  {
    slug: "dettling-tiffany-3-2026",
    title: "Dettling — Tiffany 3",
    subtitle: "6 Grain · Single Barrel · Cask Strength · All Female Pick Team · Presented by Bourbon at Tiffany's",
    status: "sold-out",
    releaseDate: "2026-06",
    bottleCount: 150,
    proof: "115.6 proof",
    mashbill: "6 grain",
    barrelType: "Single barrel",
    tastingNotes: ["Molasses", "Chocolate", "Coffee", "Tobacco"],
    tiffanyNotes:
      "This bottle has a nostalgic characteristic that will present different for everyone, but trace back to one root. Can you find it?\n\nNose: molasses, chocolate. Palate: chocolate, molasses, coffee. Finish: medium, oily, tobacco.\n\nThis bottle will be one you can open and enjoy, without waiting 30 minutes for it to open up.",
    heroImage: "/assets/barrel-picks/dettling-tiffany-3.jpg",
    ctaMode: "sold-out",
    inviteOnly: true,
    featured: true,
  },
];

const statusOrder: Record<string, number> = {
  announced: 0,
  "interest-open": 0,
  available: 1,
  "sold-out": 2,
  archived: 3,
};

export const availablePicks = barrelPicks.filter((pick) => pick.status === "available");
export const pastPicks = barrelPicks.filter((pick) => pick.status === "archived");
export const upcomingPicks = barrelPicks.filter(
  (pick) => pick.status === "announced" || pick.status === "interest-open",
);

export const featuredPicks = [...barrelPicks]
  .filter((pick) => pick.status !== "archived")
  .sort((a, b) => new Date(b.releaseDate ?? "").getTime() - new Date(a.releaseDate ?? "").getTime())
  .slice(0, 3)
  .sort((a, b) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99));

export function getPickBySlug(slug: string) {
  return barrelPicks.find((pick) => pick.slug === slug);
}
