"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MessageCircle, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { generateWhatsAppLink } from "@/lib/utils";
import { searchOffers } from "@/lib/offers";

interface HeroProps {
  phone: string;
  whatsappMessage: string;
}

export function Hero({ phone, whatsappMessage }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = searchOffers(query);
      setSearchResults(results.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Fundo da farmácia"
          fill
          className="object-cover object-center opacity-40"
          priority
          quality={85}
          sizes="100vw"
          onError={(e) => {
            // Fallback caso a imagem não carregue
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Overlay gradiente para melhorar legibilidade e manter o branding */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 to-primary-dark/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Headline principal */}
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            <span className="text-accent">Drogarias Legítima</span> - O melhor preço de{" "}
            <span className="text-accent">São Gonçalo</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
            <strong>Farmácia próxima</strong> com entrega rápida e atendimento humano.
            <strong>Farmácia aberta agora</strong> em São Gonçalo - Trindade.
            <strong>Delivery de farmácia</strong> no mesmo dia com o menor preço da região.
          </p>

          {/* Botão para ir até a farmácia */}
          <div className="max-w-2xl mx-auto mb-8">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-neutral-50 w-full"
              onClick={() => {
                window.open('https://www.google.com/maps/dir/?api=1&destination=Av.+José+Manna+Júnior,+703+-+Trindade,+São+Gonçalo+-+RJ,+24456-000', '_blank');
              }}
            >
              <Navigation className="h-5 w-5 mr-2" />
              Como chegar na Drogarias Legítima
            </Button>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="whatsapp"
              className="text-lg px-8 py-4"
              asChild
            >
              <a href={generateWhatsAppLink(phone, whatsappMessage)}>
                <MessageCircle className="h-5 w-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-neutral-50"
              asChild
            >
              <a href="/ofertas">
                Ver Ofertas
              </a>
            </Button>
          </div>

          {/* Informações de contato */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">(21) 98147-1332</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <Navigation className="h-4 w-4 text-accent" />
                <span className="text-sm">Av. José Manna Júnior, 703 - Trindade</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

