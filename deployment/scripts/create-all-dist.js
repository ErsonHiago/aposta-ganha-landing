
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LANDING_PAGES = [
  { name: 'fenix-1-real', folder: 'fenix', component: 'FenixLanding1' },
  { name: 'fenix-5-rodadas', folder: 'fenix', component: 'Landing5' },
  { name: 'fenix-10-rodadas', folder: 'fenix', component: 'Landing10' },
  { name: 'touro-1-real', folder: 'touro', component: 'TouroLanding1' },
  { name: 'touro-5-reais', folder: 'touro', component: 'TouroLanding5' },
  { name: 'touro-10-reais', folder: 'touro', component: 'TouroLanding10' },
  { name: 'cachorro-1-real', folder: 'cachorro', component: 'CachorroLanding1' },
  { name: 'cachorro-5-reais', folder: 'cachorro', component: 'CachorroLanding5' },
  { name: 'aviator-1-real', folder: 'aviator', component: 'AviatorLanding1' },
  { name: 'aviator-5-reais', folder: 'aviator', component: 'AviatorLanding5' },
  { name: 'aviator-10-reais', folder: 'aviator', component: 'AviatorLanding10' }
];

const originalDir = process.cwd();

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

// Função para preparar e buildar uma landing page
const buildLandingPage = (landingPage) => {
  const landingPath = path.join(originalDir, landingPage.folder, landingPage.name);
  
  console.log(`🔨 Preparando e buildando ${landingPage.folder}/${landingPage.name}...`);
  
  try {
    // Criar estrutura src
    const srcPath = path.join(landingPath, 'src');
    const pagesPath = path.join(srcPath, 'pages');
    const componentsPath = path.join(srcPath, 'components');
    const libPath = path.join(srcPath, 'lib');
    const hooksPath = path.join(srcPath, 'hooks');
    const publicPath = path.join(landingPath, 'public');

    [srcPath, pagesPath, componentsPath, libPath, hooksPath, publicPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

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
    
    // Criar index.css
    const indexCssContent = `@tailwind base;
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
    --orange-primary: 25 100% 55%;
    --orange-secondary: 20 100% 60%;
    --orange-vibrant: 22 100% 65%;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Roboto', sans-serif;
  }
}

.gradient-orange-text {
  background: linear-gradient(45deg, #FF5F1F 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FF5F1F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.casino-button {
  @apply relative overflow-hidden rounded-lg px-8 py-4 text-white font-bold uppercase tracking-wider transition-all duration-300;
  background: linear-gradient(135deg, hsl(var(--orange-primary)), hsl(var(--orange-secondary)));
}`;
    
    fs.writeFileSync(path.join(srcPath, 'index.css'), indexCssContent);
    
    // Criar App.tsx
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
    process.chdir(originalDir);
    return false;
  }
};

console.log('🚀 Iniciando criação de todas as pastas dist...\n');

let successCount = 0;
let errorCount = 0;

for (const landingPage of LANDING_PAGES) {
  const success = buildLandingPage(landingPage);
  if (success) {
    successCount++;
  } else {
    errorCount++;
  }
}

console.log('\n📊 Resumo Final:');
console.log(`✅ Sucessos: ${successCount}`);
console.log(`❌ Erros: ${errorCount}`);

if (errorCount === 0) {
  console.log('\n🎉 Todas as 11 landing pages foram criadas e buildadas com sucesso!');
  console.log('\n📁 Pastas dist criadas:');
  LANDING_PAGES.forEach(lp => {
    const distPath = path.join(originalDir, lp.folder, lp.name, 'dist');
    if (fs.existsSync(distPath)) {
      console.log(`  ✅ ${lp.folder}/${lp.name}/dist/`);
    }
  });
} else {
  console.log('\n⚠️ Algumas landing pages falharam no build.');
}
