import type { Metadata } from "next";
import { IdentityHub } from "@/components/identity/IdentityHub";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Academic Identity",
  description:
    "Verified academic identity hub for Prof. Linus Muthuri Gitonga — Google Scholar, ICIPE, Karatina Repository, Crossref and identity-matched LinkedIn.",
};

export default function IdentityPage() {
  return (
    <>
      <PageIntro
        eyebrow="Academic identity"
        title="A scholarly passport"
        lede="One person, multiple checked public records. Unconfirmed profiles are not linked."
      />
      <IdentityHub />
    </>
  );
}
