
import { Euro, ChartBar, Rocket, CalendarDays, Target, PieChart, Building, ArrowUpRight } from "lucide-react";
import CallToActionButton from "./CallToActionButton";

const services = [
  {
    icon: Euro,
    title: "Fundos Europeus (Portugal 2030, PRR)",
    description:
      "Acompanhamento completo na candidatura, gestão e execução de incentivos europeus. Aproveita o apoio certo no momento certo — sem complicações.",
  },
  {
    icon: ChartBar,
    title: "Estratégia e Valorização Empresarial",
    description:
      "Avaliação do desempenho da tua empresa e definição de estratégias de crescimento. Aumenta o valor do teu negócio com uma visão clara e planos bem definidos.",
  },
  {
    icon: CalendarDays,
    title: "Digitalização e Eficiência Operacional",
    description:
      "Transforma os teus processos com tecnologia, automação e boas práticas. Menos desperdício, mais produtividade e melhor controlo.",
  },
  {
    icon: Rocket,
    title: "Gestão de Projetos e Crescimento",
    description:
      "Do planeamento à implementação, garantimos o acompanhamento estratégico de iniciativas que impulsionam o teu negócio.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4 font-montserrat">
            Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Soluções especializadas para pequenas e médias empresas que buscam crescimento sustentável e financiamento inteligente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="service-card group">
                <div className="mb-6 p-3 bg-business-50 rounded-full inline-flex items-center justify-center">
                  <Icon className="text-business-600" size={38} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat group-hover:text-business-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mt-auto pt-2">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-business-600 font-medium hover:text-business-700 transition-colors"
                  >
                    Saber mais <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="cta-highlight text-center mt-20">
          <h3 className="text-2xl font-bold mb-4 font-montserrat text-business-800">Quer saber se a sua empresa é elegível para apoio europeu?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Descubra as oportunidades disponíveis para o seu negócio com uma análise personalizada e sem compromisso.
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
export default ServicesSection;
