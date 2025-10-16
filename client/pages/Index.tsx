import { BankSection } from "@/components/sections/BankSection";
import { BrandSection } from "@/components/sections/BrandSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { RatesSection } from "@/components/sections/RatesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Index() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RatesSection />
      <BankSection />
      <TestimonialsSection />
      <FaqSection />
      <BrandSection />
      <FinalCtaSection />
    </div>
  );
}
