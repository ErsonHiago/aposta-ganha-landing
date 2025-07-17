#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Complete list of all 11 landing pages
const LANDING_PAGES = [
  { name: 'fenix-1-real', folder: 'fenix', description: 'Landing page para promoção Fênix Sortuda - R$ 1,00 = 50 giros grátis', component: 'FenixLanding1' },
  { name: 'fenix-5-rodadas', folder: 'fenix', description: 'Landing page para promoção Fênix Sortuda - R$ 5,00 = 100 giros grátis', component: 'Landing5' },
  { name: 'fenix-10-rodadas', folder: 'fenix', description: 'Landing page para promoção Fênix Sortuda - R$ 10,00 = 125 giros grátis', component: 'Landing10' },
  { name: 'touro-1-real', folder: 'touro', description: 'Landing page para promoção Touro Sortudo - R$ 1,00 = 50 rodadas', component: 'TouroLanding1' },
  { name: 'touro-5-reais', folder: 'touro', description: 'Landing page para promoção Touro Sortudo - R$ 5,00 = 100 rodadas extras', component: 'TouroLanding5' },
  { name: 'touro-10-reais', folder: 'touro', description: 'Landing page para promoção Touro Sortudo - R$ 10,00 = 125 rodadas na hora', component: 'TouroLanding10' },
  { name: 'cachorro-1-real', folder: 'cachorro', description: 'Landing page para promoção Cachorro Sortudo - R$ 1,00 = 50 rodadas', component: 'CachorroLanding1' },
  { name: 'cachorro-5-reais', folder: 'cachorro', description: 'Landing page para promoção Cachorro Sortudo - R$ 5,00 = 100 rodadas', component: 'CachorroLanding5' },
  { name: 'aviator-1-real', folder: 'aviator', description: 'Landing page para promoção Aviator - R$ 1,00 = 5 rodadas', component: 'AviatorLanding1' },
  { name: 'aviator-5-reais', folder: 'aviator', description: 'Landing page para promoção Aviator - R$ 5,00 = 10 rodadas', component: 'AviatorLanding5' },
  { name: 'aviator-10-reais', folder: 'aviator', description: 'Landing page para promoção Aviator - R$ 10,00 = 20 rodadas extras', component: 'AviatorLanding10' }
];

const originalDir = process.cwd();
const startTime = Date.now();

console.log('🚀 Configurando e buildando todas as 11 landing pages...\n');

// Função para copiar arquivos recursivamente
const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

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
    "react-dom": "^18.3.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.462.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
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
        'exo': ['Exo', 'Arial', sans-serif],
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

// Template do tsconfig.node.json
const createTsConfigNode = () => ({
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
});

// Template do postcss.config.js
const createPostcssConfig = () => `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

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

// Content do index.css
const createIndexCss = () => `@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&family=Exo:wght@400;600;700;800&display=swap');

@font-face {
  font-family: 'DharmaGothicE-ExBold';
  src: url('https://storage.googleapis.com/ag-crm/2025-CRM-AG/Fonts/DharmaGothicE-ExBold.woff2') format('woff2'),
       url('https://storage.googleapis.com/ag-crm/2025-CRM-AG/Fonts/DharmaGothicE-ExBold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@layer base {
  :root { 
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;

    /* Enhanced custom colors for the casino theme */
    --orange-primary: 25 100% 55%;
    --orange-secondary: 20 100% 60%;
    --orange-vibrant: 22 100% 65%;
    --orange-bright: 39 100% 50%;
    --orange-deep: 16 100% 56%;
    --red-primary: 0 85% 60%;
    --red-secondary: 350 85% 65%;
    --dark-bg: 0 0% 8%;
    --card-dark: 0 0% 12%;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer components {
  .gradient-orange-text {
    background: linear-gradient(45deg, 
      #FF5F1F 0%, 
      #FFA500 25%, 
      #FFD700 50%, 
      #FFA500 75%, 
      #FF5F1F 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: neon-sweep 3s ease-in-out infinite;
    letter-spacing: 0.02em;
    font-weight: 900;
  }

  @supports not (background-clip: text) {
    .gradient-orange-text {
      color: #FFA500;
      background: none;
      letter-spacing: 0.02em;
      font-weight: 900;
    }
  }

  .casino-button {
    @apply relative overflow-hidden rounded-lg px-8 py-4 text-white font-bold uppercase tracking-wider transition-all duration-300;
    font-family: 'Exo', 'Arial', sans-serif;
    font-weight: 700;
    letter-spacing: 0.05em;
    background: linear-gradient(135deg, hsl(var(--orange-primary)), hsl(var(--orange-secondary)));
    box-shadow: 
      0 8px 25px hsl(var(--orange-primary) / 0.4),
      0 4px 15px hsl(var(--orange-primary) / 0.3);
  }

  .casino-button:hover {
    @apply transform scale-105;
    box-shadow: 
      0 12px 35px hsl(var(--orange-primary) / 0.6),
      0 6px 25px hsl(var(--orange-primary) / 0.4);
  }

  .hero-bg {
    background: radial-gradient(ellipse at center, hsl(var(--orange-primary) / 0.1) 0%, hsl(var(--dark-bg)) 70%);
  }

  .crisp-text {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.025em;
    font-weight: 800;
  }

  .font-dharma-exbold {
    font-family: 'DharmaGothicE-ExBold', 'DharmaGothicE', 'Impact', 'Arial Black', sans-serif;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .font-dharma {
    font-family: 'DharmaGothicE', 'Impact', 'Arial Black', sans-serif;
  }

  .font-exo {
    font-family: 'Exo', 'Arial', sans-serif;
  }
}`;

// Função para criar uma landing page completa
const createLandingPage = (landingPage) => {
  const landingPath = path.join(originalDir, landingPage.folder, landingPage.name);
  
  console.log(`📦 Criando estrutura para ${landingPage.folder}/${landingPage.name}...`);
  
  // Criar diretórios
  if (!fs.existsSync(landingPath)) {
    fs.mkdirSync(landingPath, { recursive: true });
  }
  
  const srcPath = path.join(landingPath, 'src');
  const pagesPath = path.join(srcPath, 'pages');
  const componentsPath = path.join(srcPath, 'components');
  const libPath = path.join(srcPath, 'lib');
  const hooksPath = path.join(srcPath, 'hooks');
  const publicPath = path.join(landingPath, 'public');

  // Criar todas as pastas necessárias
  [srcPath, pagesPath, componentsPath, libPath, hooksPath, publicPath].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

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
    path.join(landingPath, 'tsconfig.node.json'),
    JSON.stringify(createTsConfigNode(), null, 2)
  );
  
  fs.writeFileSync(
    path.join(landingPath, 'postcss.config.js'),
    createPostcssConfig()
  );
  
  fs.writeFileSync(
    path.join(landingPath, 'index.html'),
    createIndexHtml(landingPage.description)
  );

  // Criar index.css
  fs.writeFileSync(
    path.join(srcPath, 'index.css'),
    createIndexCss()
  );

  // Copiar componentes compartilhados
  const sharedComponentsPath = path.join(originalDir, 'src/components');
  if (fs.existsSync(sharedComponentsPath)) {
    copyDirectory(sharedComponentsPath, componentsPath);
  }
  
  // Copiar lib e hooks
  const sharedLibPath = path.join(originalDir, 'src/lib');
  if (fs.existsSync(sharedLibPath)) {
    copyDirectory(sharedLibPath, libPath);
  }
  
  const sharedHooksPath = path.join(originalDir, 'src/hooks');
  if (fs.existsSync(sharedHooksPath)) {
    copyDirectory(sharedHooksPath, hooksPath);
  }
  
  // Copiar public
  const sharedPublicPath = path.join(originalDir, 'public');
  if (fs.existsSync(sharedPublicPath)) {
    copyDirectory(sharedPublicPath, publicPath);
  }
  
  // Copiar página específica
  const sourcePage = path.join(originalDir, `src/pages/${landingPage.component}.tsx`);
  const targetPage = path.join(pagesPath, `${landingPage.component}.tsx`);
  
  if (fs.existsSync(sourcePage)) {
    fs.copyFileSync(sourcePage, targetPage);
  }
  
  // Criar App.tsx específico
  const appContent = `import React from 'react';
import ${landingPage.component} from './pages/${landingPage.component}';
import './index.css';

const App = () => {
  return <${landingPage.component} />;
};

export default App;`;
  
  fs.writeFileSync(path.join(srcPath, 'App.tsx'), appContent);
  
  // Criar main.tsx
  const mainContent = `import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);`;
  
  fs.writeFileSync(path.join(srcPath, 'main.tsx'), mainContent);
};

// Função para buildar uma landing page
const buildLandingPage = (landingPage) => {
  const landingPath = path.join(originalDir, landingPage.folder, landingPage.name);
  
  if (!fs.existsSync(landingPath)) {
    console.log(`❌ Pasta não encontrada: ${landingPage.folder}/${landingPage.name}`);
    return false;
  }

  try {
    console.log(`🔨 Building ${landingPage.folder}/${landingPage.name}...`);
    
    // Navegar para o diretório da landing page
    process.chdir(landingPath);
    
    // Executar build
    execSync('npm install --silent', { stdio: 'pipe' });
    execSync('npm run build', { stdio: 'pipe' });
    
    console.log(`✅ ${landingPage.folder}/${landingPage.name} - Build concluído com sucesso`);
    
    // Voltar ao diretório original
    process.chdir(originalDir);
    
    return true;
    
  } catch (error) {
    console.log(`❌ ${landingPage.folder}/${landingPage.name} - Erro no build:`, error.message);
    // Voltar ao diretório original mesmo em caso de erro
    process.chdir(originalDir);
    return false;
  }
};

// Executar processo completo
let successCount = 0;
let errorCount = 0;

// 1. Criar todas as estruturas
console.log('📁 Criando estruturas de diretórios...\n');
for (const landingPage of LANDING_PAGES) {
  try {
    createLandingPage(landingPage);
    console.log(`✅ Estrutura criada: ${landingPage.folder}/${landingPage.name}`);
  } catch (error) {
    console.log(`❌ Erro ao criar estrutura ${landingPage.folder}/${landingPage.name}:`, error.message);
    errorCount++;
  }
}

console.log('\n🔨 Iniciando builds...\n');

// 2. Buildar todas as landing pages
for (const landingPage of LANDING_PAGES) {
  const success = buildLandingPage(landingPage);
  if (success) {
    successCount++;
  } else {
    errorCount++;
  }
}

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n📊 Resumo Final:');
console.log(`✅ Sucessos: ${successCount}`);
console.log(`❌ Erros: ${errorCount}`);
console.log(`⏱️ Tempo total: ${duration}s`);

if (errorCount === 0) {
  console.log('\n🎉 Todas as 11 landing pages foram criadas e buildadas com sucesso!');
  console.log('\n📁 Pastas dist criadas:');
  LANDING_PAGES.forEach(lp => {
    const distPath = path.join(originalDir, lp.folder, lp.name, 'dist');
    if (fs.existsSync(distPath)) {
      console.log(`  ✅ ${lp.folder}/${lp.name}/dist/`);
    }
  });
  
  console.log('\n🚀 Todas as landing pages estão prontas para deploy individual!');
  console.log('Cada pasta dist/ pode ser enviada para qualquer servidor cloud.');
  
  process.exit(0);
} else {
  console.log('\n⚠️ Algumas landing pages falharam no build.');
  process.exit(1);
}