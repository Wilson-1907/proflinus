"use client";

import { useMemo, useState } from "react";
import { documentedCollaborations, networkEdges, networkNodes } from "@/data/network";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function ResearchNetwork() {
  const [active, setActive] = useState("gitonga");
  const related = useMemo(
    () =>
      networkEdges.filter((e) => e.from === active || e.to === active),
    [active],
  );

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research network"
          title="A Scholarly Knowledge Graph"
          lede="Nodes appear only where a public record documents a relationship — a degree, a co-authorship, or an institutional affiliation."
        />
        <div className="mt-12 overflow-x-auto">
          <div className="relative mx-auto min-h-[420px] min-w-[720px] max-w-4xl">
            {networkNodes.map((n, i) => {
              const angle = (i / networkNodes.length) * Math.PI * 2 - Math.PI / 2;
              const r = n.id === "gitonga" ? 0 : 170;
              const x = 50 + (Math.cos(angle) * r) / 7.2;
              const y = 50 + (Math.sin(angle) * r) / 4.4;
              return (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setActive(n.id)}
                  style={{ left: `${n.id === "gitonga" ? 50 : x}%`, top: `${n.id === "gitonga" ? 50 : y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-[10px] tracking-[0.08em] uppercase ${
                    active === n.id
                      ? "z-10 border-gold-500 bg-forest-900 text-white"
                      : n.type === "person"
                        ? "border-gold-500 bg-white text-forest-900"
                        : "border-forest-800/40 bg-white text-forest-800"
                  }`}
                >
                  {n.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-8 border border-line bg-white p-6">
          <p className="text-[11px] tracking-[0.18em] text-gold-600 uppercase">
            Documented connections
          </p>
          <ul className="mt-4 space-y-3">
            {related.map((e) => (
              <li key={`${e.from}-${e.to}`} className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <span className="text-ink">
                  {networkNodes.find((n) => n.id === e.from)?.label} — {e.reason}
                </span>
                <SourceBadge source={e.source} compact />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
            Collaborative projects named in the official biography
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {documentedCollaborations.map((c) => (
              <li
                key={c.name}
                className="border border-line bg-white px-3 py-1 text-xs text-forest-800"
              >
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
