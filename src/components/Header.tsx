
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-business-700">Stellar Growth</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-business-600 font-medium transition-colors">Services</a>
          <a href="#why-us" className="text-gray-600 hover:text-business-600 font-medium transition-colors">Why Us</a>
          <a href="#contact" className="text-gray-600 hover:text-business-600 font-medium transition-colors">Contact</a>
          <a href="#contact" className="btn-primary">Get Started</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-600 hover:text-business-600 font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              className="text-gray-600 hover:text-business-600 font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-business-600 font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
