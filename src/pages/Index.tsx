import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { LeadMagnetSection } from "@/components/landing/LeadMagnetSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <OfferSection />
      <PricingSection />
      <LeadMagnetSection />
      <TrustSection />
      <ProcessSection />
      <FinalCTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
