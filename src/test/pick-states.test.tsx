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
  it("renders an announced pick with a Coming Soon CTA", () => {
    render(<PickCard pick={findPick("broad-branch-rye-2026")} />);
    expect(screen.getByText(/Coming Soon/i)).toBeInTheDocument();
  });

  it("renders a full-details sold-out pick", () => {
    render(<PickCard pick={findPick("dettling-tiffany-3-2026")} />);
    expect(screen.getByText(/115\.6 proof/i)).toBeInTheDocument();
    expect(screen.getByText(/150/)).toBeInTheDocument();
  });

  it("renders a pick with a seller link", () => {
    render(
      <PickCard
        pick={{
          ...findPick("alvin-langston-vault-rye-2026"),
          ctaMode: "seller-link",
          sellerName: "Main Street Bottle Shop",
          sellerUrl: "https://example.com/main-street-single-barrel",
        }}
      />,
    );
    expect(screen.getByRole("link", { name: /Buy from Main Street Bottle Shop/i })).toHaveAttribute(
      "href",
      "https://example.com/main-street-single-barrel",
    );
  });

  it("renders a pick with store info only", () => {
    render(
      <PickCard
        pick={{
          ...findPick("alvin-langston-vault-rye-2026"),
          storeName: "Palmetto Spirits",
        }}
      />,
    );
    expect(screen.getByText(/Available at Palmetto Spirits/i)).toBeInTheDocument();
  });

  it("renders a pick with a Register Interest CTA", () => {
    render(<PickCard pick={{ ...findPick("broad-branch-rye-2026"), status: "interest-open" }} />);
    expect(screen.getByRole("link", { name: /Register Interest/i })).toBeInTheDocument();
  });

  it("groups picks into available and upcoming sections", () => {
    expect(availablePicks.map((pick) => pick.slug)).toEqual(["alvin-langston-vault-rye-2026"]);
    expect(upcomingPicks.map((pick) => pick.slug)).toEqual(["broad-branch-rye-2026"]);
    expect(pastPicks.map((pick) => pick.slug)).toEqual([]);
  });
});
