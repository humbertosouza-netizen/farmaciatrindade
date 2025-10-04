// Google Analytics 4 e Google Ads tracking
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Consent Mode v2 configuration
export const initializeConsentMode = () => {
  if (typeof window === 'undefined') return;

  // Default consent state
  window.gtag?.('consent', 'default', {
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  });
};

// Update consent when user accepts
export const updateConsent = (granted: boolean) => {
  if (typeof window === 'undefined') return;

  window.gtag?.('consent', 'update', {
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    ad_storage: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
    functionality_storage: granted ? 'granted' : 'denied',
    personalization_storage: granted ? 'granted' : 'denied'
  });
};

// Initialize GA4
export const initializeGA4 = (measurementId: string) => {
  if (typeof window === 'undefined') return;

  window.gtag?.('config', measurementId, {
    allow_ad_personalization_signals: true,
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
};

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', eventName, {
    ...parameters,
    event_category: 'engagement',
    event_label: parameters?.term || 'unknown'
  });
};

// Conversion tracking
export const trackConversion = (conversionId: string, conversionLabel: string, value?: number) => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'conversion', {
    send_to: `${conversionId}/${conversionLabel}`,
    value: value || 0,
    currency: 'BRL'
  });
};

// Specific tracking functions
export const trackWhatsApp = (term?: string, product?: string) => {
  trackEvent('whatsapp_click', { term, product });
  trackConversion('AW-XXXXXXX', 'whatsapp');
};

export const trackCall = (term?: string) => {
  trackEvent('call_click', { term });
  trackConversion('AW-XXXXXXX', 'call');
};

export const trackOfferClick = (offerName: string, offerId: string) => {
  trackEvent('offer_click', { 
    offer_name: offerName, 
    offer_id: offerId 
  });
};

export const trackPriceMatch = (product: string, price: string, where: string) => {
  trackEvent('price_match_submit', { 
    product, 
    price, 
    where 
  });
  trackConversion('AW-XXXXXXX', 'price_match');
};

export const trackMapClick = (action: 'view' | 'directions') => {
  trackEvent('map_click', { action });
};

export const trackSearch = (query: string, results?: number) => {
  trackEvent('search_site', { 
    search_term: query,
    results_count: results || 0
  });
};

export const trackPageView = (page: string, title?: string) => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'page_view', {
    page_title: title || page,
    page_location: window.location.href,
    page_path: page
  });
};

// UTM parameter handling
export const getUTMParams = () => {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
    gclid: urlParams.get('gclid')
  };
};

// Store UTM params in localStorage
export const storeUTMParams = () => {
  if (typeof window === 'undefined') return;

  const utmParams = getUTMParams();
  if (Object.values(utmParams).some(value => value)) {
    localStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
};

// Get stored UTM params
export const getStoredUTMParams = () => {
  if (typeof window === 'undefined') return {};

  try {
    const stored = localStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Generate WhatsApp message with UTM
export const generateWhatsAppMessageWithUTM = (baseMessage: string, product?: string) => {
  const utmParams = getStoredUTMParams();
  let message = baseMessage;

  if (product) {
    message += ` Quero preço de ${product}.`;
  }

  if (utmParams.utm_campaign) {
    message += ` Vim pela campanha ${utmParams.utm_campaign}`;
  }

  if (utmParams.utm_term) {
    message += ` buscando "${utmParams.utm_term}"`;
  }

  return encodeURIComponent(message);
};

// Generate phone link with tracking
export const generatePhoneLinkWithTracking = (phone: string) => {
  const utmParams = getUTMParams();
  const gclid = utmParams.gclid;
  
  if (gclid) {
    return `tel:${phone}?src=ads&gclid=${gclid}`;
  }
  
  return `tel:${phone}`;
};

// Send beacon for telemetry
export const sendBeacon = (event: string, data: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;

  const payload = {
    event,
    ...data,
    timestamp: Date.now(),
    url: window.location.href,
    user_agent: navigator.userAgent
  };

  // Send to GA4
  trackEvent(event, data);

  // Send beacon to custom endpoint (if available)
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/ping', JSON.stringify(payload));
  }
};
