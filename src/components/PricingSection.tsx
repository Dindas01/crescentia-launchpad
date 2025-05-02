
import React from "react";
import { Check, Sparkles, BarChart3, Clock } from "lucide-react";
import CallToActionButton from "./CallToActionButton";
import { Card, CardContent, CardHeader } from "./ui/card";

const plans = [
  {
    icon: Sparkles,
    title: "Plano Essencial Crescentia",
    price: "500€ – 750€",
    bonus: "7% do total financiado",
    features: [
      "Mapa de oportunidades",
      "Elaboração completa da candidatura",
    ],
  },
  {
    icon: BarChart3,
    title: "Plano Avançado Crescentia",
    price: "1200€ – 2000€",
    bonus: "5% do total financiado",
    features: [
      "Candidatura completa",
      "Plano de negócio",
      "Apoio técnico",
      "3 meses de apoio pós-aprovação",
    ],
  },
  {
    icon: Clock,
    title: "Plano Premium Crescentia",
    price: "3000€ – 4500€",
    bonus: "4% do total financiado",
    features: [
      "6-12 meses de definição e acompanhamento de KPI's",
      "Relatórios de execução",
      "Reuniões de follow-up",
      "Monitorização contínua",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4 font-montserrat">
            Planos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <Card key={idx} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="p-6 text-center">
                  <span className="mb-4 inline-flex items-center justify-center">
                    <Icon className="text-business-600" size={38} />
                  </span>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{plan.title}</h3>
                </CardHeader>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-center">
                    <p className="text-2xl font-bold text-business-700">{plan.price}</p>
                    <p className="text-gray-600 text-sm">Preço fixo</p>
                    <p className="mt-2 text-lg font-semibold text-business-600">{plan.bonus}</p>
                    <p className="text-gray-600 text-sm">Bónus de sucesso</p>
                  </div>
                  
                  <div className="mt-4 mb-6 flex-grow">
                    <p className="font-semibold mb-2">Inclui:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-business-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <CallToActionButton className="w-full">
                      Peça este plano
                    </CallToActionButton>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
