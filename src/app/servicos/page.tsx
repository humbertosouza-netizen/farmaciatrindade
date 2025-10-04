import { 
  Heart, 
  Activity, 
  Syringe, 
  Users, 
  Clock, 
  Shield,
  CheckCircle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Activity,
    title: "Aferição de Pressão",
    description: "Medição gratuita da pressão arterial com farmacêuticos qualificados",
    features: [
      "Medição precisa e confiável",
      "Orientação sobre hipertensão",
      "Acompanhamento personalizado",
      "Sem agendamento necessário"
    ],
    price: "Gratuito"
  },
  {
    icon: Heart,
    title: "Teste de Glicemia",
    description: "Verificação dos níveis de açúcar no sangue para controle do diabetes",
    features: [
      "Resultado em poucos minutos",
      "Orientação nutricional",
      "Controle de diabetes",
      "Acompanhamento contínuo"
    ],
    price: "R$ 5,00"
  },
  {
    icon: Syringe,
    title: "Aplicação de Injetáveis",
    description: "Aplicação segura de medicamentos injetáveis por profissionais qualificados",
    features: [
      "Aplicação por farmacêuticos",
      "Técnica asséptica",
      "Material descartável",
      "Acompanhamento pós-aplicação"
    ],
    price: "R$ 15,00"
  },
  {
    icon: Users,
    title: "Orientação Farmacêutica",
    description: "Consultoria especializada sobre medicamentos e tratamentos",
    features: [
      "Consultoria gratuita",
      "Interações medicamentosas",
      "Posologia adequada",
      "Efeitos colaterais"
    ],
    price: "Gratuito"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Serviços disponíveis sem agendamento prévio"
  },
  {
    icon: Shield,
    title: "Profissionais Qualificados",
    description: "Farmacêuticos registrados e experientes"
  },
  {
    icon: CheckCircle,
    title: "Material Descartável",
    description: "Todos os materiais são descartáveis e seguros"
  }
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Nossos Serviços
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Além dos melhores preços, oferecemos serviços farmacêuticos 
              especializados para cuidar da sua saúde.
            </p>
          </div>
        </div>
      </div>

      {/* Serviços principais */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-neutral-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-neutral-900 mb-3">
                      O que inclui:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-accent">
                        {service.price}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contato">
                        Agendar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Benefícios */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-xl text-neutral-600">
              Qualidade, segurança e atendimento humanizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Precisa de algum serviço?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e agende seu atendimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="/contato">
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
                Ligar Agora
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
