import Image from "next/image";
import { administratorThemes, certificates, leadershipProgression } from "@/data/leadership";
import { vcEvents } from "@/data/events";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function LeadershipBlock() {
  return (
    <>
      <section className="bg-forest-900 py-24 text-ivory md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <SectionHeading
            light
            eyebrow="From researcher to institutional leader"
            title="The same mind, a larger system"
            lede="The design narrative of this archive is that the scientist who studied relationships inside agro-ecosystems later worked with relationships inside institutions. That comparison is editorial, not a quotation."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadershipProgression.map((item, i) => (
              <li key={item.role} className="border-t border-ivory/15 pt-4">
                <p className="text-[11px] tracking-[0.18em] text-gold-400 uppercase">
                  {String(i + 1).padStart(2, "0")} · {item.years}
                </p>
                <p className="mt-2 font-serif text-2xl">{item.role}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The administrator"
            title="Documented professional responsibilities"
            lede="These themes are taken from the official university biography and Council record. They describe a portfolio of office, not a list of unverified personal achievements."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {administratorThemes.map((theme) => (
              <article key={theme.title} className="border-t border-line pt-5">
                <h3 className="font-serif text-2xl text-forest-900">{theme.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{theme.text}</p>
                <div className="mt-4">
                  <SourceBadge source={theme.source} compact />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {certificates.map((c) => (
              <article key={c.title} className="bg-ivory p-5">
                <p className="text-[11px] tracking-[0.16em] text-gold-600 uppercase">{c.year}</p>
                <h3 className="mt-2 font-serif text-xl text-forest-900">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-ivory py-24 md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SectionHeading
              eyebrow="Vice-Chancellor, Karatina University"
              title="Appointed 12 September 2023"
              lede="The Council record dates the appointment. The office handover of 5 June 2023 marked the acting period. The inauguration of 24 November 2023 made the transition public."
            />
            <Image
              src="/images/graduation-regalia.png"
              alt="Prof. Gitonga in academic regalia addressing the congregation after inauguration"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
          <ol className="mt-16 space-y-8">
            {vcEvents.map((event) => (
              <li key={event.id} className="grid gap-6 border-t border-line pt-6 md:grid-cols-[140px_1fr_220px]">
                <p className="text-[11px] tracking-[0.16em] text-gold-600 uppercase">
                  {event.date}
                </p>
                <div>
                  <h3 className="font-serif text-2xl text-forest-900">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{event.summary}</p>
                  <div className="mt-3">
                    <SourceBadge source={event.source} compact />
                  </div>
                </div>
                {event.photo ? (
                  <Image
                    src={event.photo}
                    alt={event.title}
                    width={440}
                    height={280}
                    className="h-36 w-full object-cover"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
