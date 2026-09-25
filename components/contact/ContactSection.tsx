import { person } from "@/data/person";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourceBadge } from "@/components/ui/SourceBadge";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ivory py-24 md:py-32">
      <div className="section-pad mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Office of the Vice-Chancellor"
          lede="Public institutional channels only. No personal email or unverified social profiles."
        />
        <div className="mt-10 border border-line bg-white p-8">
          <p className="font-serif text-3xl text-forest-900">{person.fullName}</p>
          <p className="mt-2 text-muted">{person.contact.office}</p>
          <p className="mt-6 text-sm leading-relaxed">
            {person.contact.institution}
            <br />
            {person.contact.address}
            <br />
            Tel: {person.contact.telephone}
            <br />
            Mobile: {person.contact.mobile}
          </p>
          <a
            href={`mailto:${person.contact.email}?subject=${encodeURIComponent("Professional Inquiry — Prof. Linus Muthuri Gitonga")}`}
            className="mt-8 inline-block bg-forest-900 px-6 py-3 text-[11px] tracking-[0.16em] text-white uppercase"
          >
            {person.contact.email}
          </a>
          <div className="mt-6">
            <SourceBadge source={person.contact.source} />
          </div>
        </div>
      </div>
    </section>
  );
}
