import type { Metadata } from "next";
import { SourceArchive } from "@/components/sources/SourceArchive";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Academic and public record for Prof. Linus Muthuri Gitonga — university biography, appointment records, dissertation and institutional news.",
};

export default function SourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Sources"
        title="Academic & public record"
        lede="The evidence layer of the archive. Follow every claim outward."
      />
      <SourceArchive />
    </>
  );
}
