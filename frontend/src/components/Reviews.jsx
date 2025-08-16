import React from 'react';
import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../mock/mockData';

const Reviews = () => {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez les témoignages de nos clients satisfaits
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-orange-200" />
              
              <div className="mb-6">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Client vérifié</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <StarRating rating={5} />
                <span className="text-2xl font-bold text-gray-800">5.0</span>
              </div>
            </div>
            <p className="text-gray-600">
              Moyenne basée sur <strong>50+</strong> avis clients vérifiés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;