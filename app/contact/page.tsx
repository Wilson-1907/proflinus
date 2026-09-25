import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { IdentityHub } from "@/components/identity/IdentityHub";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Office of the Vice-Chancellor, Karatina University — public institutional contact for Prof. Linus Muthuri Gitonga.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Professional correspondence"
        lede="Write to the Office of the Vice-Chancellor through verified institutional channels."
      />
      <ContactSection />
      <IdentityHub />
    </>
  );
}
