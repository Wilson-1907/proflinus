import type { Metadata } from "next";
import { ScientistSection } from "@/components/research/ScientistSection";
import { ResearchNetwork } from "@/components/research/ResearchNetwork";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Entomology, biological control and the French-bean agro-ecosystem research of Prof. Linus Muthuri Gitonga, including the ICIPE doctoral record.",
};

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Research"
        title="From the ecosystem to the institution"
        lede="An explorable record of thrips, natural enemies and biological control — every statement traceable."
      />
      <ScientistSection />
      <ResearchNetwork />
    </>
  );
}
