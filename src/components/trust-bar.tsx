"use client";

import { Truck, CreditCard, Clock, Shield } from "lucide-react";
import Image from "next/image";

const trustItems = [
  {
    icon: Truck,
    title: "Delivery de farmácia",
    description: "No mesmo dia em São Gonçalo",
  },
  {
    icon: CreditCard,
    title: "Pagamento na entrega",
    description: "Dinheiro ou cartão",
  },
  {
    icon: Clock,
    title: "Atendimento 6 dias",
    description: "Segunda a sábado",
  },
  {
    icon: Shield,
    title: "Produtos originais",
    description: "100% garantidos",
  },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div key={index} className="text-center group">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

