
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <SchemaMarkup />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
