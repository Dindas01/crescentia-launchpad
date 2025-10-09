import { FileCheck, Target, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const pricingColumns = [
  {
    icon: FileCheck,
    title: "Investment Fee Inicial",
    points: [
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
    points: [
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
    points: [
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
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-green/5 to-transparent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-4 font-poppins">
            Modelo Justo. Risco Partilhado. Transparência Total.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
            Investimos no teu projeto desde o início, mas a maior parte só cobramos quando entregamos resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingColumns.map((column, index) => {
            const Icon = column.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="bg-brand-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-brand-blue" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-gray-dark mb-6 text-center font-poppins">
                  {column.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {column.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 font-inter">
                      <span className="text-brand-green mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-blue font-semibold text-center font-inter italic">
                  {column.highlight}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-12 py-6 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-poppins"
            asChild
          >
            <a href="#contact">Saber Quanto Custa o Meu Projeto</a>
          </Button>
          <p className="mt-4 text-gray-600 font-inter flex items-center justify-center gap-2">
            <span className="text-2xl">💡</span>
            <span>Valores específicos apresentados após diagnóstico gratuito de 30 minutos</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingModelSection;
