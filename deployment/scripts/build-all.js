
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LANDING_PAGES = [
  'fenix/fenix-1-real',
  'fenix/fenix-5-rodadas',
  'fenix/fenix-10-rodadas',
  'touro/touro-1-real',
  'touro/touro-5-reais',
  'touro/touro-10-reais',
  'cachorro/cachorro-1-real',
  'cachorro/cachorro-5-reais',
  'aviator/aviator-1-real',
  'aviator/aviator-5-reais',
  'aviator/aviator-10-reais'
];

console.log('🚀 Iniciando build de todas as landing pages...\n');

const startTime = Date.now();
let successCount = 0;
let errorCount = 0;
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

// Função para preparar uma landing page
const prepareLandingPage = (landingPagePath) => {
  const landingFullPath = path.join(originalDir, landingPagePath);
  
  // Copiar componentes compartilhados
  const sharedComponentsPath = path.join(originalDir, 'src/components');
  const targetComponentsPath = path.join(landingFullPath, 'src/components');
  
  if (fs.existsSync(sharedComponentsPath)) {
    copyDirectory(sharedComponentsPath, targetComponentsPath);
  }
  
  // Copiar lib e hooks
  const sharedLibPath = path.join(originalDir, 'src/lib');
  const targetLibPath = path.join(landingFullPath, 'src/lib');
  
  if (fs.existsSync(sharedLibPath)) {
    copyDirectory(sharedLibPath, targetLibPath);
  }
  
  const sharedHooksPath = path.join(originalDir, 'src/hooks');
  const targetHooksPath = path.join(landingFullPath, 'src/hooks');
  
  if (fs.existsSync(sharedHooksPath)) {
    copyDirectory(sharedHooksPath, targetHooksPath);
  }
  
  // Copiar public
  const publicPath = path.join(originalDir, 'public');
  const targetPublicPath = path.join(landingFullPath, 'public');
  
  if (fs.existsSync(publicPath)) {
    copyDirectory(publicPath, targetPublicPath);
  }
  
  // Criar arquivo App.tsx específico
  const appContent = `import React from 'react';
import ${getComponentName(landingPagePath)} from './pages/${getComponentName(landingPagePath)}';
import './index.css';

const App = () => {
  return <${getComponentName(landingPagePath)} />;
};

export default App;`;
  
  fs.writeFileSync(path.join(landingFullPath, 'src/App.tsx'), appContent);
  
  // Criar main.tsx
  const mainContent = `import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);`;
  
  fs.writeFileSync(path.join(landingFullPath, 'src/main.tsx'), mainContent);
  
  // Criar index.css específico
  const indexCssPath = path.join(originalDir, 'fenix/fenix-5-rodadas/src/index.css');
  const targetIndexCssPath = path.join(landingFullPath, 'src/index.css');
  
  if (fs.existsSync(indexCssPath)) {
    fs.copyFileSync(indexCssPath, targetIndexCssPath);
  }
  
  // Criar pasta pages e copiar componente específico
  const pagesPath = path.join(landingFullPath, 'src/pages');
  if (!fs.existsSync(pagesPath)) {
    fs.mkdirSync(pagesPath, { recursive: true });
  }
  
  // Mapear páginas para componentes
  const pageMapping = {
    'fenix/fenix-1-real': 'FenixLanding1',
    'fenix/fenix-5-rodadas': 'Landing5',
    'fenix/fenix-10-rodadas': 'Landing10',
    'touro/touro-1-real': 'TouroLanding1',
    'touro/touro-5-reais': 'TouroLanding5',
    'touro/touro-10-reais': 'TouroLanding10',
    'cachorro/cachorro-1-real': 'CachorroLanding1',
    'cachorro/cachorro-5-reais': 'CachorroLanding5',
    'aviator/aviator-1-real': 'AviatorLanding1',
    'aviator/aviator-5-reais': 'AviatorLanding5',
    'aviator/aviator-10-reais': 'AviatorLanding10'
  };
  
  const componentName = pageMapping[landingPagePath];
  const sourcePage = path.join(originalDir, `src/pages/${componentName}.tsx`);
  const targetPage = path.join(pagesPath, `${componentName}.tsx`);
  
  if (fs.existsSync(sourcePage)) {
    fs.copyFileSync(sourcePage, targetPage);
  }
};

const getComponentName = (landingPagePath) => {
  const mapping = {
    'fenix/fenix-1-real': 'FenixLanding1',
    'fenix/fenix-5-rodadas': 'Landing5',
    'fenix/fenix-10-rodadas': 'Landing10',
    'touro/touro-1-real': 'TouroLanding1',
    'touro/touro-5-reais': 'TouroLanding5',
    'touro/touro-10-reais': 'TouroLanding10',
    'cachorro/cachorro-1-real': 'CachorroLanding1',
    'cachorro/cachorro-5-reais': 'CachorroLanding5',
    'aviator/aviator-1-real': 'AviatorLanding1',
    'aviator/aviator-5-reais': 'AviatorLanding5',
    'aviator/aviator-10-reais': 'AviatorLanding10'
  };
  return mapping[landingPagePath];
};

for (const landingPage of LANDING_PAGES) {
  const landingPath = path.join(originalDir, landingPage);
  
  if (!fs.existsSync(landingPath)) {
    console.log(`❌ Pasta não encontrada: ${landingPage}`);
    errorCount++;
    continue;
  }

  try {
    console.log(`📦 Building ${landingPage}...`);
    
    // Preparar estrutura da landing page
    prepareLandingPage(landingPage);
    
    // Navegar para o diretório da landing page
    process.chdir(landingPath);
    
    // Executar build
    execSync('npm install --silent', { stdio: 'pipe' });
    execSync('npm run build', { stdio: 'pipe' });
    
    console.log(`✅ ${landingPage} - Build concluído com sucesso`);
    successCount++;
    
    // Voltar ao diretório original
    process.chdir(originalDir);
    
  } catch (error) {
    console.log(`❌ ${landingPage} - Erro no build:`, error.message);
    errorCount++;
    // Voltar ao diretório original mesmo em caso de erro
    process.chdir(originalDir);
  }
}

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n📊 Resumo do Build:');
console.log(`✅ Sucessos: ${successCount}`);
console.log(`❌ Erros: ${errorCount}`);
console.log(`⏱️ Tempo total: ${duration}s`);

if (errorCount === 0) {
  console.log('\n🎉 Todas as landing pages foram buildadas com sucesso!');
  console.log('\n📁 Pastas dist criadas:');
  LANDING_PAGES.forEach(lp => {
    const distPath = path.join(originalDir, lp, 'dist');
    if (fs.existsSync(distPath)) {
      console.log(`  ✅ ${lp}/dist`);
    }
  });
  process.exit(0);
} else {
  console.log('\n⚠️ Algumas landing pages falharam no build.');
  process.exit(1);
}
