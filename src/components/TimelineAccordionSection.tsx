import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, FileText, Send, Eye } from "lucide-react";

const timelineSteps = [
  {
    number: "1",
    title: "Diagnóstico Gratuito",
    duration: "30 min",
    icon: CheckCircle,
    items: [
      "Análise de elegibilidade da tua empresa",
      "Identificação de oportunidades de financiamento",
      "Proposta personalizada de valor",
      "Sem compromisso até aqui",
    ],
    highlight: "Consulta inicial sem custos",
  },
  {
    number: "2",
    title: "Preparação Técnica",
    duration: "4-8 semanas",
    icon: FileText,
    items: [
      "Estruturação completa da candidatura",
      "Desenvolvimento técnico e financeiro do projeto",
      "Preparação de toda a documentação necessária",
      "Revisão e otimização antes da submissão",
    ],
    highlight: "Acompanhamento integral",
  },
  {
    number: "3",
    title: "Submissão & Acompanhamento",
    duration: "1-2 semanas + 3-6 meses",
    icon: Send,
    items: [
      "Submissão oficial da candidatura",
      "Gestão de esclarecimentos com as entidades gestoras",
      "Acompanhamento contínuo do processo de análise",
      "Comunicação regular sobre o estado da candidatura",
    ],
    highlight: "Seguimento ativo e contínuo",
  },
  {
    number: "4",
    title: "Aprovação & Implementação",
    duration: "Imediato",
    icon: Eye,
    items: [
      "Apoio na fase de implementação do projeto",
      "Gestão de alterações se necessário",
      "Acompanhamento em auditorias e reporte",
      "Parceria de longo prazo para o crescimento da empresa",
    ],
    highlight: "Suporte completo pós-aprovação",
  },
];

const TimelineAccordionSection = () => {
  return (
    <section id="processo" className="section-padding-mobile bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-3 md:mb-4 font-poppins">
            Como Funciona
          </h2>
          <p className="text-base md:text-lg text-brand-gray-dark max-w-2xl mx-auto font-inter">
            Transparência total em cada etapa
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3 md:space-y-4">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-brand-blue-light rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-4 md:px-6 py-4 md:py-5 hover:no-underline hover:bg-brand-blue-light/50">
                    <div className="flex items-center gap-3 md:gap-4 text-left w-full">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg md:text-xl">
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Icon className="text-brand-blue-medium flex-shrink-0" size={20} />
                          <h3 className="text-base md:text-lg font-bold text-brand-blue font-poppins">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs md:text-sm text-brand-gray-dark font-inter mt-1">
                          {step.duration}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-5">
                    <ul className="space-y-2 mb-3 md:mb-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm md:text-base text-brand-gray-dark font-inter">
                          <span className="text-brand-green mt-1 flex-shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-brand-blue-light rounded-lg p-3 md:p-4">
                      <p className="text-sm md:text-base font-semibold text-brand-blue font-poppins">
                        💰 {step.highlight}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TimelineAccordionSection;
