
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
          <a href="#why-us" className="text-business-800 hover:text-business-600 font-medium transition-colors">Nós</a>
          <a href="#contact" className="text-business-800 hover:text-business-600 font-medium transition-colors">Contacto</a>
          <a
            href="#contact"
            aria-label="Solicitar análise gratuita de oportunidades de financiamento e crescimento"
            className="
              bg-business-200
              hover:bg-business-300
              text-gray-900
              rounded-lg
              font-montserrat
              font-semibold
              text-base
              py-3
              px-8
              transition-colors
              duration-200
              shadow-md
              whitespace-normal
              leading-snug
              min-h-[52px]
              flex items-center
              justify-center
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: 1.2,
              wordBreak: "break-word",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            Análise gratuita
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-business-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-business-50 border-b border-business-100 shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4 font-montserrat">
            <a href="#services" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#why-us" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Why Us
            </a>
            <a href="#contact" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <a
              href="#contact"
              aria-label="Solicitar análise gratuita de oportunidades de financiamento e crescimento"
              className="
                bg-business-200
                hover:bg-business-300
                text-gray-900
                rounded-lg
                font-montserrat
                font-semibold
                text-base
                py-3
                px-8
                transition-colors
                duration-200
                shadow-md
                whitespace-normal
                leading-snug
                min-h-[52px]
                flex items-center
                justify-center
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: 1.2,
                wordBreak: "break-word",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Análise gratuita
            </a>
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
