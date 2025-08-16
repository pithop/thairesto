import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu as MenuIcon, X, Phone, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../mock/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleOrderClick = () => {
    alert("Redirection vers Uber Eats - Fonctionnalité mockée");
  };

  const handleCallClick = () => {
    alert(`Appel vers ${restaurantInfo.phone} - Fonctionnalité mockée`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white bg-opacity-95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">TP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Le P'tit Thaï 2</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Restaurant Thaïlandais</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
            >
              À Propos
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
            >
              Avis
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Boutons d'action Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="sm"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              Appeler
            </Button>
            <Button 
              onClick={handleOrderClick}
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Commander
            </Button>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                Avis
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
              >
                Contact
              </button>
              
              <div className="px-4 py-3 space-y-3 border-t">
                <Button 
                  onClick={handleCallClick}
                  variant="outline" 
                  size="sm"
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {restaurantInfo.phone}
                </Button>
                <Button 
                  onClick={handleOrderClick}
                  size="sm"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Commander sur Uber Eats
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;