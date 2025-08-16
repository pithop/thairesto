import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { menuItems, foodImages } from '../mock/mockData';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('entrees');

  const MenuCard = ({ item }) => (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-none bg-white">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
        <Badge variant="secondary" className="bg-orange-100 text-orange-700 font-semibold">
          {item.price}
        </Badge>
      </div>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </Card>
  );

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Un Aperçu de Notre Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez nos spécialités thaïlandaises préparées avec passion et authenticité
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Galerie d'images des plats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {foodImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Menu par catégories */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="entrees" className="text-lg font-medium">
                Entrées
              </TabsTrigger>
              <TabsTrigger value="plats" className="text-lg font-medium">
                Plats Principaux
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-lg font-medium">
                Desserts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="entrees" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.entrees.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="plats" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.platsPrincipaux.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="desserts" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.desserts.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Tous nos plats peuvent être adaptés selon vos préférences épicées
          </p>
          <div className="flex justify-center space-x-2">
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full" title="Doux"></span>
            <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full" title="Moyennement épicé"></span>
            <span className="inline-block w-3 h-3 bg-red-400 rounded-full" title="Épicé"></span>
            <span className="inline-block w-3 h-3 bg-red-600 rounded-full" title="Très épicé"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;