import { Euro, Scale, TrendingUp } from "lucide-react";

const impactCards = [
  {
    icon: Euro,
    stat: "24 mil milhões €",
    description: "Disponíveis no Portugal 2030 e PRR",
  },
  {
    icon: TrendingUp,
    stat: "4 Áreas de Especialização",
    description: "Inovação, Digitalização, Sustentabilidade, Internacionalização",
  },
  {
    icon: Scale,
    stat: "Acompanhamento Integral",
    description: "Da análise à aprovação e implementação",
  },
];

const ImpactSection = () => {
  return (
    <section className="section-padding-mobile bg-white">
      <div className="container-custom px-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-8">
          {impactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 md:p-8 rounded-xl border border-brand-blue-light hover:border-brand-blue-medium transition-all hover:shadow-lg ${
                  index % 2 === 0 ? 'bg-brand-blue-light' : 'bg-white'
                }`}
              >
                <Icon className="text-brand-blue-medium mx-auto mb-3 md:mb-4" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-2 font-poppins">
                  {card.stat}
                </h3>
                <p className="text-brand-gray-dark font-inter text-sm md:text-base">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
