
# Aposte Ganha - Landing Pages

Este repositório contém todas as landing pages das campanhas promocionais da Aposte Ganha, organizadas por jogos e valores de aposta.

## 🎯 Estrutura do Projeto

```
aposte-ganhe-landing-pages/
├── 🔥 fenix/           # Landing pages do jogo Fênix Sortuda
├── 🐂 touro/           # Landing pages do jogo Touro Sortudo  
├── 🐕 cachorro/        # Landing pages do jogo Cachorro Sortudo
├── ✈️ aviator/         # Landing pages do jogo Aviator
├── 🔧 shared/          # Componentes e assets compartilhados
├── 📦 build-config/    # Configurações de build
└── 🚀 deployment/      # Scripts e configs de deploy
```

## 🎮 Landing Pages Disponíveis

### Fênix Sortuda
- **R$ 5,00** → [fenix-5-rodadas](./fenix/fenix-5-rodadas/) - 100 giros grátis
- **R$ 10,00** → [fenix-10-rodadas](./fenix/fenix-10-rodadas/) - 125 giros grátis

### Touro Sortudo
- **R$ 1,00** → [touro-1-real](./touro/touro-1-real/) - 50 rodadas
- **R$ 5,00** → [touro-5-reais](./touro/touro-5-reais/) - 100 rodadas extras
- **R$ 10,00** → [touro-10-reais](./touro/touro-10-reais/) - 125 rodadas na hora

### Cachorro Sortudo
- **R$ 1,00** → [cachorro-1-real](./cachorro/cachorro-1-real/) - 50 rodadas
- **R$ 5,00** → [cachorro-5-reais](./cachorro/cachorro-5-reais/) - 100 rodadas

### Aviator
- **R$ 1,00** → [aviator-1-real](./aviator/aviator-1-real/) - 5 rodadas
- **R$ 5,00** → [aviator-5-reais](./aviator/aviator-5-reais/) - 10 rodadas
- **R$ 10,00** → [aviator-10-reais](./aviator/aviator-10-reais/) - 20 rodadas extras

## 🚀 Como Fazer Deploy

### 1. Deploy Individual (Recomendado)
```bash
# Navegar para a landing page desejada
cd fenix/fenix-5-rodadas

# Instalar dependências
npm install

# Build para produção
npm run build

# Deploy no Netlify/Vercel
npm run deploy
```

### 2. Deploy de Todas as Landing Pages
```bash
# Na raiz do projeto
npm run build:all
npm run deploy:all
```

## 🛠️ Comandos Disponíveis

```bash
npm run dev              # Servidor de desenvolvimento
npm run build           # Build para produção
npm run preview         # Preview da build
npm run deploy          # Deploy para hospedagem
npm run build:all       # Build todas as landing pages
npm run deploy:all      # Deploy todas para hospedagem
```

## 🌐 Hospedagem Recomendada

### Netlify (Recomendado)
- ✅ Deploy automático via GitHub
- ✅ CDN global incluso
- ✅ HTTPS automático
- ✅ Preview deploys

### Vercel
- ✅ Performance otimizada
- ✅ Edge functions
- ✅ Analytics integrado

### Cloudflare Pages
- ✅ CDN super rápido
- ✅ Workers integrados
- ✅ DDoS protection

## 📊 Monitoramento

Cada landing page inclui:
- Google Analytics
- Facebook Pixel
- Hotjar (opcional)
- GTM (Google Tag Manager)

## 🔧 Personalização

### UTM Parameters
Cada landing page tem UTMs únicos configurados em:
```
/src/config/utm-params.ts
```

### Cores e Estilos
Personalize as cores do tema em:
```
/src/styles/theme.css
```

## 📱 Responsive Design

Todas as landing pages são 100% responsivas:
- 📱 Mobile First
- 💻 Desktop otimizado
- 🎯 Foco em conversão

## ⚡ Performance

- Lighthouse Score: 90+
- Core Web Vitals otimizados
- Lazy loading de imagens
- Code splitting automático

## 🔐 Segurança

- HTTPS obrigatório
- Headers de segurança configurados
- CSP (Content Security Policy)
- Rate limiting

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação específica da landing page
2. Consulte os logs de build
3. Entre em contato com o time de desenvolvimento

---

**© 2025 Aposte Ganha - Todos os direitos reservados**
