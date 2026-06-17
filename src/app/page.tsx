import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { SubjectsSection } from "@/components/sections/SubjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <WhyChooseSection />
      <SubjectsSection />
      <TestimonialsSection />
      <AdmissionCTA />
    </>
  );
}
