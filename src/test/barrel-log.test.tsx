import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BarrelLogCard } from "@/components/barrel-log-card";
import {
  collabPickLogEntries,
  formatBarrelLogDate,
  isUpcomingBarrelLogRelease,
  myPickLogEntries,
  sortBarrelLogEntries,
  upcomingLogEntries,
} from "@/data/barrel-log";

describe("barrel log data", () => {
  it("contains public my-pick and collab rows from the supplied log", () => {
    expect(myPickLogEntries).toHaveLength(10);
    expect(collabPickLogEntries).toHaveLength(7);
    expect(myPickLogEntries.map((entry) => entry.category)).toEqual(Array(10).fill("my-pick"));
    expect(collabPickLogEntries.map((entry) => entry.category)).toEqual(Array(7).fill("collab"));
  });

  it("formats month-level dates and preserves unknown values", () => {
    expect(formatBarrelLogDate("2026-09")).toBe("Sep 2026");
    expect(formatBarrelLogDate()).toBe("TBD");
  });

  it("sorts by release date first, then pick date", () => {
    expect(sortBarrelLogEntries(myPickLogEntries)[0]?.distillery).toBe("Broad Branch Distillery");
    expect(upcomingLogEntries.map((entry) => entry.id)).toEqual([
      "broad-branch-distillery-2026-04",
      "dettling-2026-05",
    ]);
  });

  it("marks future releases as upcoming", () => {
    const upcomingEntry = myPickLogEntries.find((entry) => entry.id === "broad-branch-distillery-2026-04");
    const pastEntry = collabPickLogEntries.find((entry) => entry.id === "jack-daniels-2024-05");

    expect(upcomingEntry).toBeDefined();
    expect(pastEntry).toBeDefined();
    expect(isUpcomingBarrelLogRelease(upcomingEntry!, new Date("2026-05-04T12:00:00"))).toBe(true);
    expect(isUpcomingBarrelLogRelease(pastEntry!, new Date("2026-05-04T12:00:00"))).toBe(false);
  });

  it("renders a compact card with missing values as TBD", () => {
    render(<BarrelLogCard entry={collabPickLogEntries[0]} />);

    expect(screen.getByRole("heading", { name: /High Wire Distilling/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /High Wire Distilling logo/i })).toBeInTheDocument();
    expect(screen.getAllByText("TBD").length).toBeGreaterThan(0);
  });

  it("renders an upcoming pill only for future releases", () => {
    render(<BarrelLogCard entry={myPickLogEntries.find((entry) => entry.id === "broad-branch-distillery-2026-04")!} />);

    expect(screen.getByText("Upcoming")).toBeInTheDocument();
  });
});
