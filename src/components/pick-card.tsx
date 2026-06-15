import Image from "next/image";
import Link from "next/link";
import type { BarrelPick } from "@/lib/types";
import { PickCta } from "@/components/pick-cta";

function getStatusLabel(status: BarrelPick["status"]) {
  switch (status) {
    case "announced":
      return "Announced";
    case "interest-open":
      return "Interest Open";
    case "available":
      return "Available";
    case "sold-out":
      return "Sold Out";
    case "archived":
      return "Past Pick";
  }
}

function formatReleaseDate(value: string) {
  if (/^\d{4}-\d{2}$/.test(value)) {
    const [year, month] = value.split("-");
    const date = new Date(`${year}-${month}-15T12:00:00`);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  const date = new Date(`${value}T12:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function PickCard({ pick }: { pick: BarrelPick }) {
  return (
    <article className="pick-card">
      <Link className="pick-card__image" href={`/picks/${pick.slug}`} aria-label={pick.title}>
        <Image src={pick.heroImage} alt={pick.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
      </Link>
      <div className="pick-card__body">
        <div className="pick-card__topline">
          <span className="status-pill">{getStatusLabel(pick.status)}</span>
          {pick.releaseDate ? <span>{formatReleaseDate(pick.releaseDate)}</span> : null}
        </div>
        <div className="pick-card__summary">
          <h3>{pick.title}</h3>
          <p>{pick.subtitle}</p>
        </div>
        <dl className="pick-card__specs">
          {pick.age ? (
            <div>
              <dt>Age</dt>
              <dd>{pick.age}</dd>
            </div>
          ) : null}
          {pick.proof ? (
            <div>
              <dt>Proof</dt>
              <dd>{pick.proof}</dd>
            </div>
          ) : null}
          {pick.bottleCount ? (
            <div>
              <dt>Bottles</dt>
              <dd>{pick.bottleCount}</dd>
            </div>
          ) : null}
          {pick.mashbill ? (
            <div>
              <dt>Mashbill</dt>
              <dd>{pick.mashbill}</dd>
            </div>
          ) : null}
        </dl>
        <div className="pick-card__actions">
          <PickCta pick={pick} className="button button--small" />
          <Link className="text-link" href={`/picks/${pick.slug}`}>
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
