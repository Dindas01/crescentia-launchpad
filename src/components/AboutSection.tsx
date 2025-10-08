import { Target, Users, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Zero risco: honorários apenas após aprovação do financiamento",
  },
  {
    icon: Users,
    title: "Parceria Estratégica",
    description: "Acompanhamento integral do diagnóstico à execução do projeto",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description: "Soluções práticas e estratégicas para impacto real e duradouro",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Especialistas em Portugal 2030, PRR e fundos europeus",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-6 font-poppins">
            Sobre a Crescentia
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 font-inter leading-relaxed">
            <p>
              Num contexto de transformação económica e tecnológica, a <strong>Crescentia Consultoria</strong> surge como parceiro estratégico para empresas que ambicionam crescer com base em inovação e visão de futuro.
            </p>
            <p>
              Acreditamos que cada projeto pode ser mais do que um investimento — pode ser um <strong>legado que gera valor sustentável</strong> e impacto real.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-brand-blue mb-12 font-poppins">
            Porque Escolher a Crescentia?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-brand-gray-light rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-brand-blue/10 w-14 h-14 rounded-lg flex items-center justify-center">
                      <Icon className="text-brand-blue" size={28} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-gray-dark mb-2 font-poppins">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 font-inter">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-blue/5 to-brand-green/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-gray-dark mb-4 font-poppins">
            Modelo de Honorários Transparente
          </h3>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 font-inter">
            <p className="text-lg">
              <strong>Honorário fixo</strong> a partir de <strong className="text-brand-blue">1.250€ + IVA</strong>
            </p>
            <p className="text-lg">
              <strong>Comissão de sucesso</strong> mínima de <strong className="text-brand-green">4% + IVA</strong> sobre o valor aprovado
            </p>
            <p className="text-base text-gray-600 mt-6">
              Transparência total e acompanhamento integral em todas as fases do projeto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
