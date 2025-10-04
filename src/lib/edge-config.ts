// Edge runtime configuration for better performance

export const edgeConfig = {
  // Pages that should use edge runtime
  edgePages: [
    '/',
    '/ofertas',
    '/precos',
    '/preco',
    '/sg'
  ],
  
  // Revalidation times
  revalidation: {
    static: 0, // Never revalidate static content
    dynamic: 900, // 15 minutes for dynamic content
    offers: 300, // 5 minutes for offers
    categories: 1800, // 30 minutes for categories
  },
  
  // Cache headers
  cacheHeaders: {
    static: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
    dynamic: {
      'Cache-Control': 'public, max-age=900, s-maxage=900',
    },
    api: {
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  },
  
  // ISR configuration
  isr: {
    fallback: 'blocking',
    revalidate: 900,
  },
};

export const getRuntime = (pathname: string): 'nodejs' | 'edge' => {
  return edgeConfig.edgePages.some(page => pathname.startsWith(page)) ? 'edge' : 'nodejs';
};

export const getRevalidationTime = (type: keyof typeof edgeConfig.revalidation): number => {
  return edgeConfig.revalidation[type];
};

export const getCacheHeaders = (type: keyof typeof edgeConfig.cacheHeaders) => {
  return edgeConfig.cacheHeaders[type];
};
