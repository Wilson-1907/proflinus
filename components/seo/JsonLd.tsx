import { person } from "@/data/person";
import { publications } from "@/data/publications";
import { SITE_URL } from "@/lib/utils";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.fullName,
    honorificPrefix: "Prof.",
    jobTitle: ["Vice-Chancellor", "Professor of Entomology"],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Karatina University",
      url: "https://karu.ac.ke",
    },
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Karatina University",
      url: "https://karu.ac.ke",
    },
    url: SITE_URL,
    email: person.contact.email,
    telephone: person.contact.telephone,
    image: `${SITE_URL}/images/portrait-headshot.png`,
    sameAs: [
      "https://karu.ac.ke/vice-chancellor/",
      "https://scholar.google.com/citations?user=L1PDb8IAAAAJ&hl=en",
      "https://ke.linkedin.com/in/linus-gitonga-5a97b026",
      "https://thehive.icipe.org/all-dissertations/166/",
    ],
    knowsAbout: person.specializations,
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${person.fullName} — Digital Academic Archive`,
    url: SITE_URL,
    mainEntity: { "@id": `${SITE_URL}#person` },
  };

  const articles = publications
    .filter((p) => p.doi)
    .slice(0, 8)
    .map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.title,
      author: p.authors.map((name) => ({ "@type": "Person", name })),
      datePublished: String(p.year),
      identifier: p.doi ? `https://doi.org/${p.doi}` : undefined,
      isPartOf: p.journal ? { "@type": "Periodical", name: p.journal } : undefined,
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...personSchema, "@id": `${SITE_URL}#person` }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": articles,
          }),
        }}
      />
    </>
  );
}
