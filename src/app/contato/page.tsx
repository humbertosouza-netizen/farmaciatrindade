"use client";

import { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Mail,
  Navigation,
  Send,
  Instagram
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateWhatsAppLink, generateTelLink, formatPhone } from "@/lib/utils";

const contactData = {
  phone: "21981471332",
  whatsappMessage: "Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.",
  address: "Av. José Manna Júnior, 703 - Trindade, São Gonçalo - RJ, 24456-000",
  hours: "Seg–Sáb 08h–20h • Dom Fechado",
  email: "contato@drogariaslegitima.com.br",
  googleMapsUrl: "https://www.google.com/maps/place/DROGARIA+LEGITIMA+TRINDADE/@-22.8104205,-43.0186993,17z/data=!3m1!4b1!4m6!3m5!1s0x9991003d30ad69:0xa0eb0edeac420149!8m2!3d-22.8104205!4d-43.0186993!16s%2Fg%2F11q8q8q8q8",
  instagram: "https://www.instagram.com/legitimatrindade/",
};

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🏪 *Contato via Site - Drogarias Legítima* 🏪

👤 *Nome:* ${formData.name}
📞 *Telefone:* ${formData.phone}

💬 *Mensagem:*
${formData.message}

---
Enviado através do site oficial`;

    const whatsappLink = generateWhatsAppLink(contactData.phone, message);
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco através 
              do WhatsApp, telefone ou venha nos visitar.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Telefone/WhatsApp
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(21) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Como podemos ajudar você?"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informações de contato */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900">WhatsApp</h3>
                    <p className="text-sm text-neutral-600">Resposta rápida</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  Fale conosco pelo WhatsApp para consultas de preços, 
                  pedidos e orientações farmacêuticas.
                </p>
                <Button
                  variant="whatsapp"
                  className="w-full"
                  asChild
                >
                  <a href={generateWhatsAppLink(contactData.phone, contactData.whatsappMessage)}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Telefone */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900">Telefone</h3>
                    <p className="text-sm text-neutral-600">Atendimento direto</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  Ligue para falar diretamente com nossa equipe de atendimento.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-neutral-900">
                    {formatPhone(contactData.phone)}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a href={generateTelLink(contactData.phone)}>
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Endereço */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900">Endereço</h3>
                    <p className="text-sm text-neutral-600">Venha nos visitar</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  {contactData.address}
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href={contactData.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4 mr-2" />
                    Como chegar
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Horário */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900">Horário</h3>
                    <p className="text-sm text-neutral-600">Funcionamento</p>
                  </div>
                </div>
                <p className="text-neutral-700">
                  {contactData.hours}
                </p>
              </CardContent>
            </Card>

            {/* Instagram */}
            {contactData.instagram && (
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                      <Instagram className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-neutral-900">Instagram</h3>
                      <p className="text-sm text-neutral-600">Siga-nos</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 mb-4">
                    Acompanhe nossas ofertas e novidades no Instagram
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a href={contactData.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4 mr-2" />
                      @legitimatrindade
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Nossa Localização
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.7852348223123!2d-43.0186993!3d-22.8104205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9991003d30ad69%3A0xa0eb0edeac420149!2sDROGARIA%20LEGITIMA%20TRINDADE!5e0!3m2!1spt-BR!2sbr!4v1759516915102!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0 0 1rem 1rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Drogarias Legítima Trindade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
