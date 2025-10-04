"use client";

import { useState } from "react";
import { Search, Filter, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { offers, categories, searchOffers, getOffersByCategory } from "@/lib/offers";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";
import Image from "next/image";

// Dados de contato
const contactData = {
  phone: "21999999999",
  whatsappMessage: "Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.",
};

export default function OfertasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [filteredOffers, setFilteredOffers] = useState(offers);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    let results = offers;

    if (query.length > 0) {
      results = searchOffers(query);
    }

    if (selectedCategory !== "todas") {
      results = results.filter(offer => offer.category === selectedCategory);
    }

    setFilteredOffers(results);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    let results = offers;

    if (searchQuery.length > 0) {
      results = searchOffers(searchQuery);
    }

    if (category !== "todas") {
      results = results.filter(offer => offer.category === category);
    }

    setFilteredOffers(results);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Nossas Ofertas
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Os melhores preços que você só encontra na Legítima
            </p>

            {/* Barra de busca */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Busque por medicamentos, marcas, genéricos..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg"
                />
              </div>
            </div>

            {/* Filtros por categoria */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedCategory === "todas" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter("todas")}
              >
                Todas
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid de ofertas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredOffers.length === 0 ? (
          <div className="text-center py-12">
            <div className="h-16 w-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-neutral-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
              Nenhuma oferta encontrada
            </h3>
            <p className="text-neutral-600 mb-6">
              Tente ajustar os filtros ou fazer uma nova busca
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("todas");
                setFilteredOffers(offers);
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-neutral-600">
                {filteredOffers.length} oferta{filteredOffers.length !== 1 ? "s" : ""} encontrada{filteredOffers.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredOffers.map((offer) => (
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
                        {offer.isHighlighted && (
                          <Badge variant="success" className="text-xs">
                            DESTAQUE
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

                      {offer.description && (
                        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                          {offer.description}
                        </p>
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
                        <a href={generateWhatsAppLink(contactData.phone, `Olá! Gostaria de saber mais sobre ${offer.name} - ${formatPrice(offer.priceTo)}`)}>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Consultar Preço
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
