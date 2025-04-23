
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria de Gestão e Fundos | Crescentia</title>
        <meta 
          name="description" 
          content="Consultoria de gestão especializada em fundos europeus como o Portugal 2030 e PRR. A Crescentia apoia PME no crescimento estratégico com soluções práticas." 
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <CTASection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
