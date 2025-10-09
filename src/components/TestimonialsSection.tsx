import { Quote } from "lucide-react";

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
