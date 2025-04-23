
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ConsultoriaEstrategica = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria Estratégica para PME | Crescentia</title>
        <meta 
          name="description" 
          content="Consultoria estratégica para PME portuguesas. Planos de crescimento, estudos de mercado e estratégias de negócio personalizados para o seu sucesso." 
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-gray-50 to-business-50 py-20">
            <div className="container-custom">
              <h1 className="heading-1 text-gray-900 mb-6 font-montserrat">
                Consultoria Estratégica <span className="font-norwester" style={{ fontFamily: "Norwester, Montserrat, sans-serif" }}>Crescentia</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
                Página em desenvolvimento. Em breve, conteúdo completo sobre consultoria estratégica para empresas.
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

export default ConsultoriaEstrategica;
