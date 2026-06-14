"use client";

import { useMemo, useState } from "react";
import { isUpcomingBarrelLogRelease } from "@/data/barrel-log";
import type { BarrelLogEntry, ClientProjectEntry } from "@/lib/types";
import { BarrelLogCard } from "./barrel-log-card";
import { ClientProjectCard } from "./client-project-card";

type Tab = "my-picks" | "collabs" | "client-projects";

function StatBox({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="barrel-log-stat">
      <span className="barrel-log-stat__value">{value}</span>
      <span className="barrel-log-stat__label">{label}</span>
    </div>
  );
}

function totalBottles(entries: BarrelLogEntry[]) {
  return entries.reduce((sum, e) => sum + (e.bottleCount ?? 0), 0);
}

function totalClientBottles(entries: ClientProjectEntry[]) {
  return entries.reduce((sum, e) => sum + (e.bottleCount ?? 0), 0);
}

export function BarrelLogTabs({
  myPicks,
  collabs,
  clientProjects,
}: {
  myPicks: BarrelLogEntry[];
  collabs: BarrelLogEntry[];
  clientProjects: ClientProjectEntry[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("my-picks");
  const [search, setSearch] = useState("");

  const filteredMyPicks = useMemo(() => {
    const q = search.toLowerCase();
    return myPicks.filter(
      (e) =>
        !q ||
        e.distillery.toLowerCase().includes(q) ||
        (e.partner ?? "").toLowerCase().includes(q) ||
        (e.notes ?? "").toLowerCase().includes(q),
    );
  }, [myPicks, search]);

  const filteredCollabs = useMemo(() => {
    const q = search.toLowerCase();
    return collabs.filter(
      (e) =>
        !q ||
        e.distillery.toLowerCase().includes(q) ||
        (e.partner ?? "").toLowerCase().includes(q) ||
        (e.notes ?? "").toLowerCase().includes(q),
    );
  }, [collabs, search]);

  const filteredClientProjects = useMemo(() => {
    const q = search.toLowerCase();
    return clientProjects.filter(
      (e) =>
        !q ||
        e.client.toLowerCase().includes(q) ||
        (e.collectionName ?? "").toLowerCase().includes(q) ||
        (e.distillery ?? "").toLowerCase().includes(q) ||
        (e.notes ?? "").toLowerCase().includes(q),
    );
  }, [clientProjects, search]);

  const activeEntries =
    activeTab === "my-picks"
      ? filteredMyPicks
      : activeTab === "collabs"
        ? filteredCollabs
        : null;

  const upcomingCount =
    activeEntries?.filter((e) => isUpcomingBarrelLogRelease(e)).length ?? 0;

  const bottleCount =
    activeTab === "client-projects"
      ? totalClientBottles(filteredClientProjects)
      : totalBottles(activeEntries ?? []);

  const totalCount =
    activeTab === "client-projects"
      ? filteredClientProjects.length
      : (activeEntries?.length ?? 0);

  return (
    <div className="barrel-log-tabs">
      <div className="barrel-log-tabs__nav">
        <button
          className={activeTab === "my-picks" ? "barrel-log-tab barrel-log-tab--active" : "barrel-log-tab"}
          onClick={() => { setActiveTab("my-picks"); setSearch(""); }}
        >
          My Picks
        </button>
        <button
          className={activeTab === "collabs" ? "barrel-log-tab barrel-log-tab--active" : "barrel-log-tab"}
          onClick={() => { setActiveTab("collabs"); setSearch(""); }}
        >
          Collabs
        </button>
        <button
          className={activeTab === "client-projects" ? "barrel-log-tab barrel-log-tab--active" : "barrel-log-tab"}
          onClick={() => { setActiveTab("client-projects"); setSearch(""); }}
        >
          Client Projects
        </button>
      </div>

      <div className="barrel-log-tabs__toolbar">
        <input
          className="barrel-log-search"
          type="search"
          placeholder="Search by distillery, partner, or notes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="barrel-log-stats">
          <StatBox label="Total" value={totalCount} />
          {activeTab !== "client-projects" && (
            <StatBox label="Upcoming" value={upcomingCount} />
          )}
          <StatBox
            label="Bottles"
            value={bottleCount > 0 ? bottleCount.toLocaleString() : "—"}
          />
        </div>
      </div>

      {activeTab !== "client-projects" && (
        <div className="barrel-log-grid">
          {(activeEntries ?? []).map((entry, index) => (
            <BarrelLogCard key={entry.id} entry={entry} />
          ))}
          {(activeEntries ?? []).length === 0 && (
            <p className="barrel-log-empty">No results for &ldquo;{search}&rdquo;</p>
          )}
        </div>
      )}

      {activeTab === "client-projects" && (
        <div className="barrel-log-grid">
          {filteredClientProjects.map((entry) => (
            <ClientProjectCard key={entry.id} entry={entry} />
          ))}
          {filteredClientProjects.length === 0 && (
            <p className="barrel-log-empty">No results for &ldquo;{search}&rdquo;</p>
          )}
        </div>
      )}
    </div>
  );
}
