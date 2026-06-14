import Image from "next/image";
import { formatBarrelLogDate, isUpcomingBarrelLogRelease } from "@/data/barrel-log";
import type { BarrelLogEntry } from "@/lib/types";

function Spec({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value ?? "TBD"}</dd>
    </div>
  );
}

export function BarrelLogCard({ entry }: { entry: BarrelLogEntry }) {
  const isUpcoming = isUpcomingBarrelLogRelease(entry);

  return (
    <article className={isUpcoming ? "barrel-log-card barrel-log-card--upcoming" : "barrel-log-card"}>
      <div className="barrel-log-card__topline">
        {entry.logoDomain ? (
          <Image
            src={`https://www.google.com/s2/favicons?domain=${entry.logoDomain}&sz=128`}
            alt={`${entry.distillery} logo`}
            width={44}
            height={44}
            className="barrel-log-card__logo"
          />
        ) : null}
        {isUpcoming ? <span className="status-pill">Upcoming</span> : null}
      </div>
      <div className="barrel-log-card__heading">
        <h3>{entry.distillery}</h3>
        {entry.partner ? <p>{entry.partner}</p> : null}
      </div>
      <dl className="barrel-log-card__specs">
        <Spec label="Pick Date" value={formatBarrelLogDate(entry.pickDate)} />
        <Spec label="Release" value={formatBarrelLogDate(entry.releaseDate)} />
        <Spec label="Bottles" value={entry.bottleCount} />
        <Spec label="Proof" value={entry.proof} />
      </dl>
      {entry.notes ? <p className="barrel-log-card__notes">{entry.notes}</p> : null}
    </article>
  );
}
