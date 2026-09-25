import type { Metadata } from "next";
import { AcademicJourney } from "@/components/journey/AcademicJourney";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Interactive academic and leadership timeline of Prof. Linus Muthuri Gitonga, from Kenyatta University to Karatina University.",
};

export default function JourneyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Journey"
        title="How the scholar became the Vice-Chancellor"
        lede="Each milestone carries a date, an institution, a significance note and a source."
      />
      <AcademicJourney />
    </>
  );
}
