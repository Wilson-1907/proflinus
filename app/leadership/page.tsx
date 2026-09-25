import type { Metadata } from "next";
import { LeadershipBlock } from "@/components/leadership/LeadershipBlock";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Documented administrative progression of Prof. Linus Muthuri Gitonga from JKUAT IT Centre to Vice-Chancellor of Karatina University.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageIntro
        eyebrow="Leadership"
        title="From laboratory to institution"
        lede="A progression of offices, each dated from university sources."
      />
      <LeadershipBlock />
    </>
  );
}
