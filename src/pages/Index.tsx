
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import PromotionalBanner from "@/components/PromotionalBanner";

const Index = () => {
  return (
    <>
      <SEO />
      <SchemaMarkup />
      <div className="min-h-screen flex flex-col">
        <PromotionalBanner />
        <Header />

        <main className="flex-1">
          <HeroSection />
          <ImpactSection />
          <ExpertiseSection />
          <TimelineSection />
          <AboutSection />
          <TestimonialsSection />
          <FinalCTASection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsappButton />
      </div>
    </>
  );
};

export default Index;
