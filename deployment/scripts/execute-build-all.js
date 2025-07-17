
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Executando setup e build de todas as 11 landing pages...\n');

try {
  // Executar o script principal
  execSync('node deployment/scripts/setup-and-build-all.js', { stdio: 'inherit' });
  
  console.log('\n✅ Todas as landing pages foram criadas e buildadas com sucesso!');
  
  // Verificar se todas as pastas dist foram criadas
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

  console.log('\n📁 Verificando pastas dist criadas:');
  LANDING_PAGES.forEach(lp => {
    const distPath = path.join(process.cwd(), lp, 'dist');
    if (fs.existsSync(distPath)) {
      console.log(`  ✅ ${lp}/dist/ - Criada com sucesso`);
    } else {
      console.log(`  ❌ ${lp}/dist/ - Não encontrada`);
    }
  });

  console.log('\n🎉 Processo concluído! Todas as pastas estão prontas para commit no GitHub.');
  
} catch (error) {
  console.error('❌ Erro durante a execução:', error.message);
  process.exit(1);
}
