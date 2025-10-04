export const bairrosSG = [
  "Trindade", "Alcântara", "Neves", "Colubandê", "Mutuá", "Paraíso", 
  "Zé Garoto", "Jardim Catarina", "Porto da Pedra", "Barro Vermelho", 
  "Itaúna", "Boaçu", "Gradim"
];

export const kw = {
  nucleoLocal: [
    "farmácia perto de mim", "farmácia próxima", "farmácia aberta agora",
    "farmácia em são gonçalo", "farmácia são gonçalo", "farmácia trindade",
    "drogaria são gonçalo", "drogaria perto",
    "farmácia com entrega", "delivery de farmácia", "entrega de remédios são gonçalo",
    "telefone farmácia são gonçalo", "farmácia whatsapp", "falar com farmácia",
    "melhor preço farmácia", "remédio barato são gonçalo", "cobrimos oferta farmácia"
  ],
  rotasConversao: [
    "comprar remédio no whatsapp", "farmácia whatsapp são gonçalo",
    "ligar farmácia", "telefone drogaria",
    "como chegar farmácia", "farmácia mais perto"
  ],
  categorias: {
    medicamentos: [
      "neosoro preço", "viertgyl preço", "geriatex plus preço", "geriatex premium preço", 
      "torsilax preço", "cimegripe preço"
    ],
    genericos: [
      "dipirona 500g prati donaduzzi preço", "dipirona 1g cimed preço", 
      "tadalafila 20mg legrand preço", "tadalafila 20mg prati donaduzzi preço",
      "ácido acetil salicílico ems preço", "aciclovir 200mg pharlab preço"
    ],
    analgesicos: [
      "dipirona preço", "paracetamol 750mg preço", "ibuprofeno 400mg preço", 
      "dorflex preço", "neosaldina preço", "novalgina preço", "benegrip preço", "engov preço"
    ],
    gastricos: [
      "buscopan preço", "epocler preço", "sonrisal preço", "esomeprazol preço"
    ],
    alergiaResfriado: [
      "loratadina preço", "desloratadina preço", "sorine preço", "vitamina c 1000mg preço"
    ],
    vitaminas: [
      "lavitan preço", "centrum preço", "omega 3 preço", "vitamina d 2000ui preço"
    ],
    infantil: [
      "fralda pampers preço", "huggies preço", "hipoglós preço", "nan 1 preço", "aptamil preço"
    ],
    dermo: [
      "protetor solar la roche preço", "isdin preço", "vichy normaderm preço", "cicaplast preço"
    ],
    perfumaria: [
      "desodorante dove preço", "absorvente always preço", "shampoo elseve preço", "barbeador gillette preço"
    ],
    preservativosTestes: [
      "jontex preço", "prudence preço", "teste de covid preço", "teste gravidez preço"
    ]
  },
  competidores: [
    "drogaria pacheco são gonçalo", "drogasil", "raia", "venâncio", "pagmenos"
  ],
  negativas: [
    "faculdade", "curso", "estágio", "salário", "concurso", "definição", "o que é", 
    "como fazer", "caseiro", "sintomas", "bula pdf", "imagem", "veterinária", 
    "atacado", "distribuidora", "fábrica", "franqueado", "grátis", "download", 
    "torrent", "24h", "24 horas", "plantão", "madrugada", "zolpidem", "rivotril", 
    "clonazepam", "diazepam", "oxicodona", "anabolizante", "sibutramina", "tramadol"
  ]
};

// Normalize search terms (remove accents, lowercase, trim)
export const normalizeTerm = (term: string): string => {
  return term
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

// Create slug from term
export const slugify = (term: string): string => {
  return normalizeTerm(term)
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '');
};

// Map term to category
export const getCategoryFromTerm = (term: string): string | null => {
  const normalized = normalizeTerm(term);
  
  for (const [category, terms] of Object.entries(kw.categorias)) {
    if (terms.some(t => normalized.includes(normalizeTerm(t)))) {
      return category;
    }
  }
  
  return null;
};

// Map term to bairro
export const getBairroFromTerm = (term: string): string | null => {
  const normalized = normalizeTerm(term);
  
  for (const bairro of bairrosSG) {
    if (normalized.includes(normalizeTerm(bairro))) {
      return bairro;
    }
  }
  
  return null;
};

// Check if term is negative
export const isNegativeTerm = (term: string): boolean => {
  const normalized = normalizeTerm(term);
  return kw.negativas.some(neg => normalized.includes(normalizeTerm(neg)));
};

// Resolve intent from search term
export const resolveIntent = (term: string): {
  type: 'product' | 'category' | 'bairro' | 'home' | 'negative';
  value: string | null;
  route: string;
} => {
  const normalized = normalizeTerm(term);
  
  // Check for negative terms first
  if (isNegativeTerm(term)) {
    return {
      type: 'negative',
      value: null,
      route: '/'
    };
  }
  
  // Check for specific product
  const allProducts = Object.values(kw.categorias).flat();
  const product = allProducts.find(p => normalized.includes(normalizeTerm(p)));
  if (product) {
    return {
      type: 'product',
      value: product,
      route: `/preco/${slugify(product)}`
    };
  }
  
  // Check for category
  const category = getCategoryFromTerm(term);
  if (category) {
    return {
      type: 'category',
      value: category,
      route: `/precos/${category}`
    };
  }
  
  // Check for bairro
  const bairro = getBairroFromTerm(term);
  if (bairro) {
    return {
      type: 'bairro',
      value: bairro,
      route: `/sg/${slugify(bairro)}/farmacia`
    };
  }
  
  // Default to home
  return {
    type: 'home',
    value: null,
    route: '/'
  };
};

// Generate FAQ for category
export const generateFAQ = (category: string): Array<{ question: string; answer: string }> => {
  const faqs: Record<string, Array<{ question: string; answer: string }>> = {
    analgesicos: [
      {
        question: "Dipirona tem genérico?",
        answer: "Sim! Temos genérico de dipirona com preço ainda mais baixo. Consulte no WhatsApp para conferir disponibilidade e preços."
      },
      {
        question: "Entrega hoje em São Gonçalo?",
        answer: "Sim! Entregamos no mesmo dia em São Gonçalo. Consulte a taxa de entrega para seu bairro no WhatsApp."
      },
      {
        question: "Qual o melhor preço de paracetamol?",
        answer: "Na Drogarias Legítima você encontra o melhor preço de paracetamol em São Gonçalo. Cobrimos qualquer oferta válida da região."
      }
    ],
    vitaminas: [
      {
        question: "Vitamina D 2000UI tem desconto?",
        answer: "Sim! Temos vitamina D 2000UI com preço especial. Fale no WhatsApp para conferir o valor atual."
      },
      {
        question: "Entrega de vitaminas em São Gonçalo?",
        answer: "Entregamos vitaminas no mesmo dia em São Gonçalo. Consulte disponibilidade e preços no WhatsApp."
      }
    ],
    infantil: [
      {
        question: "Fralda Pampers com melhor preço?",
        answer: "Temos fralda Pampers com o melhor preço de São Gonçalo. Cobrimos qualquer oferta válida da região."
      },
      {
        question: "Entrega de produtos infantis?",
        answer: "Sim! Entregamos produtos infantis no mesmo dia em São Gonçalo. Consulte no WhatsApp."
      }
    ]
  };
  
  return faqs[category] || [
    {
      question: "Entrega hoje em São Gonçalo?",
      answer: "Sim! Entregamos no mesmo dia em São Gonçalo. Consulte a taxa de entrega para seu bairro no WhatsApp."
    },
    {
      question: "Cobrimos ofertas?",
      answer: "Sim! Cobrimos qualquer oferta válida da região. Envie o link ou foto no WhatsApp e garantimos o menor preço."
    }
  ];
};
