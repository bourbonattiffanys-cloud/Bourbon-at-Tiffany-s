import Image from "next/image";
import Link from "next/link";
import { formatBarrelLogDate, isUpcomingBarrelLogRelease } from "@/data/barrel-log";
import type { BarrelLogEntry } from "@/lib/types";

function Spec({
  label,
  value,
  wide,
}: {
  label: string;
  value?: string | number;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "barrel-log-card__spec--wide" : undefined}>
      <dt>{label}</dt>
      <dd>{value ?? "TBD"}</dd>
    </div>
  );
}

export function BarrelLogCard({ entry }: { entry: BarrelLogEntry }) {
  const isUpcoming = isUpcomingBarrelLogRelease(entry);

  return (
    <article className={isUpcoming ? "barrel-log-card barrel-log-card--upcoming" : "barrel-log-card"}>
      <Link className="barrel-log-card__link" href={`/log/${entry.id}`} aria-label={`View details for ${entry.distillery}`} />
      <div className="barrel-log-card__topline">
        <div className="barrel-log-card__topline-left">
          {entry.logoImage ? (
            <Image
              src={entry.logoImage}
              alt={`${entry.partner ?? entry.distillery} logo`}
              width={44}
              height={44}
              className="barrel-log-card__logo"
              style={{ objectFit: "contain" }}
            />
          ) : entry.logoDomain ? (
            <Image
              src={`https://www.google.com/s2/favicons?domain=${entry.logoDomain}&sz=128`}
              alt={`${entry.distillery} logo`}
              width={44}
              height={44}
              className="barrel-log-card__logo"
            />
          ) : null}
        </div>
        {isUpcoming ? <span className="status-pill">Upcoming</span> : null}
        {entry.availability ? (
          <span className={`status-pill status-pill--${entry.availability}`}>
            {entry.availability === "sold-out" ? "Sold Out" : entry.availability === "upcoming" ? "Upcoming" : entry.availability === "private" ? "Private" : "Available"}
          </span>
        ) : null}
      </div>
      <div className="barrel-log-card__heading">
        <h3>{entry.distillery}</h3>
        {entry.series ? <p className="barrel-log-card__series">{entry.series}</p> : null}
        {entry.partner ? <p>{entry.partner}</p> : null}
        {entry.whiskyType ? <p className="barrel-log-card__whisky-type">{entry.whiskyType}</p> : null}
      </div>
      <dl className="barrel-log-card__specs">
        <Spec label="Pick Date" value={formatBarrelLogDate(entry.pickDate)} />
        <Spec label="Release" value={formatBarrelLogDate(entry.releaseDate)} />
        <Spec label="Bottles" value={entry.bottleCount} />
        <Spec label="Proof" value={entry.proof} />
        {entry.age ? <Spec label="Age" value={entry.age} /> : null}
        {entry.mashbill ? (
          <div className="barrel-log-card__spec--wide">
            <dt>Mashbill</dt>
            <dd className="barrel-log-card__mashbill">
              {entry.mashbill.split(",").map((grain) => (
                <span key={grain.trim()}>{grain.trim()}</span>
              ))}
            </dd>
          </div>
        ) : null}
        {entry.serialNumber ? <Spec label="Serial No." value={entry.serialNumber} /> : null}
        {entry.cooperage ? <Spec label="Cooperage" value={entry.cooperage} /> : null}
        {entry.finishingStaves ? <Spec label="Finishing" value={entry.finishingStaves} /> : null}
      </dl>
      {entry.notes ? <p className="barrel-log-card__notes">{entry.notes}</p> : null}
    </article>
  );
}
