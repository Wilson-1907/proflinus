import Link from "next/link";
import { Mail, Landmark, BookOpen } from "lucide-react";
import { person } from "@/data/person";
import { identityProfiles, publicIdentityProfiles } from "@/data/identity";
import { SectionHeading } from "@/components/ui/SectionHeading";

const statusLabel: Record<string, string> = {
  verified: "Verified",
  "identity-matched": "Identity matched",
  "source-record": "Authoritative research record",
  discovery: "Profile discovery available",
  unconfirmed: "Not independently verified",
};

export function IdentityHub() {
  const visible = publicIdentityProfiles;
  const hidden = identityProfiles.filter((p) => !p.public);

  return (
    <section id="identity" className="bg-ivory py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Verified academic identity"
          title="One identity. One scholarly record."
          lede="An academic identity passport — not a social-media tray. Profiles appear only after name, institution, field and publication overlap were checked."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="border border-line bg-white p-8">
            <p className="text-[11px] tracking-[0.22em] text-gold-600 uppercase">
              Public contact card
            </p>
            <h3 className="mt-3 font-serif text-3xl text-forest-900">{person.fullName}</h3>
            <p className="mt-1 text-sm text-muted">
              {person.title}
              <br />
              {person.academicRank}
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="tracking-[0.14em] text-muted uppercase">Professional correspondence</dt>
                <dd className="mt-1">{person.contact.email}</dd>
              </div>
              <div>
                <dt className="tracking-[0.14em] text-muted uppercase">Office</dt>
                <dd className="mt-1">
                  {person.contact.institution}
                  <br />
                  {person.contact.address}
                </dd>
              </div>
              <div>
                <dt className="tracking-[0.14em] text-muted uppercase">Telephone</dt>
                <dd className="mt-1">{person.contact.telephone}</dd>
              </div>
              <div>
                <dt className="tracking-[0.14em] text-muted uppercase">Mobile</dt>
                <dd className="mt-1">{person.contact.mobile}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${person.contact.email}?subject=${encodeURIComponent("Professional Inquiry — Prof. Linus Muthuri Gitonga")}`}
                className="inline-flex items-center justify-center gap-2 bg-forest-900 px-4 py-3 text-[11px] tracking-[0.16em] text-white uppercase"
              >
                <Mail size={14} /> Send professional email
              </a>
              <a
                href={person.contact.website}
                className="inline-flex items-center justify-center gap-2 border border-forest-900 px-4 py-3 text-[11px] tracking-[0.16em] text-forest-900 uppercase"
              >
                <Landmark size={14} /> Visit university
              </a>
              <Link
                href="/publications"
                className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.16em] text-gold-600 uppercase"
              >
                <BookOpen size={14} /> Explore research
              </Link>
            </div>
          </article>

          <div>
            <p className="text-[11px] tracking-[0.22em] text-gold-600 uppercase">
              Academic identity
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {visible.map((p) => (
                <article key={p.id} className="border border-line bg-white p-5">
                  <p className="font-serif text-xl text-forest-900">{p.platform}</p>
                  <p className="mt-1 text-[10px] tracking-[0.16em] text-gold-600 uppercase">
                    {statusLabel[p.status]}
                  </p>
                  <p className="mt-2 text-sm text-muted">{p.description}</p>
                  <p className="mt-3 text-xs text-muted">Last checked: September 2026</p>
                  {p.url && p.status !== "discovery" ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-[11px] tracking-[0.14em] text-forest-800 uppercase hover:text-gold-600"
                    >
                      Open {p.platform} →
                    </a>
                  ) : (
                    <p className="mt-3 text-xs text-muted">No unverified profile link is shown.</p>
                  )}
                </article>
              ))}
            </div>
            {hidden.length ? (
              <p className="mt-4 text-xs text-muted">
                ORCID and ResearchGate were reviewed and are not displayed as
                active profile links until independently matched.
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-12 border border-line bg-white p-8">
          <p className="text-[11px] tracking-[0.22em] text-gold-600 uppercase">Digital scholar profile</p>
          <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <p><strong className="block text-[11px] tracking-[0.14em] text-muted uppercase">Specialisation</strong> Biological Control · Integrated Pest Management</p>
            <p><strong className="block text-[11px] tracking-[0.14em] text-muted uppercase">Research</strong> Thrips · Natural enemies · Agricultural pests · Population dynamics</p>
            <p><strong className="block text-[11px] tracking-[0.14em] text-muted uppercase">Doctoral research</strong> Bioecology of thrips in French-bean agro-ecosystems in Kenya</p>
          </div>
          <Link href="/research" className="mt-6 inline-block text-[11px] tracking-[0.16em] text-forest-900 uppercase hover:text-gold-600">
            Explore his scholarship →
          </Link>
        </div>
      </div>
    </section>
  );
}
