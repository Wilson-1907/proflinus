import Image from "next/image";
import Link from "next/link";
import { person } from "@/data/person";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ivory pt-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-forest-900" />
      <div className="section-pad mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="reveal text-[11px] tracking-[0.32em] text-gold-600 uppercase">
            {person.eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 font-serif text-5xl leading-[0.95] text-forest-900 sm:text-6xl lg:text-7xl">
            Prof. Linus
            <br />
            Muthuri
            <br />
            Gitonga
          </h1>
          <span className="draw-gold mt-7 block" />
          <p className="reveal reveal-delay-3 mt-8 max-w-xl font-serif text-2xl text-forest-800 italic md:text-3xl">
            {person.heroStatement}
          </p>
          <p className="reveal reveal-delay-4 mt-6 max-w-xl text-base leading-relaxed text-muted">
            {person.narrative}
          </p>
          <div className="reveal reveal-delay-5 mt-10 flex flex-wrap gap-3">
            <Link
              href="/journey"
              className="bg-forest-900 px-6 py-3 text-[11px] tracking-[0.18em] text-white uppercase transition-colors hover:bg-forest-700"
            >
              Explore His Journey
            </Link>
            <Link
              href="/publications"
              className="border border-forest-900 px-6 py-3 text-[11px] tracking-[0.18em] text-forest-900 uppercase transition-colors hover:bg-forest-900 hover:text-white"
            >
              Research & Publications
            </Link>
            <Link
              href="/leadership"
              className="px-2 py-3 text-[11px] tracking-[0.18em] text-gold-600 uppercase hover:underline"
            >
              Leadership & Impact
            </Link>
          </div>
        </div>

        <figure className="reveal reveal-delay-2 relative">
          <div className="absolute -inset-4 hidden border border-gold-500/40 lg:block" />
          <Image
            src="/images/portrait-headshot.png"
            alt="Formal portrait of Prof. Linus Muthuri Gitonga in a dark suit, white shirt and red tie"
            width={1600}
            height={1066}
            priority
            className="relative z-10 h-auto w-full object-cover object-top"
          />
          <figcaption className="mt-3 text-xs tracking-[0.16em] text-muted uppercase">
            Official portrait · Karatina University
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
