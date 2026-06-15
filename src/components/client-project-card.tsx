import Image from "next/image";
import { formatBarrelLogDate } from "@/data/barrel-log";
import type { ClientProjectEntry } from "@/lib/types";

function Spec({ label, value }: { label: string; value?: string | number }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value ?? "TBD"}</dd>
    </div>
  );
}

export function ClientProjectCard({ entry }: { entry: ClientProjectEntry }) {
  return (
    <article className="barrel-log-card">
      <div className="barrel-log-card__topline">
        {entry.logoDomain ? (
          <Image
            src={`https://www.google.com/s2/favicons?domain=${entry.logoDomain}&sz=128`}
            alt={`${entry.client} logo`}
            width={44}
            height={44}
            className="barrel-log-card__logo"
          />
        ) : null}
        {entry.type ? (
        <span className={`status-pill${entry.type === "Non-Profit" ? " status-pill--nonprofit" : ""}`}>
          {entry.type}
        </span>
      ) : null}
      </div>
      <div className="barrel-log-card__heading">
        <h3>{entry.client}</h3>
        {entry.collectionName ? <p>{entry.collectionName}</p> : null}
        {entry.distillery ? <p>{entry.distillery}</p> : null}
      </div>
      <dl className="barrel-log-card__specs">
        <Spec label="Release" value={formatBarrelLogDate(entry.releaseDate)} />
        <Spec label="Bottles" value={entry.bottleCount} />
        <Spec label="Proof" value={entry.proof} />
        {entry.age ? <Spec label="Age" value={entry.age} /> : null}
        {entry.finish ? <Spec label="Finish" value={entry.finish} /> : null}
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
      </dl>
      {entry.notes ? <p className="barrel-log-card__notes">{entry.notes}</p> : null}
    </article>
  );
}
