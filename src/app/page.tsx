import HeroSection from "@/components/sections/HeroSection";
import MarqueeLogos from "@/components/sections/MarqueeLogos";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TargetAudience from "@/components/sections/TargetAudience";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSteps from "@/components/sections/ProcessSteps";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeLogos />
      <WhyUsSection />
      <TargetAudience />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSteps />
    </>
  );
}
