# 🏥 Drogarias Legítima Trindade - Site V2

## 🚀 Melhorias V2 Implementadas

### ✅ **SEO Avançado e Dados Estruturados**
- **Schemas JSON-LD**: Pharmacy, LocalBusiness, Product, FAQ, BreadcrumbList
- **Páginas Dinâmicas**: Bairros, Categorias, Produtos individuais
- **Open Graph Dinâmico**: API `/api/og` para imagens personalizadas
- **Canonical URLs**: Evita conteúdo duplicado
- **Sitemap Automático**: Inclui todas as páginas geradas

### ✅ **Analytics e Consent Mode v2**
- **Google Analytics 4**: Configurado com Consent Mode v2
- **Eventos de Conversão**: WhatsApp, Ligar, Ofertas, Cobre-Oferta
- **UTM Tracking**: Captura e armazena parâmetros de campanha
- **Prefill WhatsApp**: Mensagens personalizadas com UTM
- **Telemetria Leve**: API `/api/ping` para eventos customizados

### ✅ **Router de Intenção Inteligente**
- **Detecção de Termos**: Mapeia busca para página ideal
- **Redirecionamento 302**: Para rotas mais relevantes
- **SearchIntentNotice**: Aviso quando usuário busca algo específico
- **Sinônimos e Normalização**: Remove acentos, converte para slug

### ✅ **Páginas Dinâmicas SEO**
- **Bairros**: `/sg/[bairro]/farmacia` - 13 bairros de São Gonçalo
- **Categorias**: `/precos/[categoria]` - 9 categorias de produtos
- **Produtos**: `/preco/[produto]` - Todos os produtos das categorias
- **FAQ Automático**: Gerado por categoria com schema FAQPage

### ✅ **Performance Otimizada**
- **Edge Runtime**: Páginas críticas usando edge
- **Next.js Font**: Otimização de fontes com display swap
- **Image Optimization**: next/image com lazy loading
- **Preconnect**: Domínios externos (WhatsApp, Google Maps)
- **Bundle Splitting**: Componentes carregados sob demanda

### ✅ **Compliance e Segurança**
- **Consent Mode v2**: Banner LGPD com granularidade
- **Filtros de Conteúdo**: Bloqueia termos negativos
- **Disclaimer Médico**: "Siga orientação do farmacêutico"
- **Validação de Upload**: Segurança em formulários

## 📁 **Estrutura de Arquivos V2**

```
src/
├── app/
│   ├── api/
│   │   ├── og/route.tsx          # Open Graph dinâmico
│   │   └── ping/route.ts         # Telemetria
│   ├── sg/[bairro]/farmacia/     # Páginas de bairros
│   ├── precos/[categoria]/       # Páginas de categorias
│   ├── preco/[produto]/          # Páginas de produtos
│   └── layout.tsx                # Consent Mode + Analytics
├── components/
│   ├── consent-banner.tsx        # LGPD Consent Mode v2
│   ├── search-intent-notice.tsx  # Aviso de intenção
│   └── faq.tsx                   # FAQ com schema
├── lib/
│   ├── seoSchemas.ts             # Schemas JSON-LD
│   ├── analytics.ts              # GA4 + Consent Mode
│   ├── kw.ts                     # Palavras-chave + intenções
│   ├── performance.ts            # Otimizações de performance
│   └── edge-config.ts            # Configuração edge runtime
```

## 🎯 **Palavras-Chave Mapeadas**

### **Núcleo Local (13 bairros)**
- "farmácia perto de mim", "farmácia são gonçalo", "farmácia trindade"
- "delivery de farmácia", "entrega de remédios são gonçalo"
- "melhor preço farmácia", "cobrimos oferta farmácia"

### **Categorias (9 categorias)**
- **Analgésicos**: dipirona, paracetamol, ibuprofeno, dorflex
- **Gástricos**: buscopan, epocler, sonrisal, esomeprazol
- **Alergia/Resfriado**: loratadina, desloratadina, sorine
- **Vitaminas**: lavitan, centrum, omega 3, vitamina d
- **Infantil**: fralda pampers, huggies, hipoglós, nan
- **Dermocosméticos**: la roche, isdin, vichy, cicaplast
- **Perfumaria**: dove, always, elseve, gillette
- **Preservativos/Testes**: jontex, prudence, teste covid
- **Genéricos**: genérico de dipirona, ibuprofeno, loratadina

## 🔧 **Configuração e Customização**

### **1. Google Analytics**
```typescript
// src/app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
```

### **2. Google Ads**
```typescript
// src/lib/analytics.ts
trackConversion('AW-XXXXXXX', 'whatsapp');
```

### **3. Palavras-Chave**
```typescript
// src/lib/kw.ts
export const bairrosSG = ["Trindade", "Alcântara", ...];
export const kw = { nucleoLocal: [...], categorias: {...} };
```

### **4. Cores e Branding**
```typescript
// tailwind.config.ts
colors: {
  primary: '#2A2F85',      // Azul Legítima
  'primary-dark': '#1E2370', // Azul escuro
  accent: '#009B3A',       // Verde
}
```

### **5. Contato**
```typescript
// src/app/layout.tsx
const contactData = {
  phone: "21981471332",
  address: "Av. José Manna Júnior, 703 - Trindade",
  hours: "Seg–Sáb 08h–20h • Dom Fechado",
  instagram: "https://www.instagram.com/legitimatrindade/",
};
```

## 📊 **Métricas e Conversões**

### **Eventos Rastreados**
- `whatsapp_click` - Clique no WhatsApp
- `call_click` - Clique para ligar
- `offer_click` - Clique em oferta
- `price_match_submit` - Envio cobre-oferta
- `search_site` - Busca no site
- `map_click` - Clique no mapa

### **Conversões Google Ads**
- WhatsApp: `AW-XXXXXXX/whatsapp`
- Ligar: `AW-XXXXXXX/call`
- Cobre-Oferta: `AW-XXXXXXX/price_match`

## 🚀 **Deploy e Produção**

### **1. Variáveis de Ambiente**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_ADS_ID=AW-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://drogariaslegitima.com.br
```

### **2. Build e Deploy**
```bash
npm run build
npm run start
```

### **3. Verificações Pós-Deploy**
- [ ] Google Search Console
- [ ] Google Analytics funcionando
- [ ] Schema.org validado
- [ ] Core Web Vitals OK
- [ ] Mobile-friendly test

## 📈 **Resultados Esperados**

### **SEO**
- **Lighthouse SEO**: ≥ 95
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Indexação**: Todas as páginas de bairros/produtos

### **Conversão**
- **Quality Score**: Melhoria significativa
- **CTR**: Aumento por relevância
- **Conversões**: Rastreamento completo

### **Performance**
- **Lighthouse Performance**: ≥ 90
- **Edge Runtime**: Páginas críticas
- **Bundle Size**: Otimizado

## 🔄 **Manutenção**

### **Atualizar Produtos**
1. Editar `src/lib/kw.ts`
2. Rebuild: `npm run build`
3. Deploy automático

### **Adicionar Bairros**
1. Adicionar em `bairrosSG` array
2. Páginas geradas automaticamente

### **Monitorar Analytics**
1. Google Analytics 4
2. Google Search Console
3. Core Web Vitals

---

**Desenvolvido com muito amor por [Humberto Azambuja](#) 🚀**

*Versão 2.0 - SEO Avançado + Analytics + Performance*
