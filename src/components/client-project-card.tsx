import Image from "next/image";
import Link from "next/link";
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
      <Link className="barrel-log-card__link" href={`/log/${entry.id}`} aria-label={`View details for ${entry.client}`} />
      <div className="barrel-log-card__topline">
        <div className="barrel-log-card__topline-left">
          {entry.logoImages ? (
            <div className="barrel-log-card__logos">
              {entry.logoImages.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${entry.client} logo`}
                  width={44}
                  height={44}
                  className="barrel-log-card__logo"
                  style={{ objectFit: "contain" }}
                />
              ))}
            </div>
          ) : entry.logoImage ? (
            <Image
              src={entry.logoImage}
              alt={`${entry.client} logo`}
              width={44}
              height={44}
              className="barrel-log-card__logo"
              style={{ objectFit: "contain" }}
            />
          ) : entry.logoDomain ? (
            <Image
              src={`https://www.google.com/s2/favicons?domain=${entry.logoDomain}&sz=128`}
              alt={`${entry.client} logo`}
              width={44}
              height={44}
              className="barrel-log-card__logo"
            />
          ) : null}
          {entry.type && entry.type !== "Store" ? (
            <span className={`status-pill${entry.type === "Non-Profit" ? " status-pill--nonprofit" : entry.type === "Club" ? " status-pill--club" : ""}`}>
              {entry.type}
            </span>
          ) : null}
        </div>
        {entry.availability ? (
          <span className={`status-pill status-pill--${entry.availability}`}>
            {entry.availability === "sold-out" ? "Sold Out" : entry.availability === "upcoming" ? "Upcoming" : entry.availability === "private" ? "Private" : "Available"}
          </span>
        ) : null}
      </div>
      <div className="barrel-log-card__heading">
        <h3>{entry.client}</h3>
        {entry.collectionName ? <p>{entry.collectionName}</p> : null}
        {entry.distillery ? <p>{entry.distillery}</p> : null}
        {entry.whiskyType ? <p className="barrel-log-card__whisky-type">{entry.whiskyType}</p> : null}
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
      {entry.stores?.length ? (
        <ul className="barrel-log-card__stores">
          {entry.stores.map((store) => (
            <li key={store.name} className="barrel-log-card__store">
              {store.logoImage ? (
                <Image
                  src={store.logoImage}
                  alt={`${store.name} logo`}
                  width={20}
                  height={20}
                  className="barrel-log-card__store-logo"
                  style={{ objectFit: "contain" }}
                />
              ) : null}
              <span>{store.name}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {entry.notes ? <p className="barrel-log-card__notes">{entry.notes}</p> : null}
    </article>
  );
}
