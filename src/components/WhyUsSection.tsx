import { CheckCircle } from "lucide-react";

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
    description: "Se acharmos que o projeto não é viável, dizemos. Não desperdiçamos o teu tempo.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-4 font-poppins">
            Porque a Crescentia?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="text-brand-green w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-gray-dark mb-2 font-poppins">
                  {reason.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
