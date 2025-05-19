
import { Euro, CalendarDays, ChartBar, Rocket } from "lucide-react";

const infoCards = [
  {
    icon: Euro,
    title: "Mais de 23 mil milhões disponíveis até 2030",
    description: "Financiamento europeu para modernizar, inovar e crescer. Está ao teu alcance.",
  },
  {
    icon: CalendarDays,
    title: "Candidaturas já em curso e novas oportunidades a abrir",
    description: "Alguns programas já abriram. Agir agora é garantir acesso.",
  },
  {
    icon: ChartBar,
    title: "70% das PME não aproveitam os apoios por falta de informação",
    description: "A maioria perde oportunidades. Informa-te e destaca-te.",
  },
  {
    icon: Rocket,
    title: "Financiamento até 85% a fundo perdido",
    description: "Investimentos com apoio direto. O risco é mínimo, o retorno é real.",
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
              <strong>Apoio especializado para aceder a fundos europeus e impulsionar o crescimento da sua PME.</strong>
              <br /><br />
              Na Crescentia, ajudamos pequenas e médias empresas portuguesas a aceder a fundos europeus como o Portugal 2030 e o PRR, melhorar a eficiência operacional e crescer com visão. A nossa missão é simples: potenciar o teu negócio com soluções práticas, estratégicas e sustentáveis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-business-600 hover:bg-business-700 text-white text-base font-semibold py-3 px-8 rounded-lg font-montserrat transition-colors duration-200 shadow-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Peça uma análise gratuita
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fadeInUp animate-delay-200">
            {infoCards.map((card) => {
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
