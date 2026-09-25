import { archiveDocuments } from "@/data/metrics";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SourceArchive() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-pad mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Academic & public record"
          title="Sources"
          lede="Every factual claim on this site is traceable. This list is the public door to those records."
        />
        <ul className="mt-12 divide-y divide-line border-t border-line">
          {archiveDocuments.map((doc) => (
            <li key={doc.url} className="grid gap-2 py-5 md:grid-cols-[140px_1fr_auto]">
              <p className="text-[11px] tracking-[0.14em] text-gold-600 uppercase">{doc.type}</p>
              <div>
                <a href={doc.url} target="_blank" rel="noreferrer" className="font-serif text-xl text-forest-900 hover:underline">
                  {doc.title}
                </a>
                <p className="mt-1 text-sm text-muted">
                  {doc.institution} · {doc.date}
                </p>
              </div>
              <a href={doc.url} target="_blank" rel="noreferrer" className="text-[11px] tracking-[0.14em] text-forest-800 uppercase hover:text-gold-600">
                Open →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
