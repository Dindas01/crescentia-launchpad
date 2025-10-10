
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ExpertiseCompactSection from "@/components/ExpertiseCompactSection";
import TimelineAccordionSection from "@/components/TimelineAccordionSection";
import PricingModelSection from "@/components/PricingModelSection";
import WhyUsCarousel from "@/components/WhyUsCarousel";
import AboutSection from "@/components/AboutSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import PromotionalBanner from "@/components/PromotionalBanner";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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
          <ExpertiseCompactSection />
          <TimelineAccordionSection />
          <PricingModelSection />
          <WhyUsCarousel />
          <AboutSection />
          <TestimonialsCarousel />
          <FinalCTASection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsappButton />
        <StickyMobileCTA />
      </div>
    </>
  );
};

export default Index;
