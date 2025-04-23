
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const DigitalizacaoPME = () => {
  return (
    <>
      <Helmet>
        <title>Digitalização PME | Transformação Digital | Crescentia</title>
        <meta 
          name="description" 
          content="Consultoria em digitalização empresarial para PME portuguesas. Aumente a eficiência, reduza custos e transforme a sua empresa com apoios para transformação digital." 
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-gray-50 to-business-50 py-20">
            <div className="container-custom">
              <h1 className="heading-1 text-gray-900 mb-6 font-montserrat">
                Digitalização PME com a <span className="font-norwester" style={{ fontFamily: "Norwester, Montserrat, sans-serif" }}>Crescentia</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
                Página em desenvolvimento. Em breve, todo o conteúdo sobre digitalização e eficiência operacional para PME.
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

export default DigitalizacaoPME;
