import React from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { restaurantInfo, heroVideo } from '../mock/mockData';

const Hero = () => {
  const handleOrderClick = () => {
    alert("Redirection vers Uber Eats - Fonctionnalité mockée");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          L'Authentique Saveur de la
          <span className="block text-orange-400">Thaïlande à Montpellier</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-200">
          {restaurantInfo.name}
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Découvrez les saveurs authentiques de la cuisine thaïlandaise dans une ambiance chaleureuse au cœur de Montpellier
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleOrderClick}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Commander sur Uber Eats
          </Button>

          <div className="text-sm text-orange-200">
            {restaurantInfo.priceRange} • {restaurantInfo.openingHours}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;