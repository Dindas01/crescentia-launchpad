import { Lightbulb, Laptop, Leaf, Globe } from "lucide-react";
import { Button } from "./ui/button";

const expertiseAreas = [
  {
    icon: Lightbulb,
    title: "Inovação e I&D",
    description: "SIFIDE II, Vales Inovação e projetos de investigação e desenvolvimento tecnológico.",
  },
  {
    icon: Laptop,
    title: "Digitalização",
    description: "Transformação Digital, IA, automação e Portugal Digital para modernizar processos.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Fundo Ambiental, eficiência energética e projetos alinhados com metas ESG.",
  },
  {
    icon: Globe,
    title: "Internacionalização",
    description: "Portugal Global, apoio à exportação e expansão para novos mercados internacionais.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-brand-gray-light" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-4 font-poppins">
            Áreas de Especialização
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Apoio estratégico completo nas áreas que mais impulsionam o crescimento empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="bg-brand-blue/5 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
                  <Icon className="text-brand-blue" size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-gray-dark mb-3 font-poppins">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                  {area.description}
                </p>
                <Button
                  variant="link"
                  className="text-brand-blue hover:text-brand-blue/80 p-0 h-auto font-semibold font-inter"
                >
                  Saber mais +
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
