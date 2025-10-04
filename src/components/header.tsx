"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink, generateTelLink, formatPhone } from "@/lib/utils";

interface HeaderProps {
  phone: string;
  whatsappMessage: string;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Ofertas", href: "/ofertas" },
  { name: "Categorias", href: "/categorias" },
  { name: "Serviços", href: "/servicos" },
  { name: "Entrega", href: "/entrega" },
  { name: "Contato", href: "/contato" },
];

export function Header({ phone, whatsappMessage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logotrindade.png"
                alt="Drogarias Legítima Trindade"
                width={160}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={generateTelLink(phone)}>
                <Phone className="h-4 w-4 mr-2" />
                Ligar
              </a>
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              asChild
            >
              <a href={generateWhatsAppLink(phone, whatsappMessage)}>
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href={generateTelLink(phone)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar
                  </a>
                </Button>
                <Button
                  variant="whatsapp"
                  className="w-full"
                  asChild
                >
                  <a href={generateWhatsAppLink(phone, whatsappMessage)}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

