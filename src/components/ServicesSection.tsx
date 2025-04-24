
import { Euro, ChartBar, Rocket, CalendarDays } from "lucide-react";

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
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                <span className="mb-4">
                  <Icon className="text-business-600" size={38} />
                </span>
                <h3 className="text-xl font-bold mb-3 font-montserrat">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
