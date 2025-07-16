
import React from 'react';

const NewFooter = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://storage.googleapis.com/ag-crm/CRM%20-%202025/TEMPLATE%20DE%20E-MAIL/aposte-no-verao/assets/bg-sm-bk.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Logo Principal */}
        <div className="text-center mb-8">
          <a 
            href="https://apostaganha.bet/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="https://storage.googleapis.com/ag-crm/novos-emails/brand-ag_white.png"
              alt="Aposta Ganha - logo"
              className="w-28 h-auto mx-auto"
              loading="lazy"
            />
          </a>
        </div>

        {/* Selo Jogo Responsável */}
        <div className="text-center mb-6">
          <a 
            href="https://apostaganha.bet/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="https://storage.googleapis.com/ag-crm/novos-emails/ag_jogoresponsavel.png"
              alt="Jogue com responsabilidade | +18"
              className="w-60 max-w-full h-auto mx-auto"
              loading="lazy"
            />
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="text-center mb-8">
          <p className="text-gray-200 font-semibold text-sm mb-4">
            <strong>Siga nossas redes e fique por dentro de tudo</strong>
          </p>
          
          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://t.me/apostaganhavip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img 
                src="https://storage.googleapis.com/ag-crm/novos-emails/Telegram.png"
                alt="Telegram - Aposta Ganha"
                className="w-8 h-8"
                loading="lazy"
              />
            </a>
            
            <a 
              href="https://x.com/apostaganhabet_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img 
                src="https://storage.googleapis.com/ag-crm/novos-emails/Twitter-x-fill.png"
                alt="Twitter X - Aposta Ganha"
                className="w-8 h-8"
                loading="lazy"
              />
            </a>
            
            <a 
              href="https://www.instagram.com/apostaganha.oficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img 
                src="https://storage.googleapis.com/ag-crm/novos-emails/Instagram.png"
                alt="Instagram - Aposta Ganha"
                className="w-8 h-8"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Texto Jurídico */}
        <div className="text-center mb-6">
          <p className="text-gray-300 text-xs leading-relaxed max-w-4xl mx-auto font-roboto">
            A plataforma{' '}
            <a 
              href="https://www.apostaganha.bet.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              www.apostaganha.bet.br
            </a>{' '}
            é operada pela{' '}
            <strong>APOSTA GANHA LOTERIAS LTDA,</strong> pessoa jurídica de direito privado, 
            inscrita sob o CNPJ: 56.001.749/0001-08, situado na Rua Maria de Lourdes Casé Porto, 
            Nº 51, Sala 407, CEP: 55.012-075, Caruaru-PE. Empresa licenciada pelas autoridades 
            reguladoras brasileiras autorizada pelo SPA/MF n° 251/2025.
          </p>
        </div>

        {/* Links Úteis */}
        <div className="text-center mb-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
            <a 
              href="https://apostaganha.bet.br/auth/cadastro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors font-roboto"
            >
              Cadastre-se
            </a>
            
            <a 
              href="https://ajuda.apostaganha.bet.br/hc/pt-br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors font-roboto"
            >
              Central de ajuda 💬
            </a>
            
            <a 
              href="https://www.apostaganha.bet.br/sobre-a-empresa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors font-roboto"
            >
              Sobre a empresa
            </a>
          </div>
        </div>

        {/* Direitos Reservados */}
        <div className="text-center pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-xs font-roboto">
            ©️ ApostaGanha - Todos os direitos reservados -{' '}
            <a 
              href="https://apostaganha.bet.br/politica-de-seguranca-e-privacidade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors underline"
            >
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
