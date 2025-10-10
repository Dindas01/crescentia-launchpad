import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="py-4 bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-brand-blue-light">
      <div className="container-custom flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/65dcde66-bac8-477b-b9f9-f5fc973e7960.png" 
              alt="Crescentia Consultoria Logo" 
              className="h-10 md:h-12 w-auto" 
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-brand-gray-dark hover:text-brand-blue-medium transition-colors font-inter">
            Sobre
          </a>
          <a href="#servicos" className="text-brand-gray-dark hover:text-brand-blue-medium transition-colors font-inter">
            Serviços
          </a>
          <a href="#processo" className="text-brand-gray-dark hover:text-brand-blue-medium transition-colors font-inter">
            Como Funciona
          </a>
          <a href="#contact" className="text-brand-gray-dark hover:text-brand-blue-medium transition-colors font-inter">
            Contactos
          </a>
          <Button
            onClick={scrollToContact}
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue-dark font-bold px-6 py-2 rounded-md transition-colors font-poppins shadow-md"
          >
            Avaliar Projeto
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-gray-dark p-2 rounded-md hover:bg-brand-blue-light transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-blue-light shadow-lg z-40">
          <div className="container-custom py-6 flex flex-col space-y-4 font-inter px-4">
            <a 
              href="#sobre" 
              className="text-brand-gray-dark hover:text-brand-blue-medium font-semibold py-3 transition-colors border-b border-brand-blue-light" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-brand-gray-dark hover:text-brand-blue-medium font-semibold py-3 transition-colors border-b border-brand-blue-light" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#processo" 
              className="text-brand-gray-dark hover:text-brand-blue-medium font-semibold py-3 transition-colors border-b border-brand-blue-light" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#contact" 
              className="text-brand-gray-dark hover:text-brand-blue-medium font-semibold py-3 transition-colors border-b border-brand-blue-light" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contactos
            </a>
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-blue-dark px-6 py-3 rounded-lg font-bold transition-all font-poppins shadow-md"
              >
                Avaliar Projeto
              </Button>
            </div>

            {/* Contacto Rápido */}
            <div className="pt-4 border-t border-brand-blue-light">
              <p className="text-xs text-brand-gray-dark mb-2 font-semibold">Contacto Rápido</p>
              <p className="text-sm text-brand-blue-medium">📞 913 960 220</p>
              <p className="text-sm text-brand-blue-medium">✉️ info@crescentia.pt</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
