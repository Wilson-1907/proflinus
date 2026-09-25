import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publications, topicLabels } from "@/data/publications";
import { getPublication, relatedPublications } from "@/lib/publications";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pub = getPublication(slug);
  if (!pub) return { title: "Publication" };
  return {
    title: pub.title,
    description: pub.abstract?.slice(0, 155) ?? `${pub.title} (${pub.year})`,
  };
}

export default async function PublicationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pub = getPublication(slug);
  if (!pub) notFound();
  const related = relatedPublications(pub);

  return (
    <article className="bg-white pt-32 pb-24">
      <div className="section-pad mx-auto max-w-3xl">
        <Link href="/publications" className="text-[11px] tracking-[0.16em] text-gold-600 uppercase">
          ← Research archive
        </Link>
        <p className="mt-6 text-[11px] tracking-[0.18em] text-muted uppercase">
          {pub.publicationType.replace("-", " ")} · {pub.year}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-forest-900 md:text-5xl">{pub.title}</h1>
        <p className="mt-4 text-muted">{pub.authors.join(", ")}</p>
        <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="tracking-[0.14em] text-muted uppercase">Journal</dt>
            <dd>{pub.journal}</dd>
          </div>
          {pub.volume ? (
            <div>
              <dt className="tracking-[0.14em] text-muted uppercase">Volume / issue</dt>
              <dd>
                {pub.volume}
                {pub.issue ? ` (${pub.issue})` : ""}
                {pub.pages ? `, pp. ${pub.pages}` : ""}
              </dd>
            </div>
          ) : null}
          {pub.doi ? (
            <div>
              <dt className="tracking-[0.14em] text-muted uppercase">DOI</dt>
              <dd>
                {pub.doi} {pub.doiVerified ? "· DOI verified" : ""}
              </dd>
            </div>
          ) : null}
        </dl>
        {pub.abstract ? (
          <div className="mt-10">
            <h2 className="text-[11px] tracking-[0.18em] text-gold-600 uppercase">Abstract</h2>
            <p className="mt-3 leading-relaxed text-ink">{pub.abstract}</p>
          </div>
        ) : (
          <p className="mt-10 text-sm text-muted">
            Abstract not reproduced here. Follow the original source for the full record.
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-2">
          {pub.topics.map((t) => (
            <span key={t} className="border border-line px-2 py-0.5 text-[10px] tracking-[0.12em] uppercase">
              {topicLabels[t]}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <SourceBadge source={pub.source} />
        </div>
        <a
          href={pub.externalUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block bg-forest-900 px-5 py-3 text-[11px] tracking-[0.16em] text-white uppercase"
        >
          View original source →
        </a>
        {related.length ? (
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="text-[11px] tracking-[0.18em] text-gold-600 uppercase">Related work</h2>
            <ul className="mt-4 space-y-4">
              {related.map((r) => (
                <li key={r.id}>
                  <Link href={`/publications/${r.slug}`} className="font-serif text-xl text-forest-900 hover:underline">
                    {r.title}
                  </Link>
                  <p className="text-sm text-muted">
                    {r.year} · {r.journal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
