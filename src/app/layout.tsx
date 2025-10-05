import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCTABar } from "@/components/mobile-cta-bar";
import { ConsentBanner } from "@/components/consent-banner";
import { SearchIntentNotice } from "@/components/search-intent-notice";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drogarias Legítima - O melhor preço de São Gonçalo",
  description: "Entrega rápida, atendimento humano e ofertas de verdade. Medicamentos, genéricos e perfumaria com os melhores preços de São Gonçalo-RJ.",
  keywords: "farmácia, medicamentos, genéricos, São Gonçalo, entrega, preço baixo, Legítima",
  authors: [{ name: "Drogarias Legítima" }],
  creator: "Drogarias Legítima",
  publisher: "Drogarias Legítima",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://drogariaslegitima.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Drogarias Legítima - O melhor preço de São Gonçalo",
    description: "Entrega rápida, atendimento humano e ofertas de verdade. Medicamentos, genéricos e perfumaria com os melhores preços de São Gonçalo-RJ.",
    url: "https://drogariaslegitima.com.br",
    siteName: "Drogarias Legítima",
    images: [
      {
        url: "/images/logotrindade.png",
        width: 1200,
        height: 400,
        alt: "Drogarias Legítima Trindade - O melhor preço de São Gonçalo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drogarias Legítima - O melhor preço de São Gonçalo",
    description: "Entrega rápida, atendimento humano e ofertas de verdade. Medicamentos, genéricos e perfumaria com os melhores preços de São Gonçalo-RJ.",
    images: ["/images/logotrindade.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
};

// Dados de contato (em produção, estes viriam de variáveis de ambiente)
const contactData = {
  phone: "21981471332",
  whatsappMessage: "Olá! Vim pelo site da Drogarias Legítima e gostaria de saber mais sobre os produtos e ofertas.",
  address: "Av. José Manna Júnior, 703 - Trindade, São Gonçalo - RJ, 24456-000",
  hours: "Seg–Sáb 08h–20h • Dom Fechado",
  googleMapsUrl: "https://www.google.com/maps/place/DROGARIA+LEGITIMA+TRINDADE/@-22.8104205,-43.0186993,17z/data=!3m1!4b1!4m6!3m5!1s0x9991003d30ad69:0xa0eb0edeac420149!8m2!3d-22.8104205!4d-43.0186993!16s%2Fg%2F11q8q8q8q8",
  instagram: "https://www.instagram.com/legitimatrindade/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Schema.org para Pharmacy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              "name": "Drogarias Legítima",
              "description": "Farmácia com o melhor preço de São Gonçalo. Entrega rápida, atendimento humano e ofertas de verdade.",
              "url": "https://drogariaslegitima.com.br",
              "telephone": "+55-21-98147-1332",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. José Manna Júnior, 703",
                "addressLocality": "Trindade, São Gonçalo",
                "addressRegion": "RJ",
                "addressCountry": "BR",
                "postalCode": "24456-000"
              },
              "openingHours": [
                "Mo-Sa 08:00-20:00"
              ],
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "São Gonçalo",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Rio de Janeiro"
                }
              },
              "sameAs": [
                "https://www.google.com/maps/place/Drogarias+Legitima"
              ],
              "logo": "https://drogariaslegitima.com.br/images/logotrindade.png",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Medicamentos e Produtos de Farmácia",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Medicamentos"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Genéricos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product", 
                      "name": "Beleza & Higiene"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <TopBar phone={contactData.phone} hours={contactData.hours} />
        <Header 
          phone={contactData.phone} 
          whatsappMessage={contactData.whatsappMessage} 
        />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer
          phone={contactData.phone}
          whatsappMessage={contactData.whatsappMessage}
          address={contactData.address}
          hours={contactData.hours}
          instagram={contactData.instagram}
        />
        
        <MobileCTABar 
          phone={contactData.phone}
          whatsappMessage={contactData.whatsappMessage}
        />
        
        <ConsentBanner />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17545969330"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17545969330');
          `}
        </Script>
      </body>
    </html>
  );
}
