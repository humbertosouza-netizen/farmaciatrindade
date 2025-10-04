"use client";

import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateWhatsAppLink, generateTelLink, formatPhone } from "@/lib/utils";

interface MapCardProps {
  phone: string;
  whatsappMessage: string;
  address: string;
  hours: string;
  googleMapsUrl: string;
}

export function MapCard({ 
  phone, 
  whatsappMessage, 
  address, 
  hours, 
  googleMapsUrl 
}: MapCardProps) {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-neutral-600">
            Venha nos visitar ou entre em contato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa */}
          <div className="h-96 lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.7852348223123!2d-43.0186993!3d-22.8104205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9991003d30ad69%3A0xa0eb0edeac420149!2sDROGARIA%20LEGITIMA%20TRINDADE!5e0!3m2!1spt-BR!2sbr!4v1759516915102!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Drogarias Legítima Trindade"
            />
          </div>

          {/* Informações de contato */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-neutral-700 font-medium">{address}</p>
                  <p className="text-sm text-neutral-500">Trindade, São Gonçalo - RJ</p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="h-4 w-4 mr-2" />
                      Como chegar no Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-neutral-700 font-medium">{hours}</p>
                  <p className="text-sm text-neutral-500">Segunda a Sábado: 8h às 20h</p>
                  <p className="text-sm text-neutral-500">Domingo: Fechado</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-neutral-700 font-medium">{formatPhone(phone)}</span>
                    <p className="text-sm text-neutral-500">Telefone e WhatsApp</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={generateTelLink(phone)}>
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar
                    </a>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-neutral-700 font-medium">WhatsApp</span>
                    <p className="text-sm text-neutral-500">Resposta rápida</p>
                  </div>
                  <Button variant="whatsapp" size="sm" asChild>
                    <a href={generateWhatsAppLink(phone, whatsappMessage)}>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Conversar
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CTA principal */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl mb-2">
                  Precisa de ajuda?
                </h3>
                <p className="text-white/90 mb-4">
                  Nossa equipe está pronta para te atender
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="whatsapp"
                    className="bg-accent hover:bg-accent-dark"
                    asChild
                  >
                    <a href={generateWhatsAppLink(phone, whatsappMessage)}>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href={generateTelLink(phone)}>
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

