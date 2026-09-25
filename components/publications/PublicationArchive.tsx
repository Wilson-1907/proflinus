"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { publications, topicFilters, topicLabels } from "@/data/publications";
import { searchPublications, type SortKey } from "@/lib/publications";
import type { ResearchTopic } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function PublicationArchive({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<"all" | ResearchTopic>("all");
  const [sort, setSort] = useState<SortKey>("newest");
  const results = useMemo(
    () => searchPublications(query, topic, sort),
    [query, topic, sort],
  );
  const list = compact ? results.slice(0, 6) : results;

  return (
    <section id="publications" className="bg-white py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research archive"
          title="Publications"
          lede="A curated, identity-checked record. Abstracts appear only when a public source supplies them. Every item links out to the originating repository or publisher."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_auto]">
          <label className="block">
            <span className="sr-only">Search publications</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search publications..."
              className="w-full border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-forest-700"
            />
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value as "all" | ResearchTopic)}
            className="border border-line bg-ivory px-3 py-3 text-sm"
            aria-label="Filter by research area"
          >
            {topicFilters.map((t) => (
              <option key={t} value={t}>
                {t === "all" ? "All" : topicLabels[t as ResearchTopic]}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-line bg-ivory px-3 py-3 text-sm"
            aria-label="Sort publications"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="title">Title</option>
            <option value="area">Research area</option>
          </select>
        </div>

        {list.length === 0 ? (
          <div className="mt-12 border border-line p-10 text-center">
            <p className="font-serif text-2xl text-forest-900">No results found</p>
            <p className="mt-3 text-muted">
              Try another keyword, or browse by Thrips, Biological Control, or
              Entomology. The archive currently holds {publications.length}{" "}
              identity-matched records.
            </p>
          </div>
        ) : (
          <ul className="mt-10 divide-y divide-line border-t border-line">
            {list.map((p) => (
              <li key={p.id} className="group py-7">
                <Link href={`/publications/${p.slug}`} className="block">
                  <p className="text-[11px] tracking-[0.18em] text-gold-600 uppercase">
                    {p.year} · {p.journal}
                    {p.doiVerified ? " · DOI verified" : ""}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-forest-900 group-hover:underline">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.authors.join(", ")}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.topics.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-2 py-0.5 text-[10px] tracking-[0.12em] text-forest-800 uppercase"
                      >
                        {topicLabels[t]}
                      </span>
                    ))}
                  </div>
                </Link>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <SourceBadge source={p.source} compact />
                  <a
                    href={p.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] tracking-[0.14em] text-forest-800 uppercase hover:text-gold-600"
                  >
                    View original source →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}

        {compact ? (
          <Link
            href="/publications"
            className="mt-10 inline-block text-[11px] tracking-[0.18em] text-forest-900 uppercase hover:text-gold-600"
          >
            Open the full research archive →
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function FeaturedResearch() {
  const featured = publications.filter((p) => p.featured);
  return (
    <section className="bg-forest-900 py-20 text-ivory">
      <div className="section-pad mx-auto max-w-7xl">
        <p className="text-[11px] tracking-[0.28em] text-gold-400 uppercase">
          Featured verified research
        </p>
        <h2 className="mt-3 font-serif text-4xl">Papers at the centre of the record</h2>
        <div className="gold-rule-left mt-5 bg-gold-400" />
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {featured.map((p) => (
            <li key={p.id} className="border-t border-ivory/15 pt-5">
              <Link href={`/publications/${p.slug}`} className="block hover:text-gold-400">
                <p className="text-xs text-gold-400">
                  {p.journal}, {p.year}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{p.title}</h3>
              </Link>
              {p.doi ? (
                <p className="mt-2 text-xs text-ivory/55">DOI {p.doi}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
