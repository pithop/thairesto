import React from 'react';
import { Card } from './ui/card';
import { Heart, Award, Clock } from 'lucide-react';
import { restaurantImage } from '../mock/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bienvenue au <strong>P'tit Thaï 2</strong>, où nous célébrons la richesse et l'authenticité de la cuisine thaïlandaise traditionnelle. Notre passion pour les saveurs authentiques de la street food thaïlandaise nous guide depuis l'ouverture de notre restaurant.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Chaque plat est préparé avec des ingrédients frais et des épices importées directement de Thaïlande, garantissant une expérience gustative authentique qui vous transportera dans les rues de Bangkok.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Passion</h3>
                <p className="text-sm text-gray-600">Des recettes familiales transmises de génération en génération</p>
              </Card>
              
              <Card className="p-6 text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Qualité</h3>
                <p className="text-sm text-gray-600">Ingrédients frais et épices authentiques importées de Thaïlande</p>
              </Card>
              
              <Card className="p-6 text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <Clock className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Service</h3>
                <p className="text-sm text-gray-600">Préparation rapide pour vos commandes sur place et à emporter</p>
              </Card>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="relative">
              <img 
                src={restaurantImage}
                alt="Devanture du restaurant Le P'tit Thaï 2"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;