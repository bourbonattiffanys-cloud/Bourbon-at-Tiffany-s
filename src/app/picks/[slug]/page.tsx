import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PickInterestForm } from "@/components/pick-interest-form";
import { PickCta, getPickCtaLabel } from "@/components/pick-cta";
import { StructuredData } from "@/components/structured-data";
import { barrelPicks, getPickBySlug } from "@/data/barrel-picks";
import { createMetadata, siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return barrelPicks.map((pick) => ({ slug: pick.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pick = getPickBySlug(slug);

  if (!pick) {
    return createMetadata({ title: "Pick Not Found", path: `/picks/${slug}` });
  }

  return createMetadata({
    title: pick.title,
    path: `/picks/${pick.slug}`,
    description: pick.subtitle,
  });
}

function buildSpecs(pick: NonNullable<ReturnType<typeof getPickBySlug>>) {
  return [
    ["Status", pick.status],
    ["Partner", pick.partner],
    ["Release Date", pick.releaseDate],
    ["Bottle Count", pick.bottleCount ? String(pick.bottleCount) : undefined],
    ["Proof", pick.proof],
    ["Age", pick.age],
    ["Mashbill", pick.mashbill],
    ["Barrel Type", pick.barrelType],
    ["Finish", pick.finish],
    ["Warehouse", pick.warehouseInfo],
    ["Fill Date", pick.fillDate],
    ["Dump Date", pick.dumpDate],
    ["Purchase Limit", pick.purchaseLimit],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));
}

export default async function PickDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pick = getPickBySlug(slug);

  if (!pick) {
    notFound();
  }

  const specs = buildSpecs(pick);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: pick.title,
          description: pick.subtitle,
          image: `${siteConfig.url}${pick.heroImage}`,
          brand: siteConfig.name,
          releaseDate: pick.releaseDate,
        }}
      />
      <section className="pick-detail-hero shell">
        <div className="pick-detail-hero__media">
          <Image src={pick.heroImage} alt={pick.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="pick-detail-hero__copy">
          <p className="eyebrow">{pick.status.replace(/-/g, " ")}</p>
          <h1>{pick.title}</h1>
          <p className="page-hero__copy">{pick.subtitle}</p>
          <div className="hero__actions hero__actions--compact">
            <PickCta pick={pick} />
            <Link className="button button--ghost" href="/picks">
              Back to picks
            </Link>
          </div>
          {(pick.storeName || pick.storeLocation) && pick.ctaMode === "store-info" ? (
            <p className="availability-note">
              {getPickCtaLabel(pick)} {pick.storeLocation ? `in ${pick.storeLocation}.` : "."}
            </p>
          ) : null}
        </div>
      </section>

      <section className="shell section pick-detail-grid">
        <div>
          <div className="spec-grid">
            {specs.map(([label, value]) => (
              <div key={label} className="spec-card">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </div>
          {pick.tastingNotes?.length ? (
            <section className="section section--tight pick-detail-section">
              <p className="eyebrow">Tasting Notes</p>
              <div className="note-chips">
                {pick.tastingNotes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </section>
          ) : null}
          {pick.tiffanyNotes ? (
            <section className="section section--tight pick-detail-section">
              <p className="eyebrow">Tiffany&apos;s Commentary</p>
              <blockquote className="quote-card quote-card--wide">
                {pick.tiffanyNotes.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </blockquote>
            </section>
          ) : null}
        </div>
        <aside className="detail-rail">
          <div className="editorial-panel">
            <p className="eyebrow">Where to Find It</p>
            <h2>How this pick is handled</h2>
            {pick.inviteOnly ? (
              <p>
                This is a private release shared directly with people in Tiffany&apos;s circle. If you
                received word about this bottle, you already know how to reach her. If you didn&apos;t
                and you&apos;re curious, the best place to start is{" "}
                <a href="/contact">a conversation</a>.
              </p>
            ) : pick.stores?.length ? (
              <>
                <p>Available at these South Carolina locations:</p>
                <ul className="pick-store-list">
                  {pick.stores.map((store) => (
                    <li key={store.name}>
                      <strong>{store.name}</strong>
                      {store.location ? <span> — {store.location}</span> : null}
                    </li>
                  ))}
                </ul>
                {pick.onlineSellerName && pick.onlineSellerUrl ? (
                  <p className="pick-store-online">
                    Outside SC?{" "}
                    <a href={pick.onlineSellerUrl} target="_blank" rel="noopener noreferrer">
                      Order online through {pick.onlineSellerName}
                    </a>
                    .
                  </p>
                ) : null}
              </>
            ) : (
              <p>
                Register interest early, then return to the page once Tiffany updates where the bottle is
                available.
              </p>
            )}
          </div>
          {pick.ctaMode === "interest" ? <PickInterestForm pickSlug={pick.slug} pickTitle={pick.title} /> : null}
        </aside>
      </section>
    </>
  );
}
