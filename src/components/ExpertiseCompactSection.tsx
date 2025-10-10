import { Lightbulb, Monitor, Leaf, Globe } from "lucide-react";

const expertiseAreas = [
  {
    icon: Lightbulb,
    title: "Inovação",
    subtitle: "+ I&D",
  },
  {
    icon: Monitor,
    title: "Digitalização",
    subtitle: "Indústria 4.0",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    subtitle: "ESG",
  },
  {
    icon: Globe,
    title: "Internacionalização",
    subtitle: "Exportação",
  },
];

const ExpertiseCompactSection = () => {
  return (
    <section className="section-padding-mobile bg-brand-blue-light">
      <div className="container-custom px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-3 font-poppins">
            Áreas de Especialização
          </h2>
          <p className="text-brand-gray-dark font-inter max-w-2xl mx-auto">
            Expertise em 4 pilares estratégicos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 text-center border border-brand-blue-light hover:border-brand-blue-medium hover:shadow-lg transition-all cursor-pointer"
              >
                <Icon className="text-brand-blue-medium mx-auto mb-2 md:mb-3" size={32} />
                <h3 className="text-base md:text-lg font-bold text-brand-blue font-poppins mb-1">
                  {area.title}
                </h3>
                <p className="text-xs md:text-sm text-brand-gray-dark font-inter">
                  {area.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCompactSection;
