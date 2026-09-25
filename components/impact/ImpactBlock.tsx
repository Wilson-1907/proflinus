import Image from "next/image";
import { chinaPartnership, studentThemes, transformationMap } from "@/data/transformation";
import {
  communityService,
  documentedSupport,
  supervision,
} from "@/data/leadership";
import { quotes } from "@/data/quotes";
import { researchSnapshot } from "@/data/metrics";
import { person } from "@/data/person";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function ImpactBlock() {
  const architect = quotes.find((q) => q.id === "architect-2026");
  const csi = quotes.find((q) => q.id === "csi-2025");

  return (
    <>
      <section id="impact" className="bg-white py-24 md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Current institutional transformation"
            title="A map of documented initiatives"
            lede="Each cell is populated only from university sources. Institutional work is not treated as a personal trophy."
          />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-5">
            {transformationMap.map((cat) => (
              <article key={cat.id} className="bg-white p-5">
                <h3 className="text-[11px] tracking-[0.16em] text-gold-600 uppercase">
                  {cat.title}
                </h3>
                {cat.items.map((item) => (
                  <p key={item.text} className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-900 py-24 text-ivory md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <SectionHeading
            light
            eyebrow="Building bridges beyond borders"
            title="China · Hangzhou · Hikvision"
            lede="January 2026. A two-week programme that built on an existing MoU and opened conversations — not a completed transformation."
          />
          <div className="mt-10 overflow-hidden">
            <p className="text-center text-[11px] tracking-[0.3em] text-gold-400 uppercase">
              Karatina
              <span className="mx-4 inline-block h-px w-24 bg-gold-400 align-middle" />
              Hangzhou
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-[11px] tracking-[0.18em] text-gold-400 uppercase">Existing collaboration</h3>
              <ul className="mt-3 space-y-2 text-sm text-ivory/80">
                {chinaPartnership.existing.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.18em] text-gold-400 uppercase">Identified for future work</h3>
              <ul className="mt-3 space-y-2 text-sm text-ivory/80">
                {chinaPartnership.explored.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.18em] text-gold-400 uppercase">Then in progress</h3>
              <ul className="mt-3 space-y-2 text-sm text-ivory/80">
                {chinaPartnership.inProgress.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <SourceBadge source={chinaPartnership.source} />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="section-pad mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Computing & the digital future"
              title="From an IT centre to a computing school"
              lede="Prof. Gitonga was pioneering Director of the JKUAT Information Technology Centre (2002–2005). Current Karatina developments in computing are institutional. The archive connects the history carefully; it does not claim he created every present initiative."
            />
            {csi ? (
              <blockquote className="mt-8 border-l border-gold-500 pl-5 font-serif text-2xl text-forest-900 italic">
                “{csi.text}”
                <footer className="mt-3 font-sans text-xs tracking-[0.14em] text-muted uppercase not-italic">
                  {csi.event} · {csi.date}
                </footer>
              </blockquote>
            ) : null}
          </div>
          <Image
            src="/images/meeting-address.png"
            alt="Prof. Gitonga speaking at an institutional meeting"
            width={1000}
            height={700}
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="blueprint bg-ivory py-24 md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The architect of the future"
            title="You are the Architect of the Future You Envision"
            lede="27 August 2026, Graduation Square. The construction metaphor is the Vice-Chancellor’s own, as reported by the University."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Image
              src="/images/first-year-address.png"
              alt="Prof. Gitonga in academic regalia addressing first-year students"
              width={1000}
              height={700}
              className="w-full object-cover"
            />
            <div>
              {architect ? (
                <blockquote className="font-serif text-3xl text-forest-900 italic">
                  “{architect.text}”
                </blockquote>
              ) : null}
              <p className="mt-6 text-sm text-muted">
                He likened the mind to a garden and summed the message in three
                words: Discipline, Practice and Persistence. Integrity,
                responsible choices and seeking help were also recorded.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {studentThemes.map((t) => (
                  <span key={t.word} className="border border-forest-900/20 bg-white px-3 py-1 text-xs tracking-[0.12em] text-forest-800 uppercase">
                    {t.word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="section-pad mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-forest-900">Research support & collaboration</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{documentedSupport.framing}</p>
            <ul className="mt-6 space-y-2 text-sm text-forest-800">
              {documentedSupport.organisations.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-forest-900">Supervision & mentorship</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{supervision.framing}</p>
            <p className="mt-4 text-xs tracking-[0.14em] text-gold-600 uppercase">{supervision.dateLabel}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-forest-900">Professional affiliations</h2>
            <ul className="mt-6 space-y-3">
              {person.affiliations.map((a) => (
                <li key={a.name} className="border-t border-line pt-3 font-serif text-xl text-forest-900">
                  {a.name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Society names as listed on the official biography. Logos are omitted.</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-forest-900">Community</h2>
            <p className="mt-4 text-sm text-muted">{communityService.framing}</p>
            <ul className="mt-4 space-y-2 text-sm text-forest-800">
              {communityService.areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-pad mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl text-forest-900">Research snapshot</h2>
          <p className="mt-4 max-w-3xl text-sm text-muted">{researchSnapshot.framing}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {researchSnapshot.notes.map((n) => (
              <article key={n.label} className="border border-line p-5">
                <p className="text-[11px] tracking-[0.16em] text-gold-600 uppercase">{n.label}</p>
                <p className="mt-2 font-serif text-2xl text-forest-900">{n.value}</p>
                <p className="mt-3 text-xs text-muted">{n.sourceName} · {n.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
