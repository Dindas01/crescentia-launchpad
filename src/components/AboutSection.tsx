import { Target, Users, TrendingUp, Award, Shield, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Transparência",
    description: "Não há letras pequenas. Sabes sempre custos, estado do projeto, próximos passos. Se algo corre mal, dizemos porquê.",
  },
  {
    icon: Shield,
    title: "Risco Partilhado",
    description: "Investment fee valida seriedade. Success fee alinha incentivos. Se não entregamos, não ganhamos a parte grande.",
  },
  {
    icon: Users,
    title: "Parceria Real",
    description: "Não desaparecemos após submissão. Estamos contigo desde a primeira reunião até à execução do projeto aprovado.",
  },
  {
    icon: CheckCircle,
    title: "Integridade",
    description: "Se acharmos que o teu projeto não é elegível ou tem poucas chances, dizemos. Não desperdiçamos o teu dinheiro nem o nosso tempo.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Resultados",
    description: "Não fazemos 'candidaturas bonitas'. Fazemos candidaturas que APROVAM. Cada detalhe é pensado para maximizar probabilidade de sucesso.",
  },
  {
    icon: Award,
    title: "Educação",
    description: "Explicamos o processo, não o tornamos misterioso. Queremos que percebas o que estamos a fazer e porquê.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-dark mb-6 font-poppins">
            Quem Somos e Porquê Existimos
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 font-inter leading-relaxed">
            <p>
              Num contexto de transformação económica e tecnológica, a <strong>Crescentia Consultoria</strong> surge como um parceiro estratégico para empresas que ambicionam crescer com base em inovação e visão de futuro.
            </p>
            <p>
              Acreditamos que cada projeto pode ser mais do que um investimento — pode ser um <strong>legado que gera valor sustentável</strong> e impacto real.
            </p>
            <p>
              Com mais de <strong className="text-brand-blue">24 mil milhões de euros</strong> em incentivos ativos no Portugal 2030 e PRR, vimos demasiadas empresas deixarem oportunidades na mesa por acharem o processo "demasiado complicado" ou por caírem em consultoras que prometem muito e entregam pouco.
            </p>
            <p>
              Decidimos fazer diferente: combinamos <strong>experiência técnica</strong> com <strong>transparência absoluta</strong> e um modelo de honorários justo, onde ambos ganhamos quando há resultados.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-brand-blue mb-12 font-poppins">
            Os Nossos Valores
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
                    <p className="text-gray-600 font-inter leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
