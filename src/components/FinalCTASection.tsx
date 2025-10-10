import { Button } from "./ui/button";

const FinalCTASection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding-mobile bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
      <div className="container-custom text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-poppins">
          Tens um projeto com potencial?
        </h2>
        <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto font-inter opacity-90">
          Diagnóstico gratuito de 30 minutos. Depois decides se avançamos.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue-dark px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-poppins w-full sm:w-auto"
        >
          Marcar Diagnóstico Gratuito
        </Button>
        <p className="mt-4 md:mt-6 text-white/80 text-xs md:text-sm font-inter">
          Resposta em menos de 24h | 913 960 220
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
