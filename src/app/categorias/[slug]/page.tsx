"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { Search, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { categories, getOffersByCategory, searchOffers } from "@/lib/offers";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";

// Dados de contato
const contactData = {
  phone: "21999999999",
  whatsappMessage: "Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.",
};

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Encontrar a categoria pelo slug
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  // Obter ofertas da categoria
  let offers = getOffersByCategory(category.id);
  
  // Aplicar filtro de busca se houver
  if (searchQuery.length > 0) {
    offers = offers.filter(offer => 
      offer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link 
              href="/categorias" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para categorias
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              {category.description}
            </p>

            {/* Barra de busca */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={`Busque em ${category.name.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de produtos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {offers.length === 0 ? (
          <div className="text-center py-12">
            <div className="h-16 w-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-neutral-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-neutral-600 mb-6">
              {searchQuery ? "Tente ajustar sua busca" : "Esta categoria ainda não possui produtos cadastrados"}
            </p>
            {searchQuery && (
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
              >
                Limpar Busca
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-neutral-600">
                {offers.length} produto{offers.length !== 1 ? "s" : ""} encontrado{offers.length !== 1 ? "s" : ""}
                {searchQuery && ` para "${searchQuery}"`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {offers.map((offer) => (
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
