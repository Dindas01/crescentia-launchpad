import { FileCheck, Target, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const pricingCards = [
  {
    icon: FileCheck,
    title: "Investment Fee Inicial",
    items: [
      "Pago antes de iniciarmos o trabalho técnico",
      "Cobre diagnóstico profundo e preparação completa",
      "Validação de seriedade do teu projeto",
      "Valor adaptado à complexidade",
    ],
    highlight: "Garante que ambos estamos comprometidos.",
  },
  {
    icon: Target,
    title: "Success Fee Após Aprovação",
    items: [
      "Cobrado APENAS quando o Estado aprovar",
      "Percentagem do valor concedido",
      "Escalonado: projeto maior = % menor",
      "Se não aprovar, não pagas esta parte",
    ],
    highlight: "A maior fatia depende do nosso sucesso.",
  },
  {
    icon: CheckCircle,
    title: "O Que Inclui",
    items: [
      "Preparação técnica completa",
      "Gestão de documentação",
      "Acompanhamento de avaliação",
      "Resposta a esclarecimentos",
      "Apoio pós-aprovação",
    ],
    highlight: "Zero custos escondidos.",
  },
];

const PricingModelSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding-mobile bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-3 md:mb-4 font-poppins">
            Modelo Justo. Risco Partilhado.
          </h2>
          <p className="text-base md:text-lg text-brand-gray-dark max-w-2xl mx-auto font-inter">
            A maior parte só cobramos quando há resultados
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-8 md:mb-12">
          {pricingCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-brand-blue-light hover:border-brand-blue-medium transition-all hover:shadow-xl"
              >
                <div className="text-brand-blue-medium mb-3 md:mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-3 md:mb-4 font-poppins">
                  {card.title}
                </h3>
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm md:text-base text-brand-gray-dark font-inter">
                      <span className="text-brand-green mt-1 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-blue-light rounded-lg p-3 md:p-4">
                  <p className="text-sm md:text-base text-brand-blue font-semibold font-poppins">{card.highlight}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue-dark px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-poppins w-full sm:w-auto"
          >
            Saber Quanto Custa o Meu Projeto
          </Button>
          <p className="mt-4 md:mt-6 text-brand-gray-dark text-xs md:text-sm font-inter px-4">
            💡 Valores específicos após diagnóstico gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingModelSection;
