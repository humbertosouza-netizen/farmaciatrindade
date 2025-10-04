export interface Offer {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  priceFrom: number;
  priceTo: number;
  discount: number;
  isHighlighted: boolean;
  isGenerico: boolean;
  description?: string;
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "medicamentos",
    name: "Medicamentos",
    slug: "medicamentos",
    icon: "Pill",
    description: "Medicamentos de prescrição e isentos"
  },
  {
    id: "genericos",
    name: "Genéricos",
    slug: "genericos", 
    icon: "Shield",
    description: "Medicamentos genéricos com até 70% de desconto"
  },
  {
    id: "beleza-higiene",
    name: "Beleza & Higiene",
    slug: "beleza-higiene",
    icon: "Sparkles",
    description: "Produtos de beleza e higiene pessoal"
  },
  {
    id: "infantil",
    name: "Infantil",
    slug: "infantil",
    icon: "Baby",
    description: "Produtos específicos para crianças"
  },
  {
    id: "vitaminas",
    name: "Vitaminas",
    slug: "vitaminas",
    icon: "Zap",
    description: "Suplementos vitamínicos e minerais"
  },
  {
    id: "dermocosmeticos",
    name: "Dermocosméticos",
    slug: "dermocosmeticos",
    icon: "Heart",
    description: "Produtos dermatológicos e cosméticos"
  }
];

export const offers: Offer[] = [
  {
    id: "1",
    name: "Neosoro",
    slug: "neosoro",
    category: "medicamentos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 15.00,
    priceTo: 6.50,
    discount: 57,
    isHighlighted: true,
    isGenerico: false,
    description: "Descongestionante nasal",
    brand: "Neosoro"
  },
  {
    id: "2", 
    name: "Dipirona 500g Prati Donaduzzi",
    slug: "dipirona-500g-prati-donaduzzi",
    category: "genericos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 9.99,
    priceTo: 4.99,
    discount: 50,
    isHighlighted: true,
    isGenerico: true,
    description: "Analgésico e antitérmico genérico",
    brand: "Prati Donaduzzi"
  },
  {
    id: "3",
    name: "Dipirona 1g Cimed",
    slug: "dipirona-1g-cimed", 
    category: "genericos",
    image: "/images/dipirona-1g-cimed.png",
    priceFrom: 10.00,
    priceTo: 10.00,
    discount: 0,
    isHighlighted: false,
    isGenerico: true,
    description: "Analgésico e antitérmico genérico",
    brand: "Cimed"
  },
  {
    id: "4",
    name: "Viertgyl",
    slug: "viertgyl",
    category: "medicamentos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 23.99,
    priceTo: 9.99,
    discount: 58,
    isHighlighted: true,
    isGenerico: false,
    description: "Medicamento para vertigem",
    brand: "Viertgyl"
  },
  {
    id: "5",
    name: "Geriatex Plus (Qualquer tamanho)",
    slug: "geriatex-plus-qualquer-tamanho",
    category: "medicamentos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 24.99,
    priceTo: 24.99,
    discount: 0,
    isHighlighted: false,
    isGenerico: false,
    description: "Medicamento para disfunção erétil",
    brand: "Geriatex"
  },
  {
    id: "6",
    name: "Geriatex Premium (Qualquer tamanho)",
    slug: "geriatex-premium-qualquer-tamanho",
    category: "medicamentos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 25.49,
    priceTo: 25.49,
    discount: 0,
    isHighlighted: false,
    isGenerico: false,
    description: "Medicamento para disfunção erétil premium",
    brand: "Geriatex"
  },
  {
    id: "7",
    name: "Tadalafila 20mg com 2 comprimidos Legrand",
    slug: "tadalafila-20mg-2-comprimidos-legrand",
    category: "genericos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 4.99,
    priceTo: 4.99,
    discount: 0,
    isHighlighted: false,
    isGenerico: true,
    description: "Medicamento para disfunção erétil genérico",
    brand: "Legrand"
  },
  {
    id: "8",
    name: "Tadalafila 20mg com 4 comprimidos Prati Donaduzzi",
    slug: "tadalafila-20mg-4-comprimidos-prati-donaduzzi",
    category: "genericos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 8.99,
    priceTo: 8.99,
    discount: 0,
    isHighlighted: false,
    isGenerico: true,
    description: "Medicamento para disfunção erétil genérico",
    brand: "Prati Donaduzzi"
  },
  {
    id: "9",
    name: "Tadalafila 20mg com 8 comprimidos Prati Donaduzzi",
    slug: "tadalafila-20mg-8-comprimidos-prati-donaduzzi",
    category: "genericos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 16.99,
    priceTo: 16.99,
    discount: 0,
    isHighlighted: false,
    isGenerico: true,
    description: "Medicamento para disfunção erétil genérico",
    brand: "Prati Donaduzzi"
  },
  {
    id: "10",
    name: "Ácido Acetil Salicílico EMS",
    slug: "acido-acetil-salicilico-ems",
    category: "genericos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 6.99,
    priceTo: 6.99,
    discount: 0,
    isHighlighted: false,
    isGenerico: true,
    description: "Anti-inflamatório e analgésico genérico",
    brand: "EMS"
  },
  {
    id: "11",
    name: "Torsilax com 12 comprimidos",
    slug: "torsilax-12-comprimidos",
    category: "medicamentos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 8.99,
    priceTo: 8.99,
    discount: 0,
    isHighlighted: false,
    isGenerico: false,
    description: "Relaxante muscular e analgésico",
    brand: "Torsilax"
  },
  {
    id: "12",
    name: "Cimegripe",
    slug: "cimegripe",
    category: "medicamentos",
    image: "/images/placeholder-product.jpg",
    priceFrom: 14.99,
    priceTo: 14.99,
    discount: 0,
    isHighlighted: false,
    isGenerico: false,
    description: "Medicamento para gripe e resfriado",
    brand: "Cimegripe"
  },
  {
    id: "13",
    name: "Aciclovir 200mg - Pharlab",
    slug: "aciclovir-200mg-pharlab",
    category: "genericos",
    image: "/images/aciclovir-200mg-pharlab.png",
    priceFrom: 0,
    priceTo: 0,
    discount: 0,
    isHighlighted: false,
    isGenerico: true,
    description: "Antiviral genérico para herpes",
    brand: "Pharlab"
  }
];

export function getOffersByCategory(categorySlug: string): Offer[] {
  return offers.filter(offer => offer.category === categorySlug);
}

export function getHighlightedOffers(): Offer[] {
  return offers.filter(offer => offer.isHighlighted);
}

export function getGenericOffers(): Offer[] {
  return offers.filter(offer => offer.isGenerico);
}

export function searchOffers(query: string): Offer[] {
  const lowercaseQuery = query.toLowerCase();
  return offers.filter(offer => 
    offer.name.toLowerCase().includes(lowercaseQuery) ||
    offer.description?.toLowerCase().includes(lowercaseQuery) ||
    offer.brand?.toLowerCase().includes(lowercaseQuery)
  );
}

