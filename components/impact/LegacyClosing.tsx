import Link from "next/link";

const dimensions = [
  { title: "Scholarship", text: "Research and scientific contribution in entomology and biological control." },
  { title: "Leadership", text: "Academic and institutional service from an IT centre to the Vice-Chancellor’s office." },
  { title: "Innovation", text: "Technology, research and documented partnerships." },
  { title: "People", text: "Students, colleagues, farmers, communities and society." },
];

export function LegacyClosing() {
  return (
    <>
      <section className="bg-forest-900 py-24 text-ivory md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.28em] text-gold-400 uppercase">Legacy in motion</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Four dimensions, one record</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {dimensions.map((d) => (
              <article key={d.title} className="border-t border-gold-500/50 pt-5">
                <h3 className="font-serif text-2xl">{d.title}</h3>
                <p className="mt-3 text-sm text-ivory/75">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="section-pad mx-auto max-w-4xl text-center">
          <p className="font-serif text-3xl leading-snug text-forest-900 md:text-5xl">
            Scholarship shapes knowledge.
            <br />
            Leadership shapes institutions.
            <br />
            Service shapes society.
          </p>
          <p className="mt-6 text-xs tracking-[0.16em] text-muted uppercase">
            Editorial copy of this archive — not a quotation
          </p>
          <div className="gold-rule mx-auto my-10 w-32" />
          <p className="font-serif text-3xl text-forest-900">Prof. Linus Muthuri Gitonga</p>
          <p className="mt-2 text-sm text-muted">Vice-Chancellor · Karatina University</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[11px] tracking-[0.18em] uppercase">
            <Link href="/research" className="text-forest-900 hover:text-gold-600">Research</Link>
            <Link href="/publications" className="text-forest-900 hover:text-gold-600">Publications</Link>
            <a href="https://karu.ac.ke" className="text-forest-900 hover:text-gold-600">University</a>
            <Link href="/contact" className="text-forest-900 hover:text-gold-600">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
