export const websiteJsonLd = ({ url }: { url: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url,
  name: 'Drogarias Legítima Trindade',
  description: 'O melhor preço de São Gonçalo. Medicamentos, genéricos e perfumaria com entrega rápida.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${url}/buscar?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
});

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Drogarias Brito & Rodrigues LTDA',
  legalName: 'Drogarias Brito & Rodrigues LTDA',
  taxID: '52.949.961/0001-40',
  url: 'https://drogariaslegitima.com.br',
  logo: 'https://drogariaslegitima.com.br/images/logotrindade.png',
  description: 'Unidade parceira da rede Legítima em Trindade, São Gonçalo - RJ',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. José Manna Júnior, 703',
    addressLocality: 'Trindade',
    addressRegion: 'São Gonçalo',
    postalCode: '24456-000',
    addressCountry: 'BR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-21-98147-1332',
    contactType: 'customer service',
    availableLanguage: 'Portuguese'
  },
  sameAs: [
    'https://www.instagram.com/legitimatrindade/',
    'https://www.google.com/maps/place/DROGARIA+LEGITIMA+TRINDADE'
  ]
});

export const pharmacyJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: 'Drogarias Legítima Trindade',
  description: 'Farmácia com o melhor preço de São Gonçalo. Medicamentos, genéricos e perfumaria.',
  url: 'https://drogariaslegitima.com.br',
  logo: 'https://drogariaslegitima.com.br/images/logotrindade.png',
  image: 'https://drogariaslegitima.com.br/images/logotrindade.png',
  telephone: '+55-21-98147-1332',
  priceRange: '$$',
  openingHours: [
    'Mo-Sa 08:00-20:00'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. José Manna Júnior, 703',
    addressLocality: 'Trindade',
    addressRegion: 'São Gonçalo',
    postalCode: '24456-000',
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.8104205,
    longitude: -43.0186993
  },
  hasMap: 'https://www.google.com/maps/place/DROGARIA+LEGITIMA+TRINDADE',
  areaServed: [
    'Trindade', 'Alcântara', 'Neves', 'Colubandê', 'Mutuá', 'Paraíso', 
    'Zé Garoto', 'Jardim Catarina', 'Porto da Pedra', 'Barro Vermelho', 
    'Itaúna', 'Boaçu', 'Gradim'
  ],
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
  currenciesAccepted: 'BRL',
  isAccessibleForFree: false,
  publicAccess: true,
  medicalSpecialty: 'Pharmacy'
});

export const breadcrumbJsonLd = ({ items }: { items: Array<{ name: string; url: string }> }) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const productJsonLd = (product: {
  nome: string;
  slug: string;
  imagem: string;
  precoPor: number;
  precoDe?: number;
  categoria: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.nome,
  description: `${product.nome} - ${product.categoria} com o melhor preço em São Gonçalo`,
  image: [product.imagem],
  category: product.categoria,
  brand: {
    '@type': 'Brand',
    name: 'Drogarias Legítima'
  },
  offers: {
    '@type': 'Offer',
    price: product.precoPor,
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Drogarias Legítima Trindade'
    },
    url: `https://drogariaslegitima.com.br/preco/${product.slug}`,
    priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    ...(product.precoDe && {
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: product.precoPor,
        priceCurrency: 'BRL',
        valueAddedTaxIncluded: true
      }
    })
  }
});

export const faqJsonLd = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const itemListJsonLd = ({ items, name }: { items: Array<{ name: string; url: string }>; name: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: item.url
  }))
});

export const localBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://drogariaslegitima.com.br/#business',
  name: 'Drogarias Legítima Trindade',
  description: 'Farmácia com o melhor preço de São Gonçalo',
  url: 'https://drogariaslegitima.com.br',
  telephone: '+55-21-98147-1332',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. José Manna Júnior, 703',
    addressLocality: 'Trindade',
    addressRegion: 'São Gonçalo',
    postalCode: '24456-000',
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.8104205,
    longitude: -43.0186993
  },
  openingHours: 'Mo-Sa 08:00-20:00',
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
  currenciesAccepted: 'BRL'
});
