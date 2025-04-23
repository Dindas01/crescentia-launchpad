
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ApoiosPortugal2030 = () => {
  return (
    <>
      <Helmet>
        <title>Apoios Portugal 2030 | Financiamento para PME | Crescentia</title>
        <meta 
          name="description" 
          content="Consultoria especializada em fundos Portugal 2030 para PME. Conheça os apoios disponíveis e maximize o potencial do seu negócio com a Crescentia." 
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-gray-50 to-business-50 py-20">
            <div className="container-custom">
              <h1 className="heading-1 text-gray-900 mb-6 font-montserrat">
                Apoios <span className="font-norwester" style={{ fontFamily: "Norwester, Montserrat, sans-serif" }}>Portugal 2030</span> para PME
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
                Página em desenvolvimento. Em breve, toda a informação sobre os apoios do Portugal 2030 para empresas.
              </p>
            </div>
          </section>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ApoiosPortugal2030;
