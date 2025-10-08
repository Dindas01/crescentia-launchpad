import { Button } from "./ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-orange/10 to-brand-green/10">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-6 font-poppins">
          Tens um projeto com potencial?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
          Nós tratamos de o tornar realidade.
        </p>
        <Button
          size="lg"
          className="bg-brand-orange hover:bg-brand-orange/90 text-white px-12 py-6 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-poppins"
          asChild
        >
          <a href="#contact">Falar com especialista</a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
