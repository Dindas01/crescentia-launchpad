import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CallToActionButton from "./CallToActionButton";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="py-4 bg-business-50/60 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-business-100 rounded-b-xl">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/3f87a249-bb57-48c0-97e1-854d2ec544da.png" alt="Stellar Growth Logo" className="h-10 w-auto" />
          <a
            href="/"
            className="text-2xl font-bold text-business-700 font-norwester tracking-wide"
            style={{
              fontFamily: "Norwester, Montserrat, sans-serif",
              letterSpacing: "0.02em"
            }}
          >
            Crescentia Consultoria
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-montserrat">
          <a href="#services" className="text-business-800 hover:text-business-600 font-medium transition-colors">Serviços</a>
          <a href="#why-us" className="text-business-800 hover:text-business-600 font-medium transition-colors">Sobre Nós</a>
          <a href="#contact" className="text-business-800 hover:text-business-600 font-medium transition-colors">Contacto</a>
          <CallToActionButton
            href="#contact"
            ariaLabel="Solicitar análise gratuita de oportunidades de financiamento e crescimento"
            className="ml-2"
          >
            Análise gratuita
          </CallToActionButton>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-business-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-business-50 border-b border-business-100 shadow-lg z-40">
          <div className="container-custom py-4 flex flex-col space-y-4 font-montserrat">
            <a href="#services" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Serviços
            </a>
            <a href="#why-us" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Sobre Nós
            </a>
            <a href="#contact" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </a>
            <CallToActionButton
              href="#contact"
              ariaLabel="Solicitar análise gratuita de oportunidades de financiamento e crescimento"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Análise gratuita
            </CallToActionButton>
          </div>
        </div>
      )}
      {/* Carrega Norwester só aqui para garantir que não afeta o resto da app */}
      <style>{`
        @font-face {
          font-family: 'Norwester';
          src: url('/fonts/Norwester.otf') format('opentype');
          font-display: swap;
        }
      `}</style>
    </header>
  );
};
export default Header;
