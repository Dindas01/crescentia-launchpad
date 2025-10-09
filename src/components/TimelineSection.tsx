import { MessageSquare, FileText, CheckCircle2, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Diagnóstico Gratuito",
    description: "30-45 minutos para avaliar elegibilidade, identificar oportunidades e apresentar proposta. Sem compromisso até aqui.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Preparação Técnica",
    description: "Investment fee para iniciar. Elaboração completa da candidatura, gestão de documentação e validações técnicas.",
  },
  {
    icon: CheckCircle2,
    number: "3",
    title: "Submissão & Acompanhamento",
    description: "Submissão oficial, seguimento do processo, resposta a esclarecimentos. Estamos contigo até ao fim.",
  },
  {
    icon: Trophy,
    number: "4",
    title: "Aprovação & Success Fee",
    description: "Success fee calculado sobre valor aprovado. Apoio na execução incluído. Celebramos juntos!",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-4 font-poppins">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Um processo simples e transparente, do diagnóstico à aprovação
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="absolute top-24 left-0 right-0 h-1 bg-brand-blue/20" />
            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center relative">
                    <div className="bg-white w-20 h-20 rounded-full border-4 border-brand-blue flex items-center justify-center mx-auto mb-6 relative z-10">
                      <Icon className="text-brand-blue" size={32} />
                    </div>
                    <div className="bg-brand-blue text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-poppins">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-brand-gray-dark mb-2 font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-inter">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold font-poppins">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-1 h-full bg-brand-blue/20 my-2 flex-grow" />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <Icon className="text-brand-blue mb-3" size={28} />
                      <h3 className="text-lg font-bold text-brand-gray-dark mb-2 font-poppins">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 font-inter">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
