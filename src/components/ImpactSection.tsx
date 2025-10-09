import { Euro, Scale, TrendingUp } from "lucide-react";

const impactCards = [
  {
    icon: Euro,
    stat: "24 mil milhões €",
    description: "Disponíveis em incentivos PT 2030",
  },
  {
    icon: Scale,
    stat: "Risco Partilhado",
    description: "Investment fee + success fee após aprovação",
  },
  {
    icon: TrendingUp,
    stat: "Acompanhamento Integral",
    description: "Do diagnóstico à execução",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {impactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl border-2 border-brand-blue/10 hover:border-brand-blue/30 transition-all hover:shadow-lg"
              >
                <Icon className="text-brand-blue mx-auto mb-4" size={48} />
                <h3 className="text-3xl font-bold text-brand-blue mb-2 font-poppins">
                  {card.stat}
                </h3>
                <p className="text-brand-gray-dark font-inter">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
