"use client";

import { useState, useEffect } from "react";
import { Search, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink, generateTelLink } from "@/lib/utils";
import { trackWhatsApp, trackCall } from "@/lib/analytics";

interface SearchIntentNoticeProps {
  searchTerm: string;
  onClose: () => void;
  phone: string;
  whatsappMessage: string;
}

export function SearchIntentNotice({ 
  searchTerm, 
  onClose, 
  phone, 
  whatsappMessage 
}: SearchIntentNoticeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setIsVisible(true);
    }
  }, [searchTerm]);

  const handleWhatsApp = () => {
    trackWhatsApp(searchTerm);
    window.open(generateWhatsAppLink(phone, `${whatsappMessage} Buscando: ${searchTerm}`), '_blank');
  };

  const handleCall = () => {
    trackCall(searchTerm);
    window.location.href = generateTelLink(phone);
  };

  if (!isVisible || !searchTerm) return null;

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <Search className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-medium text-neutral-900 mb-1">
              Você buscou por &ldquo;{searchTerm}&rdquo;
            </h3>
            <p className="text-sm text-neutral-600 mb-3">
              Encontre o que precisa com o melhor preço de São Gonçalo. 
              Fale no WhatsApp ou ligue para consultar preços e disponibilidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleWhatsApp}
                size="sm"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Consultar no WhatsApp
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                size="sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="text-neutral-400 hover:text-neutral-600 flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
