import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { ProcessSection } from "@/components/ProcessSection";
import { KeyBenefits } from "@/components/KeyBenefits";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureHighlights />
      <ProcessSection />
      <KeyBenefits />
      <ContactForm />
    </div>
  );
};

export default Index;