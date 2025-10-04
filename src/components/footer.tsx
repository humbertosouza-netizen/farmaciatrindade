"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, Shield, Instagram } from "lucide-react";
import { generateWhatsAppLink, generateTelLink, formatPhone } from "@/lib/utils";

interface FooterProps {
  phone: string;
  whatsappMessage: string;
  address: string;
  hours: string;
  instagram?: string;
}

const footerLinks = {
  produtos: [
    { name: "Medicamentos", href: "/categorias/medicamentos" },
    { name: "Genéricos", href: "/categorias/genericos" },
    { name: "Beleza & Higiene", href: "/categorias/beleza-higiene" },
    { name: "Infantil", href: "/categorias/infantil" },
    { name: "Vitaminas", href: "/categorias/vitaminas" },
    { name: "Dermocosméticos", href: "/categorias/dermocosmeticos" },
  ],
  servicos: [
    { name: "Ofertas", href: "/ofertas" },
    { name: "Serviços", href: "/servicos" },
    { name: "Entrega", href: "/entrega" },
    { name: "Cobre-Oferta", href: "/#cobre-oferta" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
  ],
};

export function Footer({ phone, whatsappMessage, address, hours, instagram }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e informações principais */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logotrindade.png"
                alt="Drogarias Legítima Trindade"
                width={160}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            
            <p className="text-neutral-300 mb-6">
              O melhor preço de São Gonçalo. Entrega rápida, 
              atendimento humano e ofertas de verdade.
            </p>

            {/* Informações de contato */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-neutral-300">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                {address}
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                {hours}
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                {formatPhone(phone)}
              </div>
              {instagram && (
                <div className="flex items-center text-sm text-neutral-300">
                  <Instagram className="h-4 w-4 mr-2 text-primary" />
                  <a 
                    href={instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    @legitimatrindade
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Precisa de ajuda? Fale conosco!
          </h3>
          <p className="text-white/90 mb-6">
            Nossa equipe está pronta para te atender via WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={generateWhatsAppLink(phone, whatsappMessage)}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-2xl font-medium hover:bg-accent-dark transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar no WhatsApp
            </a>
            <a
              href={generateTelLink(phone)}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-2xl font-medium hover:bg-white/30 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center text-sm text-neutral-400">
                <span className="mr-2">Criado com muito amor por:</span>
                 <a 
                   href="#" 
                   className="hover:opacity-80 transition-opacity"
                 >
                  <Image
                    src="/images/logobebeto.png"
                    alt="Humberto Azambuja - Desenvolvimento Web"
                    width={80}
                    height={24}
                    className="h-6 w-auto"
                  />
                </a>
              </div>
            </div>
            
            <div className="text-sm text-neutral-400">
              © 2025 Drogarias Brito & Rodrigues LTDA – CNPJ: 52.949.961/0001-40<br/>
              Unidade parceira operando sob a bandeira Legítima.<br/>
              Todos os direitos reservados.
            </div>
            
            <div className="mt-4 text-xs text-neutral-500 max-w-md">
              Esta unidade é operada por Drogarias Brito & Rodrigues LTDA (CNPJ: 52.949.961/0001-40), 
              atuando como parceira oficial da rede Legítima na região de Trindade, São Gonçalo - RJ. 
              Todos os serviços são prestados localmente com identidade visual autorizada pela marca Legítima.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

