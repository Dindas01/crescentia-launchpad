import { useState, useEffect } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const reasons = [
  {
    title: "Risco Partilhado de Verdade",
    description: "Investment fee justo + success fee só após aprovação. Ganhamos juntos.",
  },
  {
    title: "Acompanhamento Integral",
    description: "Não desaparecemos após submissão. Estamos contigo até ao fim.",
  },
  {
    title: "Transparência Total",
    description: "Sabes sempre custos, estado do projeto, e próximos passos.",
  },
  {
    title: "Experiência Comprovada",
    description: "Candidaturas aprovadas em múltiplos sectores e tipologias.",
  },
  {
    title: "Modelo Escalonado Justo",
    description: "Pequenos e grandes projetos tratados com equidade na % success fee.",
  },
  {
    title: "Filtramos Contigo",
    description: "Se o projeto não é viável, dizemos. Não desperdiçamos o teu tempo.",
  },
];

const WhyUsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reasons.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="section-padding-mobile bg-brand-blue-medium text-white">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-poppins">
            Porque a Crescentia?
          </h2>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto font-inter">
            6 razões para escolher o nosso modelo
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile when showing single item */}
          {itemsPerView < reasons.length && (
            <>
              <Button
                onClick={prev}
                disabled={currentIndex === 0}
                variant="outline"
                size="icon"
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white text-brand-blue hover:bg-brand-blue-light disabled:opacity-30 hidden sm:flex"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                variant="outline"
                size="icon"
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white text-brand-blue hover:bg-brand-blue-light disabled:opacity-30 hidden sm:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white text-brand-gray-dark rounded-xl p-6 md:p-8 shadow-lg"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * (itemsPerView === 1 ? 0 : 24 / itemsPerView)}px)` }}
                >
                  <CheckCircle className="text-brand-green mb-3 md:mb-4" size={40} />
                  <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-2 md:mb-3 font-poppins">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base font-inter leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-6 md:w-8' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          {itemsPerView < reasons.length && (
            <div className="flex justify-center gap-4 mt-6 sm:hidden">
              <Button
                onClick={prev}
                disabled={currentIndex === 0}
                variant="outline"
                size="sm"
                className="bg-white text-brand-blue hover:bg-brand-blue-light disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>
              <Button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                variant="outline"
                size="sm"
                className="bg-white text-brand-blue hover:bg-brand-blue-light disabled:opacity-30"
              >
                Próximo
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyUsCarousel;
