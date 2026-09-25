import Image from "next/image";
import { person } from "@/data/person";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TheManBehind() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="section-pad mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="The man behind the title"
            title="Before the Office, There Was a Dream."
          />
          <blockquote className="mt-10 border-l border-gold-500 pl-6">
            <p className="font-serif text-3xl leading-snug text-forest-900 italic md:text-4xl">
              “{person.origin.quote}”
            </p>
            <footer className="mt-6 text-sm text-muted">
              Recalled of a boyhood in {person.origin.place}, and published in
              the official university biography.
            </footer>
          </blockquote>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink">
            {person.origin.story} The portfolio presents this as an attributed
            biographical story — not as additional childhood invention.
          </p>
          <div className="mt-6">
            <SourceBadge source={person.origin.source} />
          </div>
        </div>
        <figure className="relative">
          <Image
            src="/images/portrait-desk.png"
            alt="Formal portrait of Prof. Linus Muthuri Gitonga"
            width={700}
            height={896}
            className="w-full object-cover"
          />
          <figcaption className="mt-3 text-xs tracking-[0.16em] text-muted uppercase">
            Rugomo → student → scientist → professor → Vice-Chancellor
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
