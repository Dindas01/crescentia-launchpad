import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Conseguimos aprovar 180 mil euros para digitalização. O investment fee inicial mostrou seriedade deles, e o success fee após aprovação foi justo. Valeu cada cêntimo.",
    author: "João Silva",
    role: "CEO",
    company: "Indústria Metalomecânica, Porto",
    rating: 5,
  },
  {
    quote: "Não foi grátis, mas foi honesto. Pagámos um valor inicial para começar, e depois só a percentagem quando aprovaram. Gostei da transparência desde o início.",
    author: "Maria Santos",
    role: "Directora Financeira",
    company: "Tecnologia, Braga",
    rating: 5,
  },
  {
    quote: "Comparei com outras consultoras. Algumas prometiam 'só pagar após aprovação' mas escondiam taxas. A Crescentia foi clara desde a primeira reunião.",
    author: "Pedro Costa",
    role: "Fundador",
    company: "Startup Inovação, Lisboa",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue/90">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            O que dizem os nossos clientes
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-inter">
            Resultados reais de empresas que confiaram na Crescentia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-brand-blue mb-4">
                <Quote size={40} />
              </div>
              <p className="text-gray-700 mb-4 font-inter leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-orange text-xl">⭐</span>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-brand-gray-dark font-poppins">
                  — {testimonial.author}, {testimonial.role}
                </p>
                <p className="text-gray-600 text-sm font-inter">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
