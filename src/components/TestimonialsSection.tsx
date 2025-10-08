import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Conseguimos aprovar 450 mil euros para modernização. Processo transparente do início ao fim.",
    author: "CEO, Indústria Metalomecânica",
    location: "Porto",
  },
  {
    quote: "A Crescentia não só tratou da candidatura como nos ajudou a estruturar todo o projeto. Profissionalismo exemplar.",
    author: "Diretora de Inovação, Setor Tecnológico",
    location: "Lisboa",
  },
  {
    quote: "Honestidade e competência. Recebemos aconselhamento estratégico valioso que foi além da simples candidatura.",
    author: "Fundador, Empresa de Exportação",
    location: "Braga",
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Quote className="text-brand-orange mb-4" size={40} />
              <p className="text-gray-700 mb-6 font-inter leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-brand-gray-dark font-poppins">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500 font-inter">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
