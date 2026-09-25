import { HeroSection } from "@/components/hero/HeroSection";
import { TheManBehind } from "@/components/about/TheManBehind";
import { AcademicJourney } from "@/components/journey/AcademicJourney";
import { ScientistSection } from "@/components/research/ScientistSection";
import { ResearchNetwork } from "@/components/research/ResearchNetwork";
import {
  FeaturedResearch,
  PublicationArchive,
} from "@/components/publications/PublicationArchive";
import { LeadershipBlock } from "@/components/leadership/LeadershipBlock";
import { ImpactBlock } from "@/components/impact/ImpactBlock";
import { IdentityHub } from "@/components/identity/IdentityHub";
import { PhotoGallery } from "@/components/media/PhotoGallery";
import { SourceArchive } from "@/components/sources/SourceArchive";
import { ContactSection } from "@/components/contact/ContactSection";
import { LegacyClosing } from "@/components/impact/LegacyClosing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TheManBehind />
      <AcademicJourney />
      <ScientistSection />
      <ResearchNetwork />
      <FeaturedResearch />
      <PublicationArchive compact />
      <LeadershipBlock />
      <ImpactBlock />
      <IdentityHub />
      <PhotoGallery />
      <SourceArchive />
      <ContactSection />
      <LegacyClosing />
    </>
  );
}
