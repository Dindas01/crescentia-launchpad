
import { Target, Users, Building, Award } from "lucide-react";
import CallToActionButton from "./CallToActionButton";

const values = [
  {
    icon: Target,
    title: "Especialização",
    description: "Conhecimento técnico profundo sobre fundos europeus e programas de incentivo ao desenvolvimento empresarial."
  },
  {
    icon: Users,
    title: "Proximidade",
    description: "Acompanhamento próximo e personalizado durante todo o processo de candidatura e implementação."
  },
  {
    icon: Building,
    title: "Experiência",
    description: "Equipa com experiência comprovada em candidaturas bem-sucedidas e projetos de transformação empresarial."
  },
  {
    icon: Award,
    title: "Compromisso",
    description: "Foco total nos resultados e no crescimento sustentável dos nossos clientes."
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4 font-montserrat">
            Sobre Nós
          </h2>
          <p className="text-lg text-gray-600 italic font-medium mb-6">
            "Impulsionar o crescimento das PME portuguesas através de estratégia e acesso eficiente a fundos públicos."
          </p>
          <p className="text-gray-600">
            Na Crescentia, compreendemos os desafios únicos que as pequenas e médias empresas enfrentam no acesso a financiamento e na implementação de estratégias de crescimento. A nossa abordagem combina conhecimento técnico, experiência prática e uma visão clara para ajudar o seu negócio a prosperar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="value-card">
                <div className="mb-5 p-3 bg-business-50 rounded-full inline-flex items-center justify-center">
                  <Icon className="text-business-600" size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-montserrat text-business-700">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-6 font-montserrat text-business-700">
              Diogo Costa
            </h3>
            <p className="text-business-600 font-medium mb-4">Fundador & Consultor Principal</p>
            <p className="text-gray-600 mb-6">
              Com formação em Gestão e especialização em fundos europeus, Diogo tem ajudado empresas portuguesas a aceder e implementar com sucesso projetos financiados por programas como Portugal 2030 e PRR.
            </p>
            <p className="text-gray-600">
              "Acredito que muitas PME portuguesas têm potencial inexplorado. O meu objetivo é fornecer-lhes as ferramentas e o conhecimento necessários para desbloquear esse potencial através de financiamento estratégico e bem direcionado."
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 font-montserrat text-business-800">
              A Nossa Abordagem
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-business-100 text-business-700 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Análise detalhada do negócio e identificação de oportunidades</span>
              </li>
              <li className="flex items-start">
                <span className="bg-business-100 text-business-700 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Planeamento estratégico alinhado com os objetivos de negócio</span>
              </li>
              <li className="flex items-start">
                <span className="bg-business-100 text-business-700 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Preparação e submissão de candidaturas de alta qualidade</span>
              </li>
              <li className="flex items-start">
                <span className="bg-business-100 text-business-700 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Gestão e implementação eficiente do projeto</span>
              </li>
              <li className="flex items-start">
                <span className="bg-business-100 text-business-700 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Medição de resultados e otimização contínua</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="cta-highlight text-center mt-20">
          <h3 className="text-2xl font-bold mb-4 font-montserrat text-business-800">
            Pronto para impulsionar o crescimento do seu negócio?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Conheça as oportunidades disponíveis com uma análise personalizada e sem compromisso.
          </p>
          <CallToActionButton
            href="#contact"
            ariaLabel="Solicitar análise gratuita de oportunidades de financiamento"
            className="mx-auto"
          >
            Peça uma análise gratuita
          </CallToActionButton>
        </div>
      </div>
    </section>
  );
};
export default WhyUsSection;
