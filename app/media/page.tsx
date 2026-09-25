import type { Metadata } from "next";
import { PhotoGallery } from "@/components/media/PhotoGallery";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Authentic photograph archive of Prof. Linus Muthuri Gitonga from Karatina University public records.",
};

export default function MediaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Media"
        title="Photographs from the public record"
        lede="Portraits, handover, graduation, student addresses and the Hangzhou visit — all from official university pages."
      />
      <PhotoGallery />
    </>
  );
}
