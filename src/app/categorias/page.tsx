"use client";

import Link from "next/link";
import { 
  Pill, 
  Shield, 
  Sparkles, 
  Baby, 
  Zap, 
  Heart,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/offers";

const iconMap = {
  Pill,
  Shield,
  Sparkles,
  Baby,
  Zap,
  Heart,
};

export default function CategoriasPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Nossas Categorias
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Encontre exatamente o que você precisa com os melhores preços de São Gonçalo. 
              Medicamentos, genéricos, perfumaria e muito mais.
            </p>
          </div>
        </div>
      </div>

      {/* Grid de categorias */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Link key={category.id} href={`/categorias/${category.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                      <span>Ver produtos</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA para ofertas */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-neutral-600 mb-6">
              Confira todas as nossas ofertas ou entre em contato conosco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/ofertas">
                  Ver Todas as Ofertas
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contato">
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
