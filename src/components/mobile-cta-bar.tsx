"use client";

import { MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink, generateTelLink } from "@/lib/utils";

interface MobileCTABarProps {
  phone: string;
  whatsappMessage: string;
}

export function MobileCTABar({ phone, whatsappMessage }: MobileCTABarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 z-50 md:hidden">
      <div className="flex space-x-2">
        <Button
          variant="outline"
          className="flex-1 text-xs"
          asChild
        >
          <a href="/ofertas">
            <Star className="h-3 w-3 mr-1" />
            Ofertas
          </a>
        </Button>
        
        <Button
          variant="outline"
          className="flex-1 text-xs"
          asChild
        >
          <a href={generateTelLink(phone)}>
            <Phone className="h-3 w-3 mr-1" />
            Ligar
          </a>
        </Button>
        
        <Button
          variant="whatsapp"
          className="flex-1 text-xs"
          asChild
        >
          <a href={generateWhatsAppLink(phone, whatsappMessage)}>
            <MessageCircle className="h-3 w-3 mr-1" />
            WhatsApp
          </a>
        </Button>
      </div>
      
      {/* Informações de contato na barra mobile */}
      <div className="mt-2 text-center">
        <div className="text-xs text-neutral-600">
          <span className="font-medium">(21) 98147-1332</span> • 
          <span className="ml-1">Av. José Manna Júnior, 703 - Trindade</span>
        </div>
      </div>
    </div>
  );
}

