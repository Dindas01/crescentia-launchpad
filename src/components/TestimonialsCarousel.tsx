import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote: "A equipa foi sempre clara e rápida a responder. Explicaram-nos todo o processo e cumpriram os prazos que tinham prometido. Ficámos satisfeitos com o resultado.",
    author: "Carla Moreira",
    role: "Diretora Operacional",
    company: "Indústria Alimentar, Braga",
    rating: 5,
  },
  {
    quote: "Desde a primeira reunião percebemos que eram transparentes. Não houve promessas irrealistas e a comunicação foi sempre direta. Valorizamos essa honestidade.",
    author: "Miguel Ferreira",
    role: "Administrador",
    company: "Tecnologia e Software, Porto",
    rating: 5,
  },
  {
    quote: "Ajudaram-nos a estruturar melhor o projeto antes de submeter. O acompanhamento foi próximo e profissional. Sentimos que estavam investidos no nosso sucesso.",
    author: "Rui Tavares",
    role: "Diretor Financeiro",
    company: "Exportação, Aveiro",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding-mobile bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-3 md:mb-4 font-poppins">
            O que dizem os nossos clientes
          </h2>
          <p className="text-base md:text-lg text-brand-gray-dark max-w-2xl mx-auto font-inter">
            Resultados reais de empresas que confiaram na Crescentia
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop: Show all 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-brand-blue-light p-6 lg:p-8 rounded-xl shadow-lg border border-brand-blue-light hover:shadow-xl transition-all"
              >
                <div className="text-brand-blue-medium mb-4">
                  <Quote size={36} />
                </div>
                <p className="text-brand-gray-dark mb-4 font-inter leading-relaxed text-sm lg:text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-gold text-lg">⭐</span>
                  ))}
                </div>
                <div className="border-t border-brand-blue-light pt-4">
                  <p className="font-bold text-brand-blue font-poppins text-sm lg:text-base">
                    — {testimonial.author}
                  </p>
                  <p className="text-brand-gray-dark text-xs lg:text-sm font-inter">
                    {testimonial.role}
                  </p>
                  <p className="text-brand-gray-dark text-xs lg:text-sm font-inter">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="bg-brand-blue-light p-6 rounded-xl shadow-lg border border-brand-blue-light min-h-[400px] flex flex-col">
              <div className="text-brand-blue-medium mb-4">
                <Quote size={36} />
              </div>
              <p className="text-brand-gray-dark mb-4 font-inter leading-relaxed flex-1">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-brand-gold text-lg">⭐</span>
                ))}
              </div>
              <div className="border-t border-brand-blue-light pt-4">
                <p className="font-bold text-brand-blue font-poppins">
                  — {testimonials[currentIndex].author}
                </p>
                <p className="text-brand-gray-dark text-sm font-inter">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-brand-gray-dark text-sm font-inter">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                onClick={prev}
                variant="outline"
                size="icon"
                className="bg-white text-brand-blue hover:bg-brand-blue-light border-brand-blue-light"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index ? 'bg-brand-blue w-6' : 'bg-brand-blue-light'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={next}
                variant="outline"
                size="icon"
                className="bg-white text-brand-blue hover:bg-brand-blue-light border-brand-blue-light"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
