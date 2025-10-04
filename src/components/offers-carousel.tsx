"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getHighlightedOffers } from "@/lib/offers";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";

interface OffersCarouselProps {
  phone: string;
  whatsappMessage: string;
}

export function OffersCarousel({ phone, whatsappMessage }: OffersCarouselProps) {
  const offers = getHighlightedOffers();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= offers.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, offers.length - itemsPerView) : prev - 1
    );
  };

  const visibleOffers = offers.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-2">
              Ofertas na <strong>Drogarias Legítima</strong>
            </h2>
            <p className="text-xl text-neutral-600 mb-4">
              <strong>Farmácia próxima</strong> com os melhores preços. 
              <strong>Farmácia aberta agora</strong> com <strong>delivery de farmácia</strong> hoje.
            </p>
            
          </div>
          
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex + itemsPerView >= offers.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleOffers.map((offer) => (
              <Card key={offer.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  {/* Imagem do produto */}
                  <div className="relative h-48 bg-neutral-100 rounded-t-2xl overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback para imagem quebrada
                        e.currentTarget.src = "/images/placeholder-product.jpg";
                      }}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 space-y-2">
                      <Badge variant="discount" className="text-xs">
                        -{offer.discount}%
                      </Badge>
                      {offer.isGenerico && (
                        <Badge variant="generico" className="text-xs">
                          GENÉRICO
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Conteúdo do card */}
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-neutral-900 mb-2 line-clamp-2">
                      {offer.name}
                    </h3>
                    
                    {offer.brand && (
                      <p className="text-sm text-neutral-500 mb-3">{offer.brand}</p>
                    )}

                    {/* Preços */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-2xl font-bold text-accent">
                          {formatPrice(offer.priceTo)}
                        </span>
                        <span className="text-sm text-neutral-500 line-through">
                          {formatPrice(offer.priceFrom)}
                        </span>
                      </div>
                      <p className="text-sm text-success font-medium">
                        Economia de {formatPrice(offer.priceFrom - offer.priceTo)}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="whatsapp"
                      className="w-full"
                      asChild
                    >
                      <a href={generateWhatsAppLink(phone, `Olá! Gostaria de saber mais sobre ${offer.name} - ${formatPrice(offer.priceTo)}`)}>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Consultar Preço
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(offers.length / itemsPerView) }).map((_, index) => (
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

        {/* CTA para ver todas as ofertas */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/ofertas">
              Ver Todas as Ofertas
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

