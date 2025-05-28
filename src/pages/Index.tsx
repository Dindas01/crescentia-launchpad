
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import PricingSection from "@/components/PricingSection";
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
          <ServicesSection />
          <WhyUsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsappButton />
      </div>
    </>
  );
};

export default Index;
