import { Button } from "./ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
          Tens um projeto com potencial?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto font-inter opacity-90">
          Diagnóstico gratuito de 30 minutos. Depois decides se avançamos.
        </p>
        <Button
          size="lg"
          className="bg-brand-orange hover:bg-brand-orange/90 text-white px-12 py-6 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-poppins"
          asChild
        >
          <a href="#contact">Marcar Diagnóstico Gratuito</a>
        </Button>
        <p className="mt-6 text-white/80 text-sm font-inter">
          Resposta em menos de 24h | 913 960 220
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
