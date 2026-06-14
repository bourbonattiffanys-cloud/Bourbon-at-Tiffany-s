import type { BarrelLogEntry } from "@/lib/types";

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
    notes: "8 year",
  },
  {
    id: "dettling-2024-09",
    category: "my-pick",
    distillery: "Dettling",
    logoDomain: "dettling1867.com",
    pickDate: "2024-09",
    releaseDate: "2024-11",
    bottleCount: 162,
    proof: "116.4 proof",
    notes: "Tiffany 1",
  },
  {
    id: "broad-branch-distillery-2024-07",
    category: "my-pick",
    distillery: "Broad Branch Distillery",
    logoDomain: "broadbranchdistillery.com",
    pickDate: "2024-07",
    releaseDate: "2025-11",
    bottleCount: 156,
    proof: "141 proof",
    notes: "Barrel 152",
  },
  {
    id: "alvin-langston-2025-11",
    category: "my-pick",
    distillery: "Alvin Langston",
    logoDomain: "contrarycow.com",
    pickDate: "2025-11",
    releaseDate: "2026-03",
    bottleCount: 78,
    proof: "140 proof",
    notes: "3 weeks from being 21 years old",
  },
  {
    id: "alvin-langston-2026-02",
    category: "my-pick",
    distillery: "Alvin Langston",
    logoDomain: "contrarycow.com",
    pickDate: "2026-02",
    releaseDate: "2026-05",
    notes: "8.5 year old, 51% rye",
  },
  {
    id: "broad-branch-distillery-2025-05",
    category: "my-pick",
    distillery: "Broad Branch Distillery",
    logoDomain: "broadbranchdistillery.com",
    pickDate: "2025-05",
    releaseDate: "2025-08",
    bottleCount: 312,
    proof: "139 proof",
    notes: "2 barrel blend",
  },
  {
    id: "broad-branch-distillery-2026-04",
    category: "my-pick",
    distillery: "Broad Branch Distillery",
    logoDomain: "broadbranchdistillery.com",
    pickDate: "2026-04",
    releaseDate: "2026-08",
    proof: "139 proof",
    notes: "Rye barrel",
  },
  {
    id: "dettling-2026-05",
    category: "my-pick",
    distillery: "Dettling",
    logoDomain: "dettling1867.com",
    pickDate: "2026-05",
    releaseDate: "2026-08",
  },
  {
    id: "dettling-2025-01",
    category: "my-pick",
    distillery: "Dettling",
    logoDomain: "dettling1867.com",
    pickDate: "2024-09",
    releaseDate: "2025-01",
    proof: "113.9 proof",
    notes: "Tiffany 2 - Barrel 496 - Spiral Cut",
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
    proof: "115.4 proof",
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
    notes: "The Bonnie's of Clyde's — All Women Pick",
  },
  {
    id: "high-wire-distilling-2025-10",
    category: "collab",
    distillery: "High Wire Distilling",
    partner: "Soda Boyz",
    logoDomain: "highwiredistilling.com",
    pickDate: "2025-10",
    releaseDate: "2025-12",
    proof: "118 proof",
  },
  {
    id: "holladay-2025-11-boldest",
    category: "collab",
    distillery: "Holladay Distillery",
    partner: "Heritage Liquor & Wine",
    logoDomain: "holladaydistillery.com",
    pickDate: "2025-11",
    releaseDate: "2026-03",
    proof: "125.3 proof",
    notes: "Boldest",
  },
  {
    id: "holladay-distillery-2025-11-oldest",
    category: "collab",
    distillery: "Holladay Distillery",
    partner: "Heritage Liquor & Wine",
    logoDomain: "holladaydistillery.com",
    pickDate: "2025-11",
    releaseDate: "2026-03",
    proof: "121.4 proof",
    notes: "Oldest",
  },
  {
    id: "asw-2026-05",
    category: "collab",
    distillery: "ASW",
    partner: "Sodaboyz",
    logoDomain: "aswdistillery.com",
    pickDate: "2026-05",
  },
  {
    id: "broad-branch-distillery-2024-06",
    category: "collab",
    distillery: "Broad Branch Distillery",
    partner: "Heritage Liquor & Wine",
    logoDomain: "broadbranchdistillery.com",
    pickDate: "2024-06",
    releaseDate: "2024-10",
    proof: "141 proof",
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
