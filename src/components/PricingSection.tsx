
import React from "react";
import { Check, Sparkles, BarChart3, Clock, Star } from "lucide-react";
import CallToActionButton from "./CallToActionButton";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const plans = [
  {
    icon: Sparkles,
    title: "Plano Essencial Crescentia",
    price: "500€ – 750€",
    bonus: "7% do total financiado",
    description: "Ideal para empresas que estão a iniciar o processo de captação de fundos. É a forma mais rápida e acessível de submeter uma candidatura com apoio especializado.",
    timeline: "Prazo médio: 2 a 4 semanas",
    features: [
      "Mapa de oportunidades personalizado",
      "Elaboração e submissão da candidatura",
    ],
    ctaText: "Pedir este plano",
    microtext: "Vagas limitadas mensalmente"
  },
  {
    icon: BarChart3,
    title: "Plano Avançado Crescentia",
    price: "1200€ – 2000€",
    bonus: "5% do total financiado",
    description: "Pensado para PME que precisam de um plano sólido e acompanhamento técnico para garantir uma candidatura forte.",
    timeline: "Prazo médio: 4 a 6 semanas",
    features: [
      "Tudo do Plano Essencial",
      "Elaboração de plano de negócio",
      "Apoio técnico durante o processo",
      "3 meses de apoio após a aprovação",
    ],
    highlighted: true,
    ctaText: "Pedir este plano",
    microtext: "Recomendado para empresas em crescimento ativo"
  },
  {
    icon: Star,
    title: "Plano Premium Crescentia",
    price: "Sobre Consulta",
    bonus: "4% do total financiado",
    description: "Para empresas que querem apoio completo e acompanhamento contínuo para maximizar resultados a longo prazo.",
    timeline: "Prazo: definido caso a caso",
    features: [
      "Tudo do Plano Avançado",
      "6 a 12 meses de definição e acompanhamento de KPI's",
      "Reuniões de follow-up estratégicas",
      "Relatórios de execução",
    ],
    ctaText: "Pedir este plano",
    microtext: "Programa personalizado com vagas limitadas"
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4 font-montserrat">
            Pricing
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={idx} 
                className={`overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  plan.highlighted ? 'border-2 border-business-400 bg-business-50' : 'border border-gray-100'
                }`}
              >
                <CardHeader className="p-6 text-center relative">
                  <span className="mb-4 inline-flex items-center justify-center">
                    <Icon className="text-business-600" size={38} />
                  </span>
                  {plan.highlighted && (
                    <Badge className="absolute top-2 right-2 bg-business-200 text-business-800 hover:bg-business-300">
                      Mais completo
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold mb-2 font-montserrat">{plan.title}</h3>
                </CardHeader>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-5 text-center">
                    <p className="text-2xl font-bold text-business-700">{plan.price}</p>
                    <p className="text-gray-600 text-sm">Preço fixo</p>
                    <p className="mt-3 text-lg font-semibold text-business-600">{plan.bonus}</p>
                    <p className="text-gray-600 text-sm">Bónus de sucesso</p>
                  </div>
                  
                  <div className="mt-3 mb-4">
                    <p className="text-gray-700 text-center">{plan.description}</p>
                    <p className="text-gray-600 text-sm text-center mt-2 font-semibold">{plan.timeline}</p>
                  </div>
                  
                  <div className="mt-4 mb-6 flex-grow">
                    <p className="font-semibold mb-3">Inclui:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-business-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-5 flex flex-col items-center">
                    <CallToActionButton href="#contact" className="w-full mb-2">
                      {plan.ctaText}
                    </CallToActionButton>
                    <p className="text-gray-500 text-xs italic">{plan.microtext}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">Quer saber se a sua empresa é elegível para apoio europeu?</h3>
          <CallToActionButton href="#contact" className="inline-block mt-4">
            Peça uma análise gratuita
          </CallToActionButton>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
