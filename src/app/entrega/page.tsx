import { 
  Truck, 
  Clock, 
  MapPin, 
  CreditCard, 
  Phone, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const deliveryZones = [
  {
    zone: "Zona 1 - Centro",
    neighborhoods: ["Centro", "Zé Garoto", "Colubandê", "Gradim"],
    deliveryTime: "30-45 min",
    fee: "R$ 5,00",
    freeFrom: "R$ 50,00"
  },
  {
    zone: "Zona 2 - Zona Norte",
    neighborhoods: ["Alcântara", "Neves", "Porto do Rosa", "Itaúna"],
    deliveryTime: "45-60 min",
    fee: "R$ 8,00",
    freeFrom: "R$ 80,00"
  },
  {
    zone: "Zona 3 - Zona Sul",
    neighborhoods: ["Icaraí", "Santa Luzia", "Piratininga", "Itaipu"],
    deliveryTime: "60-90 min",
    fee: "R$ 12,00",
    freeFrom: "R$ 120,00"
  },
  {
    zone: "Zona 4 - Zona Oeste",
    neighborhoods: ["Boa Vista", "Rocha", "Mutuá", "Santa Luzia"],
    deliveryTime: "90-120 min",
    fee: "R$ 15,00",
    freeFrom: "R$ 150,00"
  }
];

const deliveryFeatures = [
  {
    icon: Clock,
    title: "Entrega no Mesmo Dia",
    description: "Pedidos feitos até 16h são entregues no mesmo dia"
  },
  {
    icon: CreditCard,
    title: "Pagamento na Entrega",
    description: "Dinheiro, cartão de débito ou crédito"
  },
  {
    icon: Phone,
    title: "Rastreamento em Tempo Real",
    description: "Acompanhe seu pedido via WhatsApp"
  },
  {
    icon: CheckCircle,
    title: "Produtos Originais",
    description: "100% originais e com nota fiscal"
  }
];

const deliverySteps = [
  {
    step: 1,
    title: "Faça seu pedido",
    description: "Via WhatsApp ou telefone com nossa equipe"
  },
  {
    step: 2,
    title: "Confirmação",
    description: "Confirmamos disponibilidade e preços"
  },
  {
    step: 3,
    title: "Preparação",
    description: "Selecionamos e embalamos seus produtos"
  },
  {
    step: 4,
    title: "Entrega",
    description: "Entregamos no prazo combinado"
  }
];

export default function EntregaPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Entrega Rápida em São Gonçalo
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Entregamos seus medicamentos e produtos de farmácia 
              no mesmo dia em toda São Gonçalo com segurança e agilidade.
            </p>
          </div>
        </div>
      </div>

      {/* Como funciona */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-neutral-600">
            Processo simples e rápido para receber seus produtos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliverySteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="h-16 w-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.step}
              </div>
              <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Zonas de entrega */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Zonas de Entrega
            </h2>
            <p className="text-xl text-neutral-600">
              Confira os bairros atendidos e valores de entrega
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{zone.zone}</span>
                    <Badge variant="success">{zone.deliveryTime}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Bairros:</h4>
                    <p className="text-sm text-neutral-600">
                      {zone.neighborhoods.join(", ")}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Taxa de entrega:</span>
                      <span className="font-semibold text-accent">{zone.fee}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Grátis a partir de:</span>
                      <span className="font-semibold text-success">{zone.freeFrom}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Características da entrega */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
            Vantagens da Nossa Entrega
          </h2>
          <p className="text-xl text-neutral-600">
            Qualidade e segurança em cada entrega
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Informações importantes */}
      <div className="bg-neutral-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-warning" />
                Informações Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Horário de Funcionamento</h4>
                  <p className="text-sm text-neutral-600">
                    Segunda a Sábado: 8h às 20h | Domingo: 8h às 14h
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Pedidos no Mesmo Dia</h4>
                  <p className="text-sm text-neutral-600">
                    Pedidos feitos até 16h são entregues no mesmo dia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Medicamentos Controlados</h4>
                  <p className="text-sm text-neutral-600">
                    Necessário apresentar receita médica e documento com foto
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Rastreamento</h4>
                  <p className="text-sm text-neutral-600">
                    Acompanhe seu pedido em tempo real via WhatsApp
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Pronto para fazer seu pedido?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e receba seus produtos em casa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="/contato">
                <MessageCircle className="h-5 w-5 mr-2" />
                Falar no WhatsApp
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 text-white hover:bg-white/30"
              asChild
            >
              <Link href="tel:+5521999999999">
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
