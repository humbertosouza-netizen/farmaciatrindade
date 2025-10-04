import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { kw, generateFAQ } from '@/lib/kw';
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from '@/lib/seoSchemas';
import { FAQ } from '@/components/faq';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Star, Truck } from 'lucide-react';
import { generateWhatsAppLink, generateTelLink, formatPrice } from '@/lib/utils';
import { getHighlightedOffers } from '@/lib/offers';

interface CategoriaPageProps {
  params: {
    categoria: string;
  };
}

// Generate static params for all categories
export async function generateStaticParams() {
  return Object.keys(kw.categorias).map((categoria) => ({
    categoria,
  }));
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoriaPageProps): Promise<Metadata> {
  const categoria = params.categoria;
  const categoriaName = categoria.charAt(0).toUpperCase() + categoria.slice(1);
  
  if (!kw.categorias[categoria as keyof typeof kw.categorias]) {
    return {
      title: 'Categoria não encontrada',
    };
  }

  const products = kw.categorias[categoria as keyof typeof kw.categorias];
  const firstProduct = products[0];

  return {
    title: `${categoriaName} com preço baixo em São Gonçalo | Drogarias Legítima`,
    description: `${categoriaName} na Drogarias Legítima. Farmácia próxima com delivery de farmácia hoje. Farmácia aberta agora em São Gonçalo. Melhor preço e cobrimos ofertas.`,
    openGraph: {
      title: `${categoriaName} com preço baixo em São Gonçalo`,
      description: `${categoriaName} na Drogarias Legítima. Farmácia próxima com delivery de farmácia hoje. Farmácia aberta agora em São Gonçalo.`,
      images: [
        {
          url: `/api/og?title=${categoriaName} com preço baixo&subtitle=Melhor preço de São Gonçalo`,
          width: 1200,
          height: 630,
          alt: `${categoriaName} - Drogarias Legítima`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoriaName} com preço baixo em São Gonçalo`,
      description: `${categoriaName} com o melhor preço de São Gonçalo. Entrega hoje.`,
      images: [`/api/og?title=${categoriaName} com preço baixo&subtitle=Melhor preço de São Gonçalo`],
    },
    alternates: {
      canonical: `https://drogariaslegitima.com.br/precos/${categoria}`,
    },
  };
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const categoria = params.categoria;
  const categoriaName = categoria.charAt(0).toUpperCase() + categoria.slice(1);
  
  // Check if category exists
  if (!kw.categorias[categoria as keyof typeof kw.categorias]) {
    notFound();
  }

  const products = kw.categorias[categoria as keyof typeof kw.categorias];
  const offers = getHighlightedOffers().filter(offer => 
    offer.category.toLowerCase().includes(categoria.toLowerCase())
  );

  const contactData = {
    phone: "21981471332",
    whatsappMessage: `Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.`,
  };

  const faqs = generateFAQ(categoria);

  const breadcrumbs = [
    { name: 'Home', url: 'https://drogariaslegitima.com.br' },
    { name: 'Preços', url: 'https://drogariaslegitima.com.br/precos' },
    { name: categoriaName, url: `https://drogariaslegitima.com.br/precos/${categoria}` },
  ];

  const productList = products.map(product => ({
    name: product,
    url: `https://drogariaslegitima.com.br/preco/${product.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '')}`
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({ items: breadcrumbs })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd({ faqs })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd({ items: productList, name: `${categoriaName} - Produtos` })),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {categoriaName} na <span className="text-accent">Drogarias Legítima</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
                {categoriaName} com o melhor preço de São Gonçalo. 
                <strong>Farmácia próxima</strong> com <strong>delivery de farmácia</strong> hoje. 
                <strong>Farmácia aberta agora</strong> com atendimento humano e garantia de menor preço.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
                  asChild
                >
                  <a href={generateWhatsAppLink(contactData.phone, `${contactData.whatsappMessage} Quero preços de ${categoriaName}.`)}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Consultar Preços
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
                  <div className="text-3xl font-bold text-accent mb-2">Melhor</div>
                  <p className="text-neutral-200">Preço de São Gonçalo</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Hoje</div>
                  <p className="text-neutral-200">Entrega em São Gonçalo</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <p className="text-neutral-200">Cobrimos ofertas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                {categoriaName} na <strong>Drogarias Legítima</strong>
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                <strong>Farmácia próxima</strong> com {categoriaName} disponível. 
                <strong>Farmácia com entrega</strong> hoje em São Gonçalo. Consulte preços no WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-heading font-semibold text-neutral-900 text-lg">
                        {product}
                      </h3>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {categoriaName}
                      </Badge>
                    </div>
                    
                    <p className="text-neutral-600 mb-4">
                      Consulte preço e disponibilidade no WhatsApp
                    </p>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent-dark text-white flex-1"
                        asChild
                      >
                        <a href={generateWhatsAppLink(contactData.phone, `Quero preço de ${product}`)}>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Preço
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                      >
                        <a href={generateTelLink(contactData.phone)}>
                          <Phone className="h-4 w-4 mr-2" />
                          Ligar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offers Section */}
        {offers.length > 0 && (
          <section className="py-16 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                  Ofertas em {categoriaName}
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  Produtos com desconto especial
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                  <Card key={offer.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-heading font-semibold text-neutral-900 text-lg">
                          {offer.name}
                        </h3>
                        {offer.discount > 0 && (
                          <Badge variant="destructive" className="bg-accent text-white">
                            -{offer.discount}%
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(offer.priceTo)}
                        </span>
                        {offer.priceFrom && (
                          <span className="text-lg text-neutral-500 line-through">
                            {formatPrice(offer.priceFrom)}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-neutral-600 mb-4">
                        {offer.category} • {offer.isGenerico ? 'Genérico' : 'Referência'}
                      </p>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-accent hover:bg-accent-dark text-white flex-1"
                          asChild
                        >
                          <a href={generateWhatsAppLink(contactData.phone, `Quero preço de ${offer.name}`)}>
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Consultar
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                        >
                          <a href={generateTelLink(contactData.phone)}>
                            <Phone className="h-4 w-4 mr-2" />
                            Ligar
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title={`Perguntas sobre ${categoriaName}`}
          description="Tire suas dúvidas sobre preços, entrega e disponibilidade"
        />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-xl text-neutral-200 mb-8">
              Fale no WhatsApp e consulte preços de outros produtos em {categoriaName}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
                asChild
              >
                <a href={generateWhatsAppLink(contactData.phone, `Quero consultar preços de ${categoriaName}`)}>
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Consultar no WhatsApp
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
          </div>
        </section>
      </div>
    </>
  );
}
