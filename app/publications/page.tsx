import type { Metadata } from "next";
import { FeaturedResearch, PublicationArchive } from "@/components/publications/PublicationArchive";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Identity-checked research archive of Prof. Linus Muthuri Gitonga, with Crossref-verified DOIs and links to ICIPE and Karatina repositories.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Publications"
        title="Research archive"
        lede="Search, filter and follow every paper back to its publisher or repository. This site does not own the research it describes."
      />
      <FeaturedResearch />
      <PublicationArchive />
    </>
  );
}
