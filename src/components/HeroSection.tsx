
import { Euro, CalendarDays, ChartBar, Rocket } from "lucide-react";

const infoCards = [
  {
    icon: Euro,
    title: "Mais de 23 mil milhões disponíveis até 2030",
    description: "Portugal tem ao dispor mais de 23 mil milhões de euros através de fundos comunitários como o PRR e o Portugal 2030. Trata-se de uma oportunidade histórica para investir no crescimento empresarial com apoio financeiro concreto.",
  },
  {
    icon: CalendarDays,
    title: "Candidaturas já em curso e novas oportunidades a abrir",
    description: "Diversos programas estão atualmente ativos e outros serão lançados brevemente. As empresas que atuarem agora terão acesso prioritário ao financiamento disponível. Antecipar é garantir.",
  },
  {
    icon: ChartBar,
    title: "70% das PME não aproveitam os apoios por falta de informação",
    description: "Estudos mostram que a maioria das pequenas e médias empresas não sabe que pode beneficiar destes incentivos. Com apoio técnico adequado, é possível transformar esta realidade em vantagem competitiva.",
  },
  {
    icon: Rocket,
    title: "Financiamento até 85% a fundo perdido",
    description: "Alguns programas cobrem até 85% dos custos de projetos estratégicos, sem obrigatoriedade de reembolso. É uma oportunidade para investir com risco quase nulo e retorno sustentável.",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-business-50 min-h-[calc(100vh-76px)] flex items-center">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="heading-1 text-gray-900 mb-6 font-montserrat">
              Faz crescer o teu negócio com estratégia e financiamento inteligente.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Na Crescentia, ajudamos pequenas e médias empresas portuguesas a aceder a fundos europeus como o Portugal 2030 e o PRR, melhorar a eficiência operacional e crescer com visão. A nossa missão é simples: potenciar o teu negócio com soluções práticas, estratégicas e sustentáveis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Marca a tua consulta gratuita e descobre o que podemos conquistar juntos.
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fadeInUp animate-delay-200">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-start"
                >
                  <Icon className="text-business-600 mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2 font-montserrat">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

