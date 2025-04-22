import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="py-4 bg-business-50/60 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-business-100 rounded-b-xl">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/3f87a249-bb57-48c0-97e1-854d2ec544da.png" alt="Stellar Growth Logo" className="h-10 w-auto" />
          <a href="/" className="text-2xl font-bold text-business-700">Crescentia Consultoria</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-business-800 hover:text-business-600 font-medium transition-colors">Serviços</a>
          <a href="#why-us" className="text-business-800 hover:text-business-600 font-medium transition-colors">Porquê Nós</a>
          <a href="#contact" className="text-business-800 hover:text-business-600 font-medium transition-colors">Contacto</a>
          <a href="#contact" className="btn-primary">Get Started</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-business-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-business-50 border-b border-business-100 shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#services" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#why-us" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Why Us
            </a>
            <a href="#contact" className="text-business-800 hover:text-business-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <a href="#contact" className="btn-primary inline-block text-center" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>}
    </header>;
};
export default Header;