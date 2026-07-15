import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";
import { myPickLogEntries, collabPickLogEntries, formatBarrelLogDate } from "@/data/barrel-log";
import { clientProjectEntries } from "@/data/barrel-log";
import { createMetadata } from "@/lib/site";
import type { BarrelLogEntry, ClientProjectEntry } from "@/lib/types";

type LogEntryUnion = (BarrelLogEntry & { _type: "log" }) | (ClientProjectEntry & { _type: "client" });

function findEntry(id: string): LogEntryUnion | undefined {
  const log = [...myPickLogEntries, ...collabPickLogEntries].find((e) => e.id === id);
  if (log) return { ...log, _type: "log" };
  const client = clientProjectEntries.find((e) => e.id === id);
  if (client) return { ...client, _type: "client" };
  return undefined;
}

export async function generateStaticParams() {
  return [
    ...myPickLogEntries.map((e) => ({ id: e.id })),
    ...collabPickLogEntries.map((e) => ({ id: e.id })),
    ...clientProjectEntries.map((e) => ({ id: e.id })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const entry = findEntry(id);
  if (!entry) return createMetadata({ title: "Not Found", path: `/log/${id}` });

  const title = entry._type === "log"
    ? `${entry.distillery}${entry.series ? ` — ${entry.series}` : ""}`
    : `${entry.client}${entry.collectionName ? ` — ${entry.collectionName}` : ""}`;

  return createMetadata({ title, path: `/log/${id}` });
}

function Spec({ label, value }: { label: string; value?: string | number }) {
  if (!value) return null;
  return (
    <div className="spec-card">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default async function LogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = findEntry(id);

  if (!entry) notFound();

  const isLog = entry._type === "log";
  const isClient = entry._type === "client";

  const title = isLog
    ? entry.distillery
    : entry.client;

  const subtitle = isLog
    ? entry.series ?? entry.partner ?? entry.notes
    : entry.collectionName ?? entry.distillery;

  const image = isLog ? entry.image : entry.image;

  const categoryLabel = isLog
    ? entry.category === "my-pick" ? "My Pick" : "Collab"
    : "Client Project";

  return (
    <>
      <section className="log-detail-hero shell">
        <div className="log-detail-hero__copy">
          <Link className="text-link log-detail-back" href="/picks">
            ← Back to picks
          </Link>
          <p className="eyebrow">{categoryLabel}</p>
          <h1>{title}</h1>
          {subtitle ? <p className="page-hero__copy">{subtitle}</p> : null}
        </div>
        {image ? (
          <div className="log-detail-hero__media">
            <Image
              src={image}
              alt={title}
              width={400}
              height={533}
              className="log-detail-hero__img"
            />
          </div>
        ) : null}
      </section>

      <section className="shell section log-detail-body">
        <div className="spec-grid">
          {isLog ? (
            <>
              <Spec label="Pick Date" value={formatBarrelLogDate(entry.pickDate)} />
              <Spec label="Release" value={formatBarrelLogDate(entry.releaseDate)} />
              <Spec label="Bottles" value={entry.bottleCount} />
              <Spec label="Proof" value={entry.proof} />
              <Spec label="Age" value={entry.age} />
              <Spec label="Style" value={entry.whiskyType} />
              <Spec label="Serial No." value={entry.serialNumber} />
              <Spec label="Cooperage" value={entry.cooperage} />
              <Spec label="Finishing" value={entry.finishingStaves} />
              <Spec label="Farm" value={entry.farmLocation} />
              {entry.mashbill ? (
                <div className="spec-card spec-card--wide">
                  <dt>Mashbill</dt>
                  <dd>{entry.mashbill}</dd>
                </div>
              ) : null}
            </>
          ) : (
            <>
              <Spec label="Release" value={formatBarrelLogDate(entry.releaseDate)} />
              <Spec label="Bottles" value={entry.bottleCount} />
              <Spec label="Proof" value={entry.proof} />
              <Spec label="Age" value={entry.age} />
              <Spec label="Style" value={entry.whiskyType} />
              <Spec label="Finish" value={entry.finish} />
              {entry.mashbill ? (
                <div className="spec-card spec-card--wide">
                  <dt>Mashbill</dt>
                  <dd>{entry.mashbill}</dd>
                </div>
              ) : null}
            </>
          )}
        </div>

        {entry.stores?.length ? (
          <div className="log-detail-notes">
            <p className="eyebrow">Where to Find It</p>
            <ul className="pick-store-list">
              {entry.stores.map((store) => (
                <li key={store.name} className="pick-store-list__item">
                  {store.logoImage ? (
                    <Image
                      src={store.logoImage}
                      alt={`${store.name} logo`}
                      width={32}
                      height={32}
                      className="pick-store-list__logo"
                      style={{ objectFit: "contain" }}
                    />
                  ) : null}
                  <strong>{store.name}</strong>
                  {store.location ? <span> — {store.location}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {entry.notes ? (
          <div className="log-detail-notes">
            <p className="eyebrow">Notes</p>
            <p>{entry.notes}</p>
          </div>
        ) : null}
      </section>
    </>
  );
}
