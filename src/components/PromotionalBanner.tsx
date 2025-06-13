
import React from "react";
import { Check, Target } from "lucide-react";
import CallToActionButton from "./CallToActionButton";

const PromotionalBanner = () => {
  return (
    <section className="bg-business-400 py-8 md:py-10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Target className="text-business-600 w-12 h-12" strokeWidth={2} />
          </div>
          
          <h2 className="text-business-700 text-2xl md:text-3xl font-bold mb-4 font-norwester" style={{
            fontFamily: "'Norwester', Montserrat, sans-serif",
          }}>
            Transforma o teu projeto num caso de sucesso com apoio especializado.
          </h2>
          
          <p className="text-business-700 text-lg mb-6 max-w-3xl mx-auto">
            Candidaturas aos fundos Portugal 2030 e PRR com taxa de sucesso comprovada.
            Análise estratégica, redação técnica e submissão com acompanhamento integral — tratamos de tudo por ti.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            <div className="flex items-center text-business-700 font-medium">
              <Check className="mr-2 text-business-600" size={20} />
              <span>Análise de elegibilidade rigorosa</span>
            </div>
            <div className="flex items-center text-business-700 font-medium">
              <Check className="mr-2 text-business-600" size={20} />
              <span>Redação técnica por consultores especializados</span>
            </div>
            <div className="flex items-center text-business-700 font-medium">
              <Check className="mr-2 text-business-600" size={20} />
              <span>Acompanhamento completo até à aprovação</span>
            </div>
          </div>
          
          <div className="mt-6">
            <CallToActionButton 
              href="#contact" 
              size="large" 
              ariaLabel="Agendar diagnóstico gratuito para candidatura a fundos europeus"
            >
              Agendar Diagnóstico Gratuito
            </CallToActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
