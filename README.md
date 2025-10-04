# Drogarias Legítima - Site Oficial

Site oficial da Drogarias Legítima, farmácia com o melhor preço de São Gonçalo-RJ.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **Fuse.js** - Busca fuzzy

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas do App Router
│   ├── categorias/         # Páginas de categorias
│   ├── contato/           # Página de contato
│   ├── entrega/           # Página de entrega
│   ├── ofertas/           # Página de ofertas
│   ├── servicos/          # Página de serviços
│   ├── sobre/             # Página sobre
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── sitemap.ts         # Sitemap XML
│   └── robots.ts          # Robots.txt
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Button, Card, etc.)
│   ├── categories-grid.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── lgpd-banner.tsx
│   ├── map-card.tsx
│   ├── mobile-cta-bar.tsx
│   ├── offers-carousel.tsx
│   ├── price-match.tsx
│   ├── reviews.tsx
│   ├── top-bar.tsx
│   └── trust-bar.tsx
├── lib/                   # Utilitários e dados
│   ├── offers.ts         # Dados das ofertas e categorias
│   └── utils.ts          # Funções utilitárias
└── content/              # Conteúdo em MDX (futuro)
    └── pt-br/
```

## 🎨 Design System

### Cores
- **Azul Legítima (Primário)**: `#2A2F85`
- **Azul Escuro (Hover)**: `#1E2370`
- **Verde Acento**: `#009B3A`
- **Branco**: `#FFFFFF`
- **Cinza Texto**: `#6B7280`

### Fontes
- **Headings**: Montserrat
- **Corpo**: Inter

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Design responsivo (mobile-first)
- [x] Página inicial com Hero, categorias e ofertas
- [x] Sistema de busca de produtos
- [x] Páginas de categorias dinâmicas
- [x] Página de ofertas com filtros
- [x] Páginas institucionais (sobre, serviços, entrega, contato)
- [x] Integração com WhatsApp
- [x] Schema.org para SEO
- [x] Meta tags e Open Graph
- [x] Sitemap XML e robots.txt
- [x] Banner LGPD
- [x] Barra sticky mobile
- [x] Componente cobre-oferta

### 🔄 Próximas Implementações
- [ ] Sistema de gerenciamento de ofertas via CMS
- [ ] Integração com Google Analytics
- [ ] PWA (Progressive Web App)
- [ ] Sistema de cupons
- [ ] Integração com sistema de pedidos

## 📞 Configuração de Contato

Para alterar os dados de contato, edite o arquivo `src/app/layout.tsx` na seção `contactData`:

```typescript
const contactData = {
  phone: "21999999999", // Seu telefone (apenas números)
  whatsappMessage: "Sua mensagem padrão do WhatsApp",
  address: "Seu endereço completo",
  hours: "Seu horário de funcionamento",
  googleMapsUrl: "Sua URL do Google Maps",
};
```

## 🎯 SEO e Performance

### Otimizações Implementadas
- **Core Web Vitals**: Otimizado para LCP, FID e CLS
- **Imagens**: Next.js Image com lazy loading
- **Fontes**: Google Fonts com display=swap
- **Schema.org**: Dados estruturados para farmácia
- **Meta Tags**: Open Graph e Twitter Cards
- **Sitemap**: Geração automática
- **Robots.txt**: Configurado para SEO

### Lighthouse Score Esperado
- **Performance**: 95+ (desktop) / 85+ (mobile)
- **Accessibility**: 95+
- **SEO**: 95+
- **Best Practices**: 95+

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy de produção
vercel --prod
```

### Outras Plataformas
O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Licença

Este projeto foi desenvolvido para a Drogarias Legítima. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas ou suporte técnico, entre em contato através do WhatsApp ou telefone da farmácia.

---

**Drogarias Legítima** - O melhor preço de São Gonçalo 🏪💊