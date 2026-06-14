import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PickCard } from "@/components/pick-card";
import { availablePicks, barrelPicks, pastPicks, upcomingPicks } from "@/data/barrel-picks";

const findPick = (slug: string) => {
  const pick = barrelPicks.find((entry) => entry.slug === slug);
  if (!pick) {
    throw new Error(`Missing pick fixture: ${slug}`);
  }
  return pick;
};

describe("pick card states", () => {
  it("renders a partial-details announced pick", () => {
    render(<PickCard pick={findPick("carolina-cask-finish")} />);
    expect(screen.getByText(/Coming Soon/i)).toBeInTheDocument();
  });

  it("renders a full-details archived pick", () => {
    render(<PickCard pick={findPick("lowcountry-rye-2025")} />);
    expect(screen.getByText(/117.4 proof/i)).toBeInTheDocument();
    expect(screen.getByText(/168/)).toBeInTheDocument();
  });

  it("renders an available pick with seller link", () => {
    render(
      <PickCard
        pick={{
          ...findPick("main-street-single-barrel"),
          ctaMode: "seller-link",
          sellerUrl: "https://example.com/main-street-single-barrel",
        }}
      />,
    );
    expect(screen.getByRole("link", { name: /Buy from Main Street Bottle Shop/i })).toHaveAttribute(
      "href",
      "https://example.com/main-street-single-barrel",
    );
  });

  it("renders an available pick with store info only", () => {
    render(<PickCard pick={findPick("palmetto-store-pick")} />);
    expect(screen.getByText(/Available at Palmetto Spirits/i)).toBeInTheDocument();
  });

  it("renders an interest-open pick", () => {
    render(<PickCard pick={findPick("chapin-founders-barrel")} />);
    expect(screen.getByRole("link", { name: /Register Interest/i })).toBeInTheDocument();
  });

  it("groups picks into available, upcoming, and past sections", () => {
    expect(availablePicks.map((pick) => pick.slug)).toEqual(["main-street-single-barrel", "palmetto-store-pick"]);
    expect(upcomingPicks.map((pick) => pick.slug)).toEqual(["chapin-founders-barrel", "carolina-cask-finish"]);
    expect(pastPicks.map((pick) => pick.slug)).toEqual([
      "lowcountry-rye-2025",
      "double-oak-private-selection",
      "savannah-honey-barrel",
    ]);
  });
});
