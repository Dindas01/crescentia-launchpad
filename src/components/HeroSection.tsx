import { Shield } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const processSection = document.getElementById('processo');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative hero-mobile min-h-screen md:min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10 text-center px-4">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight font-poppins">
          Tornamos possíveis os projetos
          <br />
          <span className="text-white/90">que movem as empresas portuguesas</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto font-inter opacity-90">
          Com mais de 24 mil milhões de euros disponíveis no Portugal 2030 e PRR,
          <br className="hidden md:block" />
          <span className="block mt-2">ajudamos a tua empresa a captar o financiamento necessário para crescer com inovação</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center max-w-md md:max-w-none mx-auto">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-poppins w-full sm:w-auto"
          >
            Agenda uma Reunião Exploratória
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToProcess}
            className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-brand-blue px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold rounded-lg transition-all font-poppins w-full sm:w-auto backdrop-blur-sm"
          >
            Como Funciona ↓
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
