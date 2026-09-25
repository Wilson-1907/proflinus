"use client";

import { useState } from "react";
import Image from "next/image";
import { journeyMilestones } from "@/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function AcademicJourney() {
  const [active, setActive] = useState(journeyMilestones[0].id);
  const current =
    journeyMilestones.find((m) => m.id === active) ?? journeyMilestones[0];

  return (
    <section id="journey" className="bg-ivory py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The journey"
          title="A Journey Through Scholarship and Leadership"
          lede="From Kenyatta University lecture halls to ICIPE field sites, from a pioneering IT centre to the Vice-Chancellor’s office — each step is dated, sourced and left unembellished."
        />

        <div className="mt-14 lg:hidden">
          <ol className="relative space-y-3 border-l border-forest-900/20 pl-6">
            {journeyMilestones.map((m) => (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => setActive(m.id)}
                  className={`-ml-[1.7rem] flex items-start gap-3 text-left ${active === m.id ? "text-forest-900" : "text-muted"}`}
                >
                  <span
                    className={`mt-1 h-3 w-3 shrink-0 rounded-full border ${active === m.id ? "border-gold-500 bg-gold-500" : "border-forest-800 bg-ivory"}`}
                  />
                  <span>
                    <span className="block text-[11px] tracking-[0.18em] text-gold-600 uppercase">
                      {m.period}
                    </span>
                    <span className="font-serif text-2xl">{m.title}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 hidden overflow-x-auto pb-4 lg:block">
          <ol className="relative flex min-w-[1100px] gap-4 pt-8">
            <span className="absolute top-11 right-0 left-0 h-px bg-forest-900/20" />
            {journeyMilestones.map((m) => (
              <li key={m.id} className="relative min-w-[160px] flex-1">
                <button
                  type="button"
                  onClick={() => setActive(m.id)}
                  className="group w-full text-left"
                >
                  <span
                    className={`mx-auto mb-4 block h-3 w-3 rounded-full border transition ${active === m.id ? "border-gold-500 bg-gold-500 eco-dot" : "border-forest-800 bg-ivory group-hover:border-gold-500"}`}
                    data-active={active === m.id}
                  />
                  <span className="block text-[10px] tracking-[0.18em] text-gold-600 uppercase">
                    {m.period}
                  </span>
                  <span className="mt-1 block font-serif text-xl leading-tight text-forest-900">
                    {m.title}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <article className="mt-12 grid gap-8 border border-line bg-white p-6 md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-gold-600 uppercase">
              {current.period} · {current.institution}
            </p>
            <h3 className="mt-2 font-serif text-3xl text-forest-900">
              {current.title}
            </h3>
            {current.role ? (
              <p className="mt-2 text-sm text-muted">{current.role}</p>
            ) : null}
            <p className="mt-5 leading-relaxed text-ink">{current.significance}</p>
            <div className="mt-6">
              <SourceBadge source={current.source} />
              <a
                href={current.source.url}
                target="_blank"
                rel="noreferrer"
                className="ml-4 text-[11px] tracking-[0.14em] text-forest-800 uppercase hover:text-gold-600"
              >
                View original source →
              </a>
            </div>
          </div>
          {current.photo ? (
            <Image
              src={current.photo}
              alt={current.title}
              width={800}
              height={560}
              className="h-full max-h-80 w-full object-cover"
            />
          ) : (
            <div className="flex items-end border border-dashed border-forest-900/20 p-6 text-sm text-muted">
              Photograph not attached to this milestone. The record stands on
              the cited institutional source.
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
