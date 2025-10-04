"use client";

export const runtime = 'edge';

import { Hero } from "@/components/hero";
import { CategoriesGrid } from "@/components/categories-grid";
import { OffersCarousel } from "@/components/offers-carousel";
import { PriceMatch } from "@/components/price-match";
import { TrustBar } from "@/components/trust-bar";
import { Reviews } from "@/components/reviews";
import { MapCard } from "@/components/map-card";
import { SearchIntentNotice } from "@/components/search-intent-notice";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Dados de contato (em produção, estes viriam de variáveis de ambiente)
const contactData = {
  phone: "21981471332",
  whatsappMessage: "Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.",
  address: "Av. José Manna Júnior, 703 - Trindade, São Gonçalo - RJ, 24456-000",
  hours: "Seg–Sáb 08h–20h • Dom Fechado",
  googleMapsUrl: "https://www.google.com/maps/place/DROGARIA+LEGITIMA+TRINDADE/@-22.8104205,-43.0186993,17z/data=!3m1!4b1!4m6!3m5!1s0x9991003d30ad69:0xa0eb0edeac420149!8m2!3d-22.8104205!4d-43.0186993!16s%2Fg%2F11q8q8q8q8",
};

export default function Home() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  useEffect(() => {
    const term = searchParams.get('k') || searchParams.get('utm_term');
    if (term) {
      setSearchTerm(term);
    }
  }, [searchParams]);

  const handleCloseSearchNotice = () => {
    setSearchTerm(null);
  };

  return (
    <>
      <Hero 
        phone={contactData.phone}
        whatsappMessage={contactData.whatsappMessage}
      />
      
      {searchTerm && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchIntentNotice
            searchTerm={searchTerm}
            onClose={handleCloseSearchNotice}
            phone={contactData.phone}
            whatsappMessage={contactData.whatsappMessage}
          />
        </div>
      )}
      
      <CategoriesGrid />
      
      <OffersCarousel 
        phone={contactData.phone}
        whatsappMessage={contactData.whatsappMessage}
      />
      
      <PriceMatch phone={contactData.phone} />
      
      <TrustBar />
      
      <Reviews />
      
      <MapCard
        phone={contactData.phone}
        whatsappMessage={contactData.whatsappMessage}
        address={contactData.address}
        hours={contactData.hours}
        googleMapsUrl={contactData.googleMapsUrl}
      />
    </>
  );
}
