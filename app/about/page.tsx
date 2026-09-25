import type { Metadata } from "next";
import { TheManBehind } from "@/components/about/TheManBehind";
import { IdentityHub } from "@/components/identity/IdentityHub";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description:
    "The documented Rugomo story and professional identity of Prof. Linus Muthuri Gitonga, Professor of Entomology and Vice-Chancellor of Karatina University.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="The person, the professor, the public record"
        lede="A life that moved from Rugomo to the lecture hall, the laboratory, and the Vice-Chancellor’s office — told only from attributed sources."
      />
      <TheManBehind />
      <IdentityHub />
    </>
  );
}
