
import React from "react";
import CallToActionButton from "./CallToActionButton";

const CTASection = () => {
  return (
    <section className="py-16 bg-business-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-3 mb-6 font-montserrat text-business-800">
            Não sabes por onde começar?
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Peço-te 2 minutos. Diz-me o que queres atingir e eu explico como posso ajudar.
          </p>
          <CallToActionButton 
            href="#contact"
            ariaLabel="Solicitar análise gratuita personalizada"
            className="mx-auto"
          >
            Peça uma análise gratuita
          </CallToActionButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
