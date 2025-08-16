import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../mock/mockData';

const Contact = () => {
  const handleDirectionsClick = () => {
    // Mock action pour Google Maps
    alert("Redirection vers Google Maps - Fonctionnalité mockée");
  };

  const handleCallClick = () => {
    // Mock action pour appel téléphonique
    alert(`Appel vers ${restaurantInfo.phone} - Fonctionnalité mockée`);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nous Trouver
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Venez découvrir l'authentique cuisine thaïlandaise dans notre restaurant à Montpellier
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="p-8 border-none shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Adresse</h3>
                  <p className="text-gray-600 leading-relaxed">{restaurantInfo.address}</p>
                  <Button 
                    onClick={handleDirectionsClick}
                    variant="outline" 
                    size="sm" 
                    className="mt-3 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Itinéraire
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-6">
                <Phone className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Téléphone</h3>
                  <p className="text-gray-600 mb-2">{restaurantInfo.phone}</p>
                  <Button 
                    onClick={handleCallClick}
                    variant="outline" 
                    size="sm"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Appeler
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-6">
                <Clock className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Lundi - Dimanche</span>
                      <span className="font-medium">11h30 - 14h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span></span>
                      <span className="font-medium">18h30 - 22h30</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Services */}
            <Card className="p-8 border-none shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Nos Services</h3>
              <div className="grid grid-cols-1 gap-3">
                {restaurantInfo.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="h-3 w-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Gamme de prix :</strong> {restaurantInfo.priceRange}
                </p>
                <Button 
                  onClick={() => alert("Redirection vers Uber Eats - Fonctionnalité mockée")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Commander sur Uber Eats
                </Button>
              </div>
            </Card>
          </div>

          {/* Carte Google Maps simulée */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-none shadow-lg">
              <div 
                className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative cursor-pointer hover:from-gray-300 hover:to-gray-400 transition-colors duration-300"
                onClick={handleDirectionsClick}
              >
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">Le P'tit Thaï 2</h4>
                  <p className="text-gray-600 text-sm mb-4">139 Av. du Vert-Bois, Montpellier</p>
                  <Button 
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Voir sur Google Maps
                  </Button>
                </div>
                
                {/* Indicateur de position simulé */}
                <div className="absolute top-4 right-4">
                  <div className="h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </Card>

            {/* Informations complémentaires */}
            <Card className="p-6 border-none shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
              <h4 className="font-semibold text-lg text-gray-800 mb-4">Informations pratiques</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <span>Parking disponible à proximité</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <span>Accessible en tramway (ligne 1)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <span>Réservations acceptées</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <span>Plats végétariens disponibles</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;