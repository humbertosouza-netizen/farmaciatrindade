"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, MessageCircle, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    text: "Excelente atendimento e preços realmente baixos. Sempre que preciso de medicamentos, vou na Legítima. A entrega é super rápida!",
    location: "São Gonçalo, RJ",
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    text: "Melhor farmácia de São Gonçalo! Os genéricos têm preços incríveis e a qualidade é excelente. Recomendo para todos.",
    location: "São Gonçalo, RJ",
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 5,
    text: "Atendimento humanizado e preços justos. A equipe sempre me orienta sobre os medicamentos e os preços são realmente os melhores da região.",
    location: "São Gonçalo, RJ",
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    rating: 5,
    text: "Farmacêuticos muito atenciosos e preços que fazem a diferença no orçamento. A entrega no mesmo dia é um diferencial incrível!",
    location: "São Gonçalo, RJ",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    rating: 5,
    text: "Produtos de qualidade e preços que cabem no bolso. A Legítima realmente cumpre o que promete: o melhor preço de São Gonçalo!",
    location: "São Gonçalo, RJ",
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= reviews.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, reviews.length - itemsPerView) : prev - 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            O que dizem da <strong>Drogarias Legítima</strong>
          </h2>
          <p className="text-xl text-neutral-600 mb-6">
            Mais de 1000 clientes satisfeitos com a <strong>farmácia próxima</strong> em São Gonçalo. 
            <strong>Farmácia aberta agora</strong> com <strong>delivery de farmácia</strong>.
          </p>
          
          {/* Informações de contato */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-neutral-600 mb-6">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">(21) 98147-1332</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neutral-300"></div>
            <div className="flex items-center space-x-2">
              <Navigation className="h-4 w-4 text-accent" />
              <span className="text-sm">Av. José Manna Júnior, 703 - Trindade</span>
            </div>
          </div>
          
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review) => (
              <Card key={review.id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? "text-warning fill-current" : "text-neutral-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t pt-4">
                    <h4 className="font-heading font-semibold text-neutral-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {review.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="hidden lg:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="pointer-events-auto -ml-4 bg-white shadow-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex + itemsPerView >= reviews.length}
              className="pointer-events-auto -mr-4 bg-white shadow-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(reviews.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`h-2 w-8 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? "bg-primary"
                  : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

