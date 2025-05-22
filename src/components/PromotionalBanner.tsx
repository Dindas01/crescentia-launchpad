
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
            Candidatura gratuita para os primeiros 3 clientes
          </h2>
          
          <p className="text-business-700 text-lg mb-6 max-w-2xl mx-auto">
            Estamos a oferecer a elaboração completa da candidatura PRR/Portugal 2030 às primeiras PME que se qualifiquem.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            <div className="flex items-center text-business-700 font-medium">
              <Check className="mr-2 text-business-600" size={20} />
              <span>Mapeamento de oportunidades</span>
            </div>
            <div className="flex items-center text-business-700 font-medium">
              <Check className="mr-2 text-business-600" size={20} />
              <span>Redação técnica da candidatura</span>
            </div>
            <div className="flex items-center text-business-700 font-medium">
              <Check className="mr-2 text-business-600" size={20} />
              <span>Submissão com acompanhamento</span>
            </div>
          </div>
          
          <p className="text-business-700 font-semibold mb-6">
            📌 Vagas limitadas. Oferta válida para as 3 primeiras empresas que solicitem a análise gratuita.
          </p>
          
          <div className="mt-6">
            <CallToActionButton 
              href="#contact" 
              size="large" 
              ariaLabel="Solicitar análise gratuita para candidatura a fundos europeus"
            >
              Pedir análise gratuita
            </CallToActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
