
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LANDING_PAGES = [
  { name: 'fenix-5-rodadas', folder: 'fenix', description: 'Landing page para promoção Fênix Sortuda - R$ 5,00 = 100 giros grátis' },
  { name: 'fenix-10-rodadas', folder: 'fenix', description: 'Landing page para promoção Fênix Sortuda - R$ 10,00 = 125 giros grátis' },
  { name: 'touro-1-real', folder: 'touro', description: 'Landing page para promoção Touro Sortudo - R$ 1,00 = 50 rodadas' },
  { name: 'touro-5-reais', folder: 'touro', description: 'Landing page para promoção Touro Sortudo - R$ 5,00 = 100 rodadas extras' },
  { name: 'touro-10-reais', folder: 'touro', description: 'Landing page para promoção Touro Sortudo - R$ 10,00 = 125 rodadas na hora' },
  { name: 'cachorro-1-real', folder: 'cachorro', description: 'Landing page para promoção Cachorro Sortudo - R$ 1,00 = 50 rodadas' },
  { name: 'cachorro-5-reais', folder: 'cachorro', description: 'Landing page para promoção Cachorro Sortudo - R$ 5,00 = 100 rodadas' },
  { name: 'aviator-1-real', folder: 'aviator', description: 'Landing page para promoção Aviator - R$ 1,00 = 5 rodadas' },
  { name: 'aviator-5-reais', folder: 'aviator', description: 'Landing page para promoção Aviator - R$ 5,00 = 10 rodadas' },
  { name: 'aviator-10-reais', folder: 'aviator', description: 'Landing page para promoção Aviator - R$ 10,00 = 20 rodadas extras' }
];

const originalDir = process.cwd();

console.log('🚀 Criando estrutura de todas as landing pages...\n');

// Template do package.json
const createPackageJson = (landingPage) => ({
  "name": `${landingPage.name}-landing`,
  "version": "1.0.0",
  "description": landingPage.description,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && npx netlify deploy --prod --dir=dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
});

// Template do vite.config.ts
const createViteConfig = () => `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})`;

// Template do tailwind.config.js
const createTailwindConfig = () => `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dharma': ['DharmaGothicE', 'Impact', 'Arial Black', 'sans-serif'],
        'exo': ['Exo', 'Arial', sans-serif'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        'orange-primary': 'hsl(25, 100%, 55%)',
        'orange-secondary': 'hsl(20, 100%, 60%)',
        'orange-vibrant': 'hsl(22, 100%, 65%)',
      },
    },
  },
  plugins: [],
}`;

// Template do tsconfig.json
const createTsConfig = () => ({
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
});

// Template do index.html
const createIndexHtml = (title) => `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&family=Exo:wght@400;600;700;800&display=swap" rel="stylesheet">
    
    <!-- DharmaGothicE Font -->
    <link rel="preload" href="https://storage.googleapis.com/ag-crm/2025-CRM-AG/fonts/DharmaGothicE-ExBold.woff2" as="font" type="font/woff2" crossorigin>
    
    <style>
      @font-face {
        font-family: 'DharmaGothicE';
        src: url('https://storage.googleapis.com/ag-crm/2025-CRM-AG/fonts/DharmaGothicE-ExBold.woff2') format('woff2');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

// Função para criar estrutura de uma landing page
const createLandingStructure = (landingPage) => {
  const landingPath = path.join(originalDir, landingPage.folder, landingPage.name);
  
  // Criar diretórios
  if (!fs.existsSync(landingPath)) {
    fs.mkdirSync(landingPath, { recursive: true });
  }
  
  const srcPath = path.join(landingPath, 'src');
  if (!fs.existsSync(srcPath)) {
    fs.mkdirSync(srcPath, { recursive: true });
  }

  // Criar arquivos de configuração
  fs.writeFileSync(
    path.join(landingPath, 'package.json'),
    JSON.stringify(createPackageJson(landingPage), null, 2)
  );
  
  fs.writeFileSync(
    path.join(landingPath, 'vite.config.ts'),
    createViteConfig()
  );
  
  fs.writeFileSync(
    path.join(landingPath, 'tailwind.config.js'),
    createTailwindConfig()
  );
  
  fs.writeFileSync(
    path.join(landingPath, 'tsconfig.json'),
    JSON.stringify(createTsConfig(), null, 2)
  );
  
  fs.writeFileSync(
    path.join(landingPath, 'index.html'),
    createIndexHtml(landingPage.description)
  );

  // Copiar arquivos necessários do projeto principal
  const sharedFiles = [
    'src/components',
    'src/lib', 
    'src/hooks',
    'public'
  ];

  // Criar estrutura src básica
  const componentsPath = path.join(srcPath, 'components');
  if (!fs.existsSync(componentsPath)) {
    fs.mkdirSync(componentsPath, { recursive: true });
  }

  console.log(`✅ Estrutura criada: ${landingPage.folder}/${landingPage.name}`);
};

// Criar todas as estruturas
let successCount = 0;
let errorCount = 0;

for (const landingPage of LANDING_PAGES) {
  try {
    createLandingStructure(landingPage);
    successCount++;
  } catch (error) {
    console.log(`❌ Erro ao criar ${landingPage.name}:`, error.message);
    errorCount++;
  }
}

console.log('\\n📊 Resumo da Criação:');
console.log(`✅ Sucessos: ${successCount}`);
console.log(`❌ Erros: ${errorCount}`);

if (errorCount === 0) {
  console.log('\\n🎉 Todas as estruturas foram criadas com sucesso!');
  console.log('\\n📋 Próximos passos:');
  console.log('1. Execute: npm run build:all');
  console.log('2. Todas as pastas dist serão geradas automaticamente');
} else {
  console.log('\\n⚠️ Algumas estruturas falharam na criação.');
}
