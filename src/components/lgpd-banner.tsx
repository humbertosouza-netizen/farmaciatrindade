"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LGPDBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-neutral-900 mb-1">
              Usamos cookies para melhorar sua experiência
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Ao continuar navegando, você concorda com nossa política de cookies. 
              Utilizamos cookies para personalizar conteúdo e anúncios, fornecer 
              recursos de mídia social e analisar nosso tráfego.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-primary hover:bg-primary-dark"
              >
                Aceitar
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                size="sm"
              >
                Recusar
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <a href="/privacidade" className="text-sm">
                  Saiba mais
                </a>
              </Button>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecline}
            className="flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

