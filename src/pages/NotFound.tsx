
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set the correct HTTP status code for 404 pages
    document.title = "Página Não Encontrada | Crescentia Consultoria";
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Página Não Encontrada | Crescentia Consultoria"
        description="A página que procura não foi encontrada. Volte para a página inicial da Crescentia Consultoria."
        canonical={location.pathname}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
          <div className="container-custom text-center">
            <h1 className="heading-1 text-gray-900 mb-6 font-montserrat">404</h1>
            <h2 className="heading-2 text-gray-800 mb-4">Página não encontrada</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              Desculpe, a página que procura não existe ou foi movida.
            </p>
            <a 
              href="/" 
              className="bg-business-200 hover:bg-business-300 text-gray-900 text-base font-semibold py-3 px-8 rounded-lg font-montserrat transition-colors duration-200 shadow-md"
            >
              Voltar para a página inicial
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
