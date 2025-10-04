import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bairrosSG, generateFAQ } from '@/lib/kw';
import { pharmacyJsonLd, breadcrumbJsonLd, localBusinessJsonLd } from '@/lib/seoSchemas';
import { MapCard } from '@/components/map-card';
import { FAQ } from '@/components/faq';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Navigation, Clock, Truck } from 'lucide-react';
import { generateWhatsAppLink, generateTelLink } from '@/lib/utils';

interface BairroPageProps {
  params: {
    bairro: string;
  };
}

// Generate static params for all bairros
export async function generateStaticParams() {
  return bairrosSG.map((bairro) => ({
    bairro: bairro.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, ''),
  }));
}

// Generate metadata for each bairro
export async function generateMetadata({ params }: BairroPageProps): Promise<Metadata> {
  const bairro = params.bairro.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  if (!bairrosSG.some(b => b.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') === params.bairro)) {
    return {
      title: 'Bairro não encontrado',
    };
  }

  return {
    title: `Farmácia em ${bairro} | Drogarias Legítima — Melhor preço SG`,
    description: `Drogarias Legítima em ${bairro}. Farmácia próxima com delivery de farmácia hoje. Farmácia aberta agora em São Gonçalo. Melhor preço e cobrimos ofertas.`,
    openGraph: {
      title: `Farmácia em ${bairro} | Drogarias Legítima`,
      description: `Drogarias Legítima em ${bairro}. Farmácia próxima com delivery de farmácia hoje. Farmácia aberta agora em São Gonçalo.`,
      images: [
        {
          url: `/api/og?title=Farmácia em ${bairro}&subtitle=Entrega hoje em ${bairro}`,
          width: 1200,
          height: 630,
          alt: `Farmácia em ${bairro} - Drogarias Legítima`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Farmácia em ${bairro} | Drogarias Legítima`,
      description: `Drogarias Legítima em ${bairro}. Farmácia próxima com delivery de farmácia hoje. Farmácia aberta agora em São Gonçalo.`,
      images: [`/api/og?title=Farmácia em ${bairro}&subtitle=Entrega hoje em ${bairro}`],
    },
    alternates: {
      canonical: `https://drogariaslegitima.com.br/sg/${params.bairro}/farmacia`,
    },
  };
}

export default function BairroPage({ params }: BairroPageProps) {
  const bairro = params.bairro.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Check if bairro exists
  if (!bairrosSG.some(b => b.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') === params.bairro)) {
    notFound();
  }

  const contactData = {
    phone: "21981471332",
    whatsappMessage: `Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.`,
    address: "Av. José Manna Júnior, 703 - Trindade, São Gonçalo - RJ, 24456-000",
    hours: "Seg–Sáb 08h–20h • Dom Fechado",
    googleMapsUrl: "https://www.google.com/maps/place/DROGARIA+LEGITIMA+TRINDADE",
  };

  const faqs = generateFAQ('bairro');

  const breadcrumbs = [
    { name: 'Home', url: 'https://drogariaslegitima.com.br' },
    { name: 'São Gonçalo', url: 'https://drogariaslegitima.com.br/sg' },
    { name: bairro, url: `https://drogariaslegitima.com.br/sg/${params.bairro}` },
    { name: 'Farmácia', url: `https://drogariaslegitima.com.br/sg/${params.bairro}/farmacia` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pharmacyJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({ items: breadcrumbs })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-accent">Drogarias Legítima</span> em {bairro}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
                <strong>Farmácia próxima</strong> em {bairro} com o melhor preço de São Gonçalo. 
                <strong>Farmácia aberta agora</strong> com <strong>delivery de farmácia</strong> hoje em {bairro}. 
                Medicamentos, genéricos e perfumaria com atendimento humano.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
                  asChild
                >
                  <a href={generateWhatsAppLink(contactData.phone, `${contactData.whatsappMessage} Estou em ${bairro}.`)}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-white text-primary hover:bg-neutral-50"
                  asChild
                >
                  <a href={generateTelLink(contactData.phone)}>
                    <Phone className="h-5 w-5 mr-2" />
                    Ligar Agora
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Hoje</div>
                  <p className="text-neutral-200">Entrega em {bairro}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Melhor</div>
                  <p className="text-neutral-200">Preço de São Gonçalo</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <p className="text-neutral-200">Cobrimos ofertas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bairros Atendidos */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                <strong>Farmácia com entrega</strong> em todos os bairros de São Gonçalo
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                <strong>Delivery de farmácia</strong> no mesmo dia em todos os bairros de São Gonçalo. 
                <strong>Farmácia próxima</strong> e <strong>farmácia aberta agora</strong> para você.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {bairrosSG.map((b) => (
                <Card key={b} className={`text-center p-4 ${b === bairro ? 'bg-primary text-white' : 'hover:shadow-md transition-shadow'}`}>
                  <CardContent className="p-0">
                    <h3 className={`font-medium ${b === bairro ? 'text-white' : 'text-neutral-900'}`}>
                      {b}
                    </h3>
                    {b === bairro && (
                      <p className="text-sm text-white/80 mt-1">Você está aqui</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                    Entrega Rápida
                  </h3>
                  <p className="text-neutral-600">
                    No mesmo dia em {bairro} e região
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                    Horário Estendido
                  </h3>
                  <p className="text-neutral-600">
                    Segunda a sábado, 8h às 20h
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Navigation className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                    Fácil Localização
                  </h3>
                  <p className="text-neutral-600">
                    Av. José Manna Júnior, 703 - Trindade
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title={`Perguntas sobre entrega em ${bairro}`}
          description="Tire suas dúvidas sobre entrega, preços e atendimento"
        />

        {/* Map and Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Nossa Localização
              </h2>
              <p className="text-xl text-neutral-600">
                Venha nos visitar ou consulte preços no WhatsApp
              </p>
            </div>

            <MapCard {...contactData} />
          </div>
        </section>
      </div>
    </>
  );
}
