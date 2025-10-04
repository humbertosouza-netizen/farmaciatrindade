"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Shield, CheckCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { generateWhatsAppLink } from "@/lib/utils";

interface PriceMatchProps {
  phone: string;
}

export function PriceMatch({ phone }: PriceMatchProps) {
  const [formData, setFormData] = useState({
    product: "",
    price: "",
    where: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🏪 *Cobre-Oferta Legítima* 🏪

📦 *Produto:* ${formData.product}
💰 *Preço encontrado:* R$ ${formData.price}
🏪 *Onde viu:* ${formData.where}

Quero que vocês cobrem esta oferta!`;

    const whatsappLink = generateWhatsAppLink(phone, message);
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="relative py-16 bg-gradient-to-r from-accent to-accent-dark text-white overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/atendimento.png"
          alt="Atendimento farmacêutico"
          fill
          className="object-cover object-center opacity-40"
          priority
          quality={85}
          sizes="100vw"
          onError={(e) => {
            // Fallback caso a imagem não carregue
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Overlay gradiente para melhorar legibilidade e manter o branding */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/85 to-accent-dark/85" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Achou mais barato na <strong>Drogarias Legítima</strong>? Nós cobrimos!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
            <strong>Farmácia próxima</strong> com garantia de menor preço. 
            Envie o link ou foto e garantimos o melhor preço de São Gonçalo.
          </p>
          
          {/* Informações de contato */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/90 mb-6">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">(21) 98147-1332</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Navigation className="h-4 w-4" />
              <span className="text-sm">Av. José Manna Júnior, 703 - Trindade</span>
            </div>
          </div>
          
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="product" className="block text-sm font-medium mb-2">
                    Nome do Produto
                  </label>
                  <Input
                    id="product"
                    type="text"
                    placeholder="Ex: Dipirona 500mg"
                    value={formData.product}
                    onChange={(e) => setFormData(prev => ({ ...prev, product: e.target.value }))}
                    required
                    className="bg-white/90 text-neutral-900 placeholder:text-neutral-500"
                  />
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium mb-2">
                    Preço Encontrado
                  </label>
                  <Input
                    id="price"
                    type="text"
                    placeholder="Ex: 8,90"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    required
                    className="bg-white/90 text-neutral-900 placeholder:text-neutral-500"
                  />
                </div>

                <div>
                  <label htmlFor="where" className="block text-sm font-medium mb-2">
                    Onde Viu
                  </label>
                  <Input
                    id="where"
                    type="text"
                    placeholder="Ex: Farmácia X, Site Y"
                    value={formData.where}
                    onChange={(e) => setFormData(prev => ({ ...prev, where: e.target.value }))}
                    required
                    className="bg-white/90 text-neutral-900 placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-4"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Enviar Cobre-Oferta
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-semibold mb-2">Garantia Total</h3>
            <p className="text-white/80 text-sm">
              Cobrimos qualquer oferta válida da região
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-semibold mb-2">Resposta Rápida</h3>
            <p className="text-white/80 text-sm">
              Respondemos em até 2 horas via WhatsApp
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-semibold mb-2">Fácil de Usar</h3>
            <p className="text-white/80 text-sm">
              Basta enviar foto ou link do produto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

