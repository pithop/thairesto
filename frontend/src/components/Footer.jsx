import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Heart } from 'lucide-react';
import { restaurantInfo } from '../mock/mockData';

const Footer = () => {
  const handleOrderClick = () => {
    alert("Redirection vers Uber Eats - Fonctionnalité mockée");
  };

  const handleCallClick = () => {
    alert(`Appel vers ${restaurantInfo.phone} - Fonctionnalité mockée`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Informations du restaurant */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Le P'tit Thaï 2</h3>
                <p className="text-gray-300">Restaurant Thaïlandais Authentique</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Découvrez l'authentique cuisine thaïlandaise à Montpellier. 
              Nos plats sont préparés avec des ingrédients frais et des épices 
              importées directement de Thaïlande pour une expérience gustative unique.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleOrderClick}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Commander
              </button>
              <button 
                onClick={handleCallClick}
                className="border border-gray-600 hover:border-orange-500 hover:text-orange-500 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Appeler
              </button>
            </div>
          </div>

          {/* Coordonnées */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{restaurantInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{restaurantInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{restaurantInfo.openingHours}</p>
                  <p className="text-sm text-gray-400">Lundi - Dimanche</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Services</h4>
            <ul className="space-y-3">
              {restaurantInfo.services.map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-2">Gamme de prix</p>
              <p className="text-white font-semibold">{restaurantInfo.priceRange}</p>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Le P'tit Thaï 2. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Site web créé avec <Heart className="h-3 w-3 inline text-red-500" /> pour partager l'authentique cuisine thaïlandaise
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-colors duration-300"
              aria-label="Retour en haut"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;