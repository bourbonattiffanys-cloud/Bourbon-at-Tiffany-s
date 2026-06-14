import Link from "next/link";
import type { BarrelPick } from "@/lib/types";

export function getPickCtaLabel(pick: BarrelPick) {
  switch (pick.ctaMode) {
    case "interest":
      return pick.status === "announced" ? "Coming Soon" : "Register Interest";
    case "seller-link":
      return pick.sellerName ? `Buy from ${pick.sellerName}` : "Buy";
    case "store-info":
      return pick.storeName ? `Available at ${pick.storeName}` : "In Store";
    case "sold-out":
      return "Past Release";
    default:
      return "Details";
  }
}

export function PickCta({ pick, className }: { pick: BarrelPick; className?: string }) {
  const label = getPickCtaLabel(pick);

  if (pick.ctaMode === "seller-link" && pick.sellerUrl) {
    return (
      <a className={className ?? "button"} href={pick.sellerUrl} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  if (pick.ctaMode === "sold-out") {
    return <span className="pick-card__state">{label}</span>;
  }

  if (pick.ctaMode === "store-info") {
    return <span className="pick-card__state">{label}</span>;
  }

  return (
    <Link className={className ?? "button"} href={`/picks/${pick.slug}`}>
      {label}
    </Link>
  );
}
