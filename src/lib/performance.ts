// Performance optimization utilities

export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical images
  const criticalImages = [
    '/images/logotrindade.png',
    '/images/hero-background.png',
    '/images/atendimento.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  fontLink.href = 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXpsog.woff2';
  document.head.appendChild(fontLink);
};

export const optimizeImages = () => {
  if (typeof window === 'undefined') return;

  // Lazy load non-critical images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

export const preconnectExternalDomains = () => {
  if (typeof window === 'undefined') return;

  const domains = [
    'https://wa.me',
    'https://maps.googleapis.com',
    'https://www.google.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
};

export const initializePerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      }
      if (entry.entryType === 'first-input') {
        console.log('FID:', (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime);
      }
      if (entry.entryType === 'layout-shift') {
        console.log('CLS:', (entry as PerformanceEntry & { value: number }).value);
      }
    });
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

  // Monitor page load time
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
  });
};

export const optimizeBundleSize = () => {
  if (typeof window === 'undefined') return;

  // Dynamic imports for non-critical components
  const loadNonCriticalComponents = async () => {
    // Dynamic loading can be implemented here
    return null;
  };

  // Load components when needed
  const loadOnInteraction = (selector: string, importFn: () => Promise<unknown>) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener('mouseenter', importFn, { once: true });
    }
  };

  return { loadNonCriticalComponents, loadOnInteraction };
};

export const setupServiceWorker = () => {
  if (typeof window === 'undefined') return;

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

export const optimizeAnimations = () => {
  if (typeof window === 'undefined') return;

  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--animation-iteration-count', '1');
  }

  // Pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    const animations = document.querySelectorAll('[data-animate]');
    animations.forEach(animation => {
      if (document.hidden) {
        (animation as HTMLElement).style.animationPlayState = 'paused';
      } else {
        (animation as HTMLElement).style.animationPlayState = 'running';
      }
    });
  });
};

export const initializeAllOptimizations = () => {
  preloadCriticalResources();
  preconnectExternalDomains();
  optimizeImages();
  initializePerformanceMonitoring();
  optimizeAnimations();
  setupServiceWorker();
};
