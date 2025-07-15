
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LANDING_PAGES = [
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

console.log('🚀 Iniciando deploy de todas as landing pages...\n');

const startTime = Date.now();
let successCount = 0;
let errorCount = 0;

for (const landingPage of LANDING_PAGES) {
  const landingPath = path.join(__dirname, '../../', landingPage);
  
  if (!fs.existsSync(landingPath)) {
    console.log(`❌ Pasta não encontrada: ${landingPage}`);
    errorCount++;
    continue;
  }

  try {
    console.log(`🚀 Deploying ${landingPage}...`);
    
    // Navegar para o diretório da landing page
    process.chdir(landingPath);
    
    // Verificar se existe script de deploy
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts.deploy) {
      execSync('npm run deploy', { stdio: 'inherit' });
      console.log(`✅ ${landingPage} - Deploy concluído com sucesso`);
      successCount++;
    } else {
      console.log(`⚠️ ${landingPage} - Script de deploy não encontrado`);
    }
    
  } catch (error) {
    console.log(`❌ ${landingPage} - Erro no deploy:`, error.message);
    errorCount++;
  }
}

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n📊 Resumo do Deploy:');
console.log(`✅ Sucessos: ${successCount}`);
console.log(`❌ Erros: ${errorCount}`);
console.log(`⏱️ Tempo total: ${duration}s`);

if (errorCount === 0) {
  console.log('\n🎉 Todas as landing pages foram deployadas com sucesso!');
} else {
  console.log('\n⚠️ Algumas landing pages falharam no deploy.');
}
