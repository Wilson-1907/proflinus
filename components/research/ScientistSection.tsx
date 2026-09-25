"use client";

import { useState } from "react";
import { doctoralInquiry, ecosystemNodes } from "@/data/research";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function ScientistSection() {
  const [node, setNode] = useState(ecosystemNodes[0].id);
  const current = ecosystemNodes.find((n) => n.id === node) ?? ecosystemNodes[0];

  return (
    <section id="research" className="bg-white py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The scientist"
          title="The Scientist"
          lede="Understanding insects. Protecting crops. Advancing sustainable agriculture."
        />
        <p className="mt-8 max-w-3xl leading-relaxed text-ink">
          French beans are a high-value crop in Kenya. Two thrips — the African
          bean flower thrips and the western flower thrips — feed in the flowers
          and can ruin a harvest. Prof. Gitonga’s documented research asked a
          practical question: how do these insects live in the field, and which
          local predators and parasitoids already keep them in check? The
          science is technical; the problem is agricultural and human.
        </p>

        <div className="mt-16 border border-line bg-ivory p-6 md:p-10">
          <p className="text-center text-[11px] tracking-[0.28em] text-gold-600 uppercase">
            Interactive research ecosystem
          </p>
          <h3 className="mt-2 text-center font-serif text-3xl text-forest-900">
            French Bean Agro-Ecosystem
          </h3>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {ecosystemNodes.map((n, i) => (
              <div key={n.id} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setNode(n.id)}
                  data-active={node === n.id}
                  className={`eco-dot rounded-full border px-4 py-2 text-[11px] tracking-[0.14em] uppercase transition ${
                    node === n.id
                      ? "border-gold-500 bg-forest-900 text-white"
                      : "border-forest-800 bg-white text-forest-800 hover:border-gold-500"
                  }`}
                >
                  {n.label}
                </button>
                {i < ecosystemNodes.length - 1 ? (
                  <span className="hidden h-px w-6 bg-gold-500 sm:block" aria-hidden />
                ) : null}
              </div>
            ))}
          </div>
          <article className="mx-auto mt-10 max-w-3xl border-t border-line pt-8">
            <h4 className="font-serif text-2xl text-forest-900">{current.label}</h4>
            <p className="mt-3 text-ink">{current.summary}</p>
            <p className="mt-3 text-muted">{current.detail}</p>
            <div className="mt-5">
              <SourceBadge source={current.source} />
              <a
                href={current.source.url}
                className="ml-4 text-[11px] tracking-[0.14em] text-forest-800 uppercase hover:text-gold-600"
                target="_blank"
                rel="noreferrer"
              >
                View original source →
              </a>
            </div>
          </article>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-gold-600 uppercase">
              The doctoral inquiry
            </p>
            <h3 className="mt-3 font-serif text-4xl text-forest-900">
              {doctoralInquiry.title}
            </h3>
            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="tracking-[0.16em] text-muted uppercase">Researcher</dt>
                <dd className="mt-1 text-ink">{doctoralInquiry.researcher}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-muted uppercase">Period</dt>
                <dd className="mt-1 text-ink">{doctoralInquiry.period}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-muted uppercase">Locations</dt>
                <dd className="mt-1 text-ink">{doctoralInquiry.locations.join(" · ")}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-muted uppercase">Institutions</dt>
                <dd className="mt-1 text-ink">{doctoralInquiry.institutions.join(" · ")}</dd>
              </div>
            </dl>
            <p className="mt-6 leading-relaxed text-ink">{doctoralInquiry.methodology}</p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {doctoralInquiry.findings.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-gold-500" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              {doctoralInquiry.sources.map((s) => (
                <SourceBadge key={s.id} source={s} compact />
              ))}
            </div>
            <a
              href={doctoralInquiry.sources[0].url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-[11px] tracking-[0.16em] text-forest-900 uppercase hover:text-gold-600"
            >
              View ICIPE research record →
            </a>
          </div>
          <ScientificDiagram />
        </div>
      </div>
    </section>
  );
}

function ScientificDiagram() {
  return (
    <figure className="border border-line bg-ivory p-6">
      <svg viewBox="0 0 360 420" className="h-auto w-full" role="img" aria-labelledby="diagram-title">
        <title id="diagram-title">
          Documented relationships in the French-bean agro-ecosystem
        </title>
        <rect width="360" height="420" fill="#F8F7F2" />
        <text x="180" y="28" textAnchor="middle" fill="#B9973E" fontSize="10" letterSpacing="2">
          DOCUMENTED FIELD SYSTEM
        </text>
        <circle cx="180" cy="80" r="28" fill="none" stroke="#123524" />
        <text x="180" y="84" textAnchor="middle" fill="#123524" fontSize="10">
          French bean
        </text>
        <line x1="180" y1="108" x2="90" y2="160" stroke="#C9A227" />
        <line x1="180" y1="108" x2="270" y2="160" stroke="#C9A227" />
        <circle cx="90" cy="186" r="26" fill="#123524" />
        <text x="90" y="190" textAnchor="middle" fill="#F8F7F2" fontSize="9">
          M. sjostedti
        </text>
        <circle cx="270" cy="186" r="26" fill="#174A35" />
        <text x="270" y="190" textAnchor="middle" fill="#F8F7F2" fontSize="9">
          F. occidentalis
        </text>
        <line x1="90" y1="212" x2="130" y2="270" stroke="#123524" />
        <line x1="270" y1="212" x2="230" y2="270" stroke="#123524" />
        <rect x="88" y="270" width="84" height="36" fill="none" stroke="#C9A227" />
        <text x="130" y="292" textAnchor="middle" fill="#123524" fontSize="9">
          Orius
        </text>
        <rect x="188" y="270" width="84" height="36" fill="none" stroke="#C9A227" />
        <text x="230" y="292" textAnchor="middle" fill="#123524" fontSize="9">
          Ceranisus
        </text>
        <line x1="180" y1="306" x2="180" y2="348" stroke="#C9A227" />
        <text x="180" y="372" textAnchor="middle" fill="#123524" fontSize="11">
          Biological control → IPM
        </text>
        <text x="180" y="396" textAnchor="middle" fill="#5C655E" fontSize="8">
          Machakos · Kaguru · JKUAT
        </text>
      </svg>
      <figcaption className="mt-3 text-xs text-muted">
        Diagram of relationships documented in the ICIPE dissertation record.
        Locations are named as published; coordinates are not invented.
      </figcaption>
    </figure>
  );
}
