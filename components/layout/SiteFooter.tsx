import Link from "next/link";
import { publicIdentityProfiles } from "@/data/identity";

export function SiteFooter() {
  const profiles = publicIdentityProfiles.filter((p) => p.url && p.status !== "discovery");

  return (
    <footer className="border-t border-line bg-forest-900 text-ivory">
      <div className="section-pad mx-auto max-w-7xl py-14 pb-28">
        <p className="text-[11px] tracking-[0.28em] text-gold-400 uppercase">
          Find his work across the scholarly web
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {profiles.map((p) => (
            <li key={p.id}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="text-ivory/80 underline-offset-4 hover:text-gold-400 hover:underline"
              >
                {p.platform}
              </a>
            </li>
          ))}
        </ul>

        <div className="gold-rule my-10 opacity-40" />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl">Prof. Linus Muthuri Gitonga</p>
            <p className="mt-1 text-sm text-ivory/70">
              Vice-Chancellor, Karatina University
            </p>
            <p className="mt-3 text-[11px] tracking-[0.2em] text-gold-400 uppercase">
              Research · Leadership · Service · Innovation
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-ivory/75">
            <a href="https://karu.ac.ke" target="_blank" rel="noreferrer">
              Official University Website
            </a>
            <Link href="/sources">Research Sources</Link>
            <Link href="/identity">Academic Identity</Link>
          </div>
        </div>
        <p className="mt-8 text-xs text-ivory/45">
          © {new Date().getFullYear()} Digital academic archive. Photographs and
          institutional records remain the property of their originating
          universities, repositories and publishers.
        </p>
        <p className="mt-3 text-xs text-ivory/55">
          Made by{" "}
          <a
            href="https://www.techflare-solutions.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gold-400 underline-offset-4 hover:underline"
          >
            Techflare
          </a>
        </p>
      </div>
    </footer>
  );
}
