
import { Euro, CalendarDays, ChartBar, Rocket } from "lucide-react";

const infoCards = [
  {
    icon: Euro,
    title: "💶 +23 mil milhões disponíveis até 2030",
    description: "Portugal tem mais de 23 mil milhões de euros disponíveis através de fundos europeus como o PRR e o Portugal 2030. Vais ficar de fora?",
  },
  {
    icon: CalendarDays,
    title: "📅 Próximas candidaturas já abertas",
    description: "Muitos avisos estão abertos ou prestes a abrir — quem estiver preparado, entra primeiro. Estás pronto para aproveitar?",
  },
  {
    icon: ChartBar,
    title: "📊 70% dos empresários desconhecem os apoios certos",
    description: "Grande parte das PME perde oportunidades por falta de informação ou apoio técnico. Informa-te e toma a dianteira.",
  },
  {
    icon: Rocket,
    title: "🚀 Apoios até 85% a fundo perdido",
    description: "Alguns programas financiam até 85% dos custos dos teus projetos. Isto é investimento sem risco para crescer.",
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
                  <h3 className="font-bold text-xl mb-2">{card.title}</h3>
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
