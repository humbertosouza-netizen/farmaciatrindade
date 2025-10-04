import { 
  Shield, 
  Users, 
  Award, 
  Heart, 
  MapPin, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Produtos 100% originais e com certificação de qualidade"
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Farmacêuticos qualificados para orientar e cuidar da sua saúde"
  },
  {
    icon: Award,
    title: "Melhor Preço",
    description: "Compromisso com os menores preços de São Gonçalo"
  },
  {
    icon: Heart,
    title: "Cuidado com a Saúde",
    description: "Priorizamos o bem-estar e a saúde dos nossos clientes"
  }
];

const networkBenefits = [
  "Acesso a produtos com preços especiais",
  "Garantia de qualidade e procedência",
  "Suporte técnico especializado",
  "Programas de fidelidade exclusivos",
  "Atualizações sobre novos produtos",
  "Descontos em medicamentos genéricos"
];

const team = [
  {
    name: "Dr. João Silva",
    role: "Farmacêutico Responsável",
    experience: "15 anos de experiência",
    speciality: "Medicamentos de prescrição"
  },
  {
    name: "Dra. Maria Santos",
    role: "Farmacêutica Clínica",
    experience: "12 anos de experiência",
    speciality: "Orientação farmacêutica"
  },
  {
    name: "Carlos Oliveira",
    role: "Gerente Comercial",
    experience: "10 anos de experiência",
    speciality: "Atendimento ao cliente"
  }
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header da página */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Sobre a Drogarias Legítima
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Há mais de 10 anos cuidando da saúde dos moradores de São Gonçalo 
              com preços justos e atendimento de qualidade.
            </p>
          </div>
        </div>
      </div>

      {/* Nossa história */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Nossa História
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                A Drogarias Legítima nasceu com o propósito de democratizar o acesso 
                a medicamentos de qualidade em São Gonçalo. Desde 2014, trabalhamos 
                incansavelmente para oferecer os melhores preços da região.
              </p>
              <p>
                Nossa missão é simples: garantir que cada família tenha acesso a 
                medicamentos essenciais sem comprometer o orçamento doméstico. 
                Acreditamos que saúde é um direito de todos.
              </p>
              <p>
                Hoje, somos parte das redes Santos & Abreu e Febrafar, o que nos 
                permite oferecer produtos com preços ainda mais competitivos, 
                mantendo sempre a qualidade e a confiança.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-3xl p-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                Rede Associada
              </h3>
              <div className="space-y-3">
                <Badge variant="success" className="text-sm px-4 py-2">
                  Santos & Abreu
                </Badge>
                <Badge variant="success" className="text-sm px-4 py-2">
                  Febrafar
                </Badge>
              </div>
              <p className="text-neutral-600 mt-4">
                Associados às principais redes farmacêuticas do Brasil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nossos valores */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-neutral-600">
              Os princípios que guiam nosso trabalho diário
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vantagens da rede */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-primary/5 rounded-3xl p-8">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
              Vantagens de ser Associado
            </h3>
            <div className="space-y-3">
              {networkBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Por que Escolher a Legítima?
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                <strong>Preços Imbatíveis:</strong> Nossa parceria com as redes 
                Santos & Abreu e Febrafar nos permite oferecer os melhores preços 
                de São Gonçalo.
              </p>
              <p>
                <strong>Qualidade Garantida:</strong> Todos os produtos são 
                originais e possuem certificação de qualidade. Trabalhamos apenas 
                com fornecedores credenciados.
              </p>
              <p>
                <strong>Atendimento Especializado:</strong> Nossa equipe de 
                farmacêuticos está sempre pronta para orientar e cuidar da sua saúde.
              </p>
              <p>
                <strong>Entrega Rápida:</strong> Entregamos em toda São Gonçalo 
                no mesmo dia, com segurança e agilidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nossa equipe */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-neutral-600">
              Profissionais qualificados para cuidar da sua saúde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 mb-2">
                    {member.experience}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {member.speciality}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Localização */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Nossa Localização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-semibold text-neutral-900 mb-4">
                  Drogarias Legítima
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-primary mr-3" />
                    <span className="text-neutral-600">Rua Exemplo, 123 - São Gonçalo, RJ</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary mr-3" />
                    <span className="text-neutral-600">Seg–Sáb 08h–20h • Dom 08h–14h</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="font-heading font-semibold text-neutral-900 mb-4">
                  Venha nos visitar!
                </h4>
                <p className="text-neutral-600 mb-4">
                  Estamos prontos para atendê-lo com carinho e dedicação
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/contato">
                      Falar no WhatsApp
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="tel:+5521999999999">
                      Ligar Agora
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
