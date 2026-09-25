import type { Metadata } from "next";
import { ImpactBlock } from "@/components/impact/ImpactBlock";
import { LegacyClosing } from "@/components/impact/LegacyClosing";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Documented institutional initiatives around Prof. Gitonga’s Vice-Chancellorship, including the 2026 China visit, Career Week and first-year address.",
};

export default function ImpactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Impact"
        title="Leadership in context"
        lede="The person and the institution, distinguished with care. University achievements are not treated as personal property."
      />
      <ImpactBlock />
      <LegacyClosing />
    </>
  );
}
