"use client";

import { Phone, Clock } from "lucide-react";
import { formatPhone, generateTelLink } from "@/lib/utils";

interface TopBarProps {
  phone: string;
  hours: string;
}

export function TopBar({ phone, hours }: TopBarProps) {
  return (
    <div className="bg-primary text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-6">
          <span className="font-medium">Drogarias Legítima - O melhor preço de São Gonçalo</span>
          <span className="text-xs">Farmácia aberta agora - Av. José Manna Júnior, 703 - Trindade</span>
        </div>
        
        <div className="flex items-center space-x-4 text-xs md:text-sm">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{hours}</span>
          </div>
          
          <a
            href={generateTelLink(phone)}
            className="flex items-center space-x-1 hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>{formatPhone(phone)}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

