import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { kw } from '@/lib/kw';
import { breadcrumbJsonLd, productJsonLd } from '@/lib/seoSchemas';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Star, Shield, Truck, Clock } from 'lucide-react';
import { generateWhatsAppLink, generateTelLink } from '@/lib/utils';

interface ProdutoPageProps {
  params: {
    produto: string;
  };
}

// Get all products from categories
const getAllProducts = () => {
  const allProducts: string[] = [];
  Object.values(kw.categorias).forEach(products => {
    allProducts.push(...products);
  });
  return allProducts;
};

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((produto) => ({
    produto: produto.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, ''),
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: ProdutoPageProps): Promise<Metadata> {
  const produto = params.produto.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const allProducts = getAllProducts();
  
  const foundProduct = allProducts.find(p => 
    p.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') === params.produto
  );
  
  if (!foundProduct) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: `${produto} — preço na Drogarias Legítima | Melhor preço SG`,
    description: `${produto} na Drogarias Legítima. Farmácia próxima com delivery de farmácia hoje. Farmácia aberta agora em São Gonçalo. Melhor preço e cobrimos ofertas.`,
    openGraph: {
      title: `${produto} — preço na Drogarias Legítima`,
      description: `${produto} na Drogarias Legítima. Farmácia próxima com delivery de farmácia hoje. Farmácia aberta agora em São Gonçalo.`,
      images: [
        {
          url: `/api/og?title=${produto}&subtitle=Melhor preço de São Gonçalo`,
          width: 1200,
          height: 630,
          alt: `${produto} - Drogarias Legítima`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${produto} — preço na Drogarias Legítima`,
      description: `${produto} com o melhor preço de São Gonçalo. Entrega hoje.`,
      images: [`/api/og?title=${produto}&subtitle=Melhor preço de São Gonçalo`],
    },
    alternates: {
      canonical: `https://drogariaslegitima.com.br/preco/${params.produto}`,
    },
  };
}

export default function ProdutoPage({ params }: ProdutoPageProps) {
  const produto = params.produto.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const allProducts = getAllProducts();
  
  const foundProduct = allProducts.find(p => 
    p.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') === params.produto
  );
  
  if (!foundProduct) {
    notFound();
  }

  // Find category for this product
  let categoria = '';
  for (const [cat, products] of Object.entries(kw.categorias)) {
    if (products.includes(foundProduct)) {
      categoria = cat;
      break;
    }
  }

  const contactData = {
    phone: "21981471332",
    whatsappMessage: `Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.`,
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://drogariaslegitima.com.br' },
    { name: 'Preços', url: 'https://drogariaslegitima.com.br/precos' },
    { name: categoria.charAt(0).toUpperCase() + categoria.slice(1), url: `https://drogariaslegitima.com.br/precos/${categoria}` },
    { name: produto, url: `https://drogariaslegitima.com.br/preco/${params.produto}` },
  ];

  // Mock product data (in real app, this would come from API)
  const productData = {
    nome: foundProduct,
    slug: params.produto,
    imagem: '/images/placeholder-product.jpg',
    precoPor: 15.90,
    precoDe: 22.90,
    categoria: categoria.charAt(0).toUpperCase() + categoria.slice(1),
    isGenerico: foundProduct.toLowerCase().includes('genérico') || foundProduct.toLowerCase().includes('generico'),
    disponivel: true,
    descricao: `${foundProduct} está disponível na Legítima com preço baixo de verdade. ${foundProduct.toLowerCase().includes('genérico') || foundProduct.toLowerCase().includes('generico') ? 'Trabalhamos com genérico e opções econômicas.' : 'Também trabalhamos com genérico e opções econômicas.'} Entrega hoje em São Gonçalo (consulte bairros).`
  };

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
          __html: JSON.stringify(productJsonLd(productData)),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {produto} na <span className="text-accent">Drogarias Legítima</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
                {produto} com o melhor preço de São Gonçalo. 
                <strong>Farmácia próxima</strong> com <strong>delivery de farmácia</strong> hoje. 
                <strong>Farmácia aberta agora</strong> com atendimento humano e garantia de menor preço.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
                  asChild
                >
                  <a href={generateWhatsAppLink(contactData.phone, `Quero preço de ${produto}`)}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Consultar Preço
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

        {/* Product Details */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Info */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {productData.categoria}
                    </Badge>
                    {productData.isGenerico && (
                      <Badge variant="destructive" className="bg-accent text-white">
                        Genérico
                      </Badge>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                    {produto}
                  </h2>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-primary">
                        R$ {productData.precoPor.toFixed(2).replace('.', ',')}
                      </span>
                      {productData.precoDe && (
                        <span className="text-xl text-neutral-500 line-through">
                          R$ {productData.precoDe.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-600 mb-6">
                    {productData.descricao}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-accent" />
                    <span className="text-neutral-700">Produto original e garantido</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-accent" />
                    <span className="text-neutral-700">Entrega hoje em São Gonçalo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="text-neutral-700">Atendimento 6 dias por semana</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4 flex-1"
                    asChild
                  >
                    <a href={generateWhatsAppLink(contactData.phone, `Quero preço de ${produto}`)}>
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Consultar Preço no WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 flex-1"
                    asChild
                  >
                    <a href={generateTelLink(contactData.phone)}>
                      <Phone className="h-5 w-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </div>

              {/* Price Match Card */}
              <div>
                <Card className="bg-gradient-to-br from-accent to-accent-dark text-white">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Shield className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        Achou mais barato?
                      </h3>
                      <p className="text-white/90">
                        Nós cobrimos! Envie o link ou foto e garantimos o menor preço.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <span className="text-white/90">Envie link ou foto</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <span className="text-white/90">Validamos a oferta</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <span className="text-white/90">Igualamos ou melhoramos</span>
                      </div>
                    </div>
                    
                    <Button
                      size="lg"
                      className="w-full mt-6 bg-white text-accent hover:bg-white/90"
                      asChild
                    >
                      <a href={generateWhatsAppLink(contactData.phone, `Achou ${produto} mais barato? Vamos cobrir!`)}>
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Enviar Cobre-Oferta
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-neutral-600">
                <strong>Importante:</strong> Siga a orientação do farmacêutico. Leia a bula.
              </p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Outros produtos na <strong>Drogarias Legítima</strong>
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                <strong>Farmácia próxima</strong> com outros produtos em {productData.categoria}. 
                <strong>Farmácia com entrega</strong> hoje em São Gonçalo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kw.categorias[categoria as keyof typeof kw.categorias]
                .filter(p => p !== foundProduct)
                .slice(0, 6)
                .map((relatedProduct, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-neutral-900 text-lg mb-2">
                      {relatedProduct}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4">
                      Consulte preço e disponibilidade
                    </p>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent-dark text-white flex-1"
                        asChild
                      >
                        <a href={generateWhatsAppLink(contactData.phone, `Quero preço de ${relatedProduct}`)}>
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
      </div>
    </>
  );
}
