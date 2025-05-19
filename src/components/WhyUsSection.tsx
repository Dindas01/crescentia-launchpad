
const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-6 font-norwester">
            <span style={{ fontFamily: "Norwester, Montserrat, sans-serif" }}>
              Crescentia
            </span>{" "}
            – Onde a tua visão encontra direção
          </h2>
          <p className="text-lg text-gray-600 font-montserrat">
            A Crescentia é uma consultora de gestão focada em ajudar PME portuguesas a transformar ambição em crescimento real. Acreditamos que o sucesso exige visão, mas também direção clara, estratégia sólida e apoio certo no momento certo.
            <br />
            <br />
            Aliamos conhecimento técnico, proximidade e soluções práticas para potenciar empresas que procuram crescer com estrutura e aproveitar as oportunidades que os fundos europeus Portugal 2030 e PRR oferecem.
          </p>
        </div>
        
        <div className="mt-12 bg-business-600 text-white p-8 rounded-xl shadow-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Quer saber se a sua empresa é elegível para apoio europeu?</h3>
            <a href="#contact" className="inline-block bg-white text-business-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md mt-4">
              Peça uma análise gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUsSection;
