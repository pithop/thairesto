import React from 'react';
import { MapPin, Phone, Clock, Utensils } from 'lucide-react';
import { restaurantInfo } from '../mock/mockData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nous Contacter
        </h2>
        <div className="flex justify-center">
          {/* Informations de contact */}
          <div className="space-y-6 max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Venez nous rendre visite
            </h3>
            <a 
              href={restaurantInfo.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start group"
            >
              <MapPin className="text-orange-500 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Adresse</p>
                <p className="text-gray-600 group-hover:text-orange-600 transition-colors">
                  {restaurantInfo.address}
                </p>
                <p className="text-sm text-orange-500 mt-1">
                  (Cliquez pour voir sur Google Maps)
                </p>
              </div>
            </a>
            <div className="flex items-start">
              <Phone className="text-orange-500 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Téléphone</p>
                <p className="text-gray-600">{restaurantInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="text-orange-500 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Horaires</p>
                <p className="text-gray-600">{restaurantInfo.openingHours}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Utensils className="text-orange-500 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Services</p>
                <p className="text-gray-600">{restaurantInfo.services.join(' • ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;