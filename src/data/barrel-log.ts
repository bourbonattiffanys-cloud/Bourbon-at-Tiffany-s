import type { BarrelLogEntry, ClientProjectEntry } from "@/lib/types";

export const myPickLogEntries: BarrelLogEntry[] = [
  {
    id: "starlight-distillery-2023-06",
    category: "my-pick",
    distillery: "Starlight Distillery",
    logoDomain: "starlightdistillery.com",
    pickDate: "2023-06",
    releaseDate: "2023-09",
    bottleCount: 204,
    proof: "117.2 proof",
    availability: "sold-out",
    notes: "5.5 years",
  },
  {
    id: "pinhook-2023-07",
    category: "my-pick",
    distillery: "Pinhook",
    logoDomain: "pinhookbourbon.com",
    pickDate: "2023-07",
    releaseDate: "2025-12",
    bottleCount: 180,
    proof: "121.5 proof",
    mashbill: "75% corn, 20.5% rye, 4.5% malted barley",
    availability: "sold-out",
    notes: "8 year",
  },
  {
    id: "dettling-2024-09",
    category: "my-pick",
    distillery: "Dettling",
    series: "Tiffany 1",
    logoDomain: "dettling1867.com",
    pickDate: "2024-09",
    releaseDate: "2024-11",
    bottleCount: 162,
    proof: "116.4 proof",
    age: "50 months",
    mashbill: "70% corn, 15% rye, 12% oats, 3% specialty malts",
    availability: "sold-out",
    notes: "Barrel 520",
  },
  {
    id: "broad-branch-distillery-2024-07",
    category: "my-pick",
    distillery: "Broad Branch Distillery",
    logoImage: "/assets/logos/Broad-Branch-mark.png",
    pickDate: "2024-07",
    releaseDate: "2024-11",
    bottleCount: 148,
    proof: "141 proof",
    mashbill: "86% white corn, 6% heritage prairie rye, 8% malted barley",
    availability: "sold-out",
    notes: "Barrel 152",
  },
  {
    id: "alvin-langston-2025-11",
    category: "my-pick",
    distillery: "Alvin Langston",
    series: "The Vault Collection",
    image: "/assets/barrel-picks/vault-american-light.jpg",
    logoDomain: "contrarycow.com",
    pickDate: "2025-11",
    releaseDate: "2026-03",
    bottleCount: 78,
    proof: "140 proof",
    whiskyType: "American Light Whiskey",
    mashbill: "99% corn, 1% malted barley",
    availability: "sold-out",
    notes: "3 weeks from being 21 years old",
  },
  {
    id: "alvin-langston-2026-02",
    category: "my-pick",
    distillery: "Alvin Langston",
    series: "The Vault Collection",
    image: "/assets/barrel-picks/alvin-langston-vault-rye.jpg",
    logoDomain: "contrarycow.com",
    pickDate: "2026-02",
    releaseDate: "2026-06",
    bottleCount: 186,
    proof: "110 proof",
    age: "8.5 years",
    whiskyType: "Straight Rye Whiskey",
    mashbill: "51% rye, 45% corn, 4% malted barley",
    availability: "available",
    notes: "Distilled at MGP",
  },
  {
    id: "broad-branch-distillery-2025-05",
    category: "my-pick",
    distillery: "Broad Branch Distillery",
    series: "Carolina Blend Batch 001",
    logoImage: "/assets/logos/Broad-Branch-mark.png",
    pickDate: "2025-05",
    releaseDate: "2025-08",
    bottleCount: 312,
    proof: "139 proof",
    mashbill: "86% white corn, 6% heritage prairie rye, 8% malted barley",
    availability: "sold-out",
    notes: "2 barrel blend",
  },
  {
    id: "broad-branch-distillery-2026-04",
    category: "my-pick",
    distillery: "Broad Branch Distillery",
    series: "Rye Fidelity",
    image: "/assets/barrel-picks/broad-branch-rye-2026.jpg",
    logoImage: "/assets/logos/Broad-Branch-mark.png",
    pickDate: "2026-04",
    releaseDate: "2026-08",
    proof: "TBD",
    mashbill: "100% heritage prairie rye",
    notes: "Barrel 219",
  },
  {
    id: "dettling-2026-05",
    category: "my-pick",
    distillery: "Dettling",
    series: "Tiffany 3",
    image: "/assets/barrel-picks/dettling-tiffany-3.jpg",
    logoDomain: "dettling1867.com",
    pickDate: "2026-05",
    releaseDate: "2026-06",
    bottleCount: 150,
    proof: "115.6 proof",
    mashbill: "70% corn, 15% rye, 12% oats, 3% specialty malts",
    availability: "sold-out",
    notes: "All female pick team",
  },
  {
    id: "dettling-2025-01",
    category: "my-pick",
    distillery: "Dettling",
    series: "Tiffany 2",
    image: "/assets/barrel-picks/dettling-tiffany-2.jpg",
    logoDomain: "dettling1867.com",
    pickDate: "2024-09",
    releaseDate: "2025-01",
    bottleCount: 150,
    proof: "113.9 proof",
    age: "52 months",
    mashbill: "70% corn, 15% rye, 12% oats, 3% specialty malts",
    availability: "sold-out",
    notes: "Barrel 496 — Spiral Cut",
  },
];

export const collabPickLogEntries: BarrelLogEntry[] = [
  {
    id: "high-wire-distilling-2023-08",
    category: "collab",
    distillery: "High Wire Distilling",
    partner: "Gamecock Bourbon Society",
    logoDomain: "highwiredistilling.com",
    pickDate: "2023-08",
    releaseDate: "2023-11",
    bottleCount: 196,
    proof: "115.4 proof",
    age: "3 years, 56 days",
    mashbill: "100% Jimmy Red corn",
    farmLocation: "Plumfield Tract, Darlington, SC",
    availability: "available",
    stores: [{ name: "Bottles", location: "Columbia, SC" }],
  },
  {
    id: "jack-daniels-2024-05",
    category: "collab",
    distillery: "Jack Daniel's",
    partner: "Clyde's Spirits",
    logoDomain: "jackdaniels.com",
    pickDate: "2024-05",
    releaseDate: "2024-10",
    bottleCount: 276,
    proof: "94 proof",
    mashbill: "80% corn, 8% rye, 12% malted barley",
    availability: "available",
    stores: [{ name: "Clyde's Spirits" }],
    notes: "All female pick - the Bonnie's of Clyde's",
  },
  {
    id: "high-wire-distilling-2025-10",
    category: "collab",
    distillery: "High Wire Distilling",
    partner: "SodaBoyz",
    image: "/assets/barrel-picks/Soda-Boyz-High-Wire.JPEG",
    logoDomain: "highwiredistilling.com",
    logoImage: "/assets/logos/TheSodaBoyzTRANSPARENT02.png",
    pickDate: "2025-10",
    releaseDate: "2025-12",
    bottleCount: 174,
    proof: "118 proof",
    mashbill: "100% Jimmy Red corn",
    farmLocation: "W.P. Rawls Farm, Pelion, SC",
    availability: "available",
    stores: [{ name: "Morganelli's Party Store", logoImage: "/assets/logos/morganellislogo.jpg" }],
  },
  {
    id: "holladay-2025-11-boldest",
    category: "collab",
    distillery: "Holladay Distillery",
    partner: "Heritage Liquor & Wine",
    logoDomain: "holladaydistillery.com",
    pickDate: "2025-11",
    releaseDate: "2026-03",
    bottleCount: 174,
    proof: "125.3 proof",
    mashbill: "73% corn, 15% soft red wheat, 12% malted barley",
    availability: "available",
    stores: [{ name: "Heritage Liquor & Wine", logoImage: "/assets/logos/Heritage-Liquor-Wine.png" }],
    notes: "The Boldest",
  },
  {
    id: "holladay-distillery-2025-11-oldest",
    category: "collab",
    distillery: "Holladay Distillery",
    partner: "Heritage Liquor & Wine",
    logoDomain: "holladaydistillery.com",
    pickDate: "2025-11",
    releaseDate: "2026-03",
    bottleCount: 162,
    proof: "121.4 proof",
    mashbill: "73% corn, 15% soft red wheat, 12% malted barley",
    availability: "available",
    stores: [{ name: "Heritage Liquor & Wine", logoImage: "/assets/logos/Heritage-Liquor-Wine.png" }],
    notes: "The Oldest",
  },
  {
    id: "broad-branch-distillery-2024-06",
    category: "collab",
    distillery: "Broad Branch Distillery",
    partner: "Heritage Liquor & Wine",
    logoImage: "/assets/logos/Broad-Branch-mark.png",
    pickDate: "2024-06",
    releaseDate: "2024-10",
    bottleCount: 144,
    proof: "141 proof",
    mashbill: "86% white corn, 6% heritage prairie rye, 8% malted barley",
    availability: "sold-out",
  },
];

export const barrelLogEntries = [...myPickLogEntries, ...collabPickLogEntries];

function entryDateValue(entry: BarrelLogEntry) {
  return entry.releaseDate ?? entry.pickDate ?? "0000-00";
}

export function formatBarrelLogDate(value?: string) {
  if (!value) {
    return "TBD";
  }

  const [year, month] = value.split("-");
  if (!year || !month) {
    return value;
  }

  const date = new Date(`${year}-${month}-15T12:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function sortBarrelLogEntries(entries: BarrelLogEntry[]) {
  return [...entries].sort((a, b) => entryDateValue(b).localeCompare(entryDateValue(a)));
}

export function isUpcomingBarrelLogRelease(entry: BarrelLogEntry, referenceDate = new Date()) {
  if (!entry.releaseDate) {
    return false;
  }

  const [year, month] = entry.releaseDate.split("-").map(Number);
  if (!year || !month) {
    return false;
  }

  const releaseDate = new Date(year, month - 1, 1);
  const currentMonth = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1);
  return releaseDate > currentMonth;
}

export const upcomingLogEntries = sortBarrelLogEntries(
  barrelLogEntries.filter((entry) => isUpcomingBarrelLogRelease(entry)),
);

export const pastLogEntries = sortBarrelLogEntries(
  barrelLogEntries.filter((entry) => entryDateValue(entry) < "2026-05"),
);

export const clientProjectEntries: ClientProjectEntry[] = [
  {
    id: "asw-2026-05",
    client: "ASW Distillery",
    type: "Club",
    logoImages: ["/assets/logos/TheSodaBoyzTRANSPARENT02.png"],
    pickDate: "2026-05",
    releaseDate: "2026-07",
    availability: "upcoming",
    proof: "119.6 proof",
    age: "7 years 6 months",
    mashbill: "51% corn, 45% wheat, 4% malted barley",
    stores: [{ name: "Morganelli's", logoImage: "/assets/logos/morganellislogo.jpg" }],
    notes: "SodaBoyz pick. Serial #812. Gainesville Cooperage. 20 finishing staves.",
  },
  {
    id: "hollow-creek-scbc-2023-09",
    client: "South Carolina Bourbon Community",
    distillery: "Hollow Creek Distillery",
    type: "Club",
    pickDate: "2023-09",
    releaseDate: "2023-10",
    bottleCount: 203,
    proof: "124.6 proof",
    mashbill: "66% corn, 14% rye, 20% malted barley",
    notes: "William Alan label",
  },
  {
    id: "hollow-creek-veterans-2023-10",
    client: "Whiskey & Whitetails / The Big Red Barn",
    distillery: "Hollow Creek Distillery",
    type: "Non-Profit",
    pickDate: "2023-10",
    releaseDate: "2024-11",
    availability: "sold-out",
    bottleCount: 202,
    proof: "126.4 proof",
    mashbill: "66% corn, 14% rye, 20% malted barley",
    notes: "William Alan label — Battlefield Bourbon.",
  },
  {
    id: "hollow-creek-rackhouse-cm-2025",
    client: "Rackhouse 76 & C&M Beverages",
    distillery: "Hollow Creek Distillery",
    logoImages: ["/assets/logos/cm-beverages.jpg"],
    type: "Store",
    pickDate: "2025-05",
    releaseDate: "2025-06",
    availability: "available",
    bottleCount: 200,
    proof: "113.4 proof",
    mashbill: "70% corn, 26% rye, 4% malted barley",
    notes: "High Cotton barrel — split barrel between two stores",
  },
  {
    id: "tigers-give-back",
    client: "Tigers Give Back",
    collectionName: "The Poppie Collection",
    distillery: "Bardstown Bourbon Company",
    type: "Non-Profit",
    logoImage: "/assets/logos/tigersgiveback.jpeg",
    releaseDate: "2026-03",
    availability: "available",
    proof: "95 proof",
    bottleCount: 228,
    finish: "Toasted chips",
    notes: "$5 from every bottle sold donated to Tigers Give Back.",
  },
  {
    id: "split-barrel-cm-clydes",
    client: "C&M Beverages & Clyde's Spirits",
    collectionName: "The Split Barrel",
    distillery: "OZ Tyler",
    type: "Store",
    logoImages: ["/assets/logos/cm-beverages.jpg", "/assets/logos/clydes.jpg"],
    releaseDate: "2026-05",
    image: "/assets/barrel-picks/split-barrel.jpg",
    age: "7 years",
    proof: "122 proof",
    availability: "available",
    bottleCount: 144,
    mashbill: "78% corn, 13% rye, 9% malted barley",
  },
  {
    id: "midlands-to-coast",
    client: "C&M Beverages & Mix & More Liquors",
    collectionName: "Midlands to the Coast",
    distillery: "MGP",
    type: "Store",
    logoImages: ["/assets/logos/cm-beverages.jpg", "/assets/logos/mixandmore.png"],
    releaseDate: "2026-05",
    image: "/assets/barrel-picks/midlands-to-coast.jpg",
    age: "10 years",
    whiskyType: "American Light Whiskey",
    finish: "Double oaked in small Kelvin Barrels",
    proof: "142 proof",
    availability: "available",
    bottleCount: 162,
    mashbill: "99% corn, 1% malted barley",
  },
  {
    id: "micky-finns-oz-tyler",
    client: "Micky Finn's",
    distillery: "OZ Tyler",
    type: "Store",
    logoDomain: "mickyfinns.com",
    releaseDate: "2026-06",
    age: "7 years",
    proof: "122 proof",
    availability: "available",
    bottleCount: 162,
    mashbill: "78% corn, 13% rye, 9% malted barley",
  },
  {
    id: "micky-finns-double-oaked",
    client: "Micky Finn's",
    collectionName: "Double Oaked Rye",
    type: "Store",
    logoDomain: "mickyfinns.com",
    releaseDate: "2026-03",
    availability: "available",
    image: "/assets/barrel-picks/micky-finns-double-oaked.jpg",
    proof: "116 proof",
    bottleCount: 204,
    notes: "Alvin Langston pick.",
  },
];

export function sortClientProjectEntries(entries: ClientProjectEntry[]) {
  return [...entries].sort((a, b) => {
    const aVal = a.releaseDate ?? a.pickDate ?? "0000-00";
    const bVal = b.releaseDate ?? b.pickDate ?? "0000-00";
    return bVal.localeCompare(aVal);
  });
}
