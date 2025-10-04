"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Pill, 
  Shield, 
  Sparkles, 
  Baby, 
  Zap, 
  Heart,
  MessageCircle,
  Navigation
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/offers";

const iconMap = {
  Pill,
  Shield,
  Sparkles,
  Baby,
  Zap,
  Heart,
};

export function CategoriesGrid() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Categorias na <strong>Drogarias Legítima</strong>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-6">
            <strong>Farmácia próxima</strong> com todas as categorias que você precisa. 
            <strong>Farmácia com entrega</strong> hoje em São Gonçalo com os melhores preços.
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Link key={category.id} href={`/categorias/${category.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

