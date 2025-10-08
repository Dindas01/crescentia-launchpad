
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/65dcde66-bac8-477b-b9f9-f5fc973e7960.png" 
              alt="Crescentia Consultoria Logo" 
              className="h-12 w-auto" 
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-inter">
          <a href="#services" className="text-brand-gray-dark hover:text-brand-blue font-semibold transition-colors">Serviços</a>
          <a href="#how-it-works" className="text-brand-gray-dark hover:text-brand-blue font-semibold transition-colors">Como Funciona</a>
          <a href="#about" className="text-brand-gray-dark hover:text-brand-blue font-semibold transition-colors">Sobre Nós</a>
          <a href="#contact" className="text-brand-gray-dark hover:text-brand-blue font-semibold transition-colors">Contacto</a>
          <a
            href="#contact"
            className="ml-4 bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-lg font-bold transition-all hover:scale-105 font-poppins text-sm shadow-md"
          >
            Avaliar Projeto
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-gray-dark p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-40">
          <div className="container-custom py-6 flex flex-col space-y-5 font-inter">
            <a href="#services" className="text-brand-gray-dark hover:text-brand-blue font-semibold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Serviços
            </a>
            <a href="#how-it-works" className="text-brand-gray-dark hover:text-brand-blue font-semibold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Como Funciona
            </a>
            <a href="#about" className="text-brand-gray-dark hover:text-brand-blue font-semibold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Sobre Nós
            </a>
            <a href="#contact" className="text-brand-gray-dark hover:text-brand-blue font-semibold py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full block text-center bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-lg font-bold transition-all font-poppins shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Avaliar Projeto
              </a>
            </div>
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
