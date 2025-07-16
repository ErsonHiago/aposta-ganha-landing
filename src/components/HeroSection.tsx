
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  amount?: string;
  spins?: number;
  ariaLabel?: string;
  gameType?: 'fenix' | 'touro' | 'cachorro' | 'aviator';
  backgroundImage?: string;
  desktopImage?: string;
  mobileImage?: string;
  gameName?: string;
  rodadasText?: string;
  actionText?: string;
  href?: string;
}

const HeroSection = ({ 
  amount = "R$1,00", 
  spins = 50, 
  ariaLabel = "Resgatar giros grátis", 
  gameType = "fenix",
  backgroundImage,
  desktopImage,
  mobileImage,
  gameName = "Fênix Sortuda",
  rodadasText = "GIROS GRÁTIS",
  actionText = "APOSTOU",
  href = "https://apostaganha.bet.br/cassino/jogos/fenix-sortuda?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_fenix-sortuda-1-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-"
}: HeroSectionProps) => {
  const defaultImages = {
    fenix: "https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/exe1%20(1).png",
    touro: "/lovable-uploads/4480be22-79c5-4acd-b0ec-ef8d05ca085d.png",
    cachorro: "https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_cachorro_desktop.png",
    aviator: "https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_aviator_desktop.png"
  };

  const defaultMobileImages = {
    fenix: "https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_fenix_mobile.png",
    touro: "/lovable-uploads/4480be22-79c5-4acd-b0ec-ef8d05ca085d.png",
    cachorro: "https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_cachorro_desktop.png",
    aviator: "https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_aviator_desktop.png"
  };

  const finalDesktopImage = desktopImage || backgroundImage || defaultImages[gameType];
  const finalMobileImage = mobileImage || backgroundImage || defaultMobileImages[gameType];

  const slotText = gameType === 'aviator' ? 'NO SLOT' : 'NA SLOT';
  
  return (
    <section className="relative min-h-screen hero-bg overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Background Image Desktop */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={finalDesktopImage}
            alt={`${gameName} Background Desktop`}
            className="w-full h-full object-cover object-center opacity-80"
            loading="eager"
          />
        </div>
        
        {/* Content Desktop */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[85vh]">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none gradient-orange-text font-dharma-exbold">
                APOSTOU,<br />
                GANHOU!
              </h1>
              
              <div className="space-y-2 sm:space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white px-2 sm:px-0 font-dharma-exbold">
                  {actionText} <span className="text-orange-500">{amount}</span> E{' '}
                  <span className="text-orange-500">GANHE {spins} {rodadasText}</span>{' '}
                  {slotText} {gameName.toUpperCase()}!
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl font-bold text-white font-dharma-exbold">
                  É SIMPLES: JOGOU, GANHOU.
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <a 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="block"
                >
                  <Button className="casino-button text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                    <span>RESGATE AGORA E APROVEITE</span>
                  </Button>
                </a>
                
                <p className="text-xs sm:text-sm text-gray-400 px-2 sm:px-0">
                  * <a 
                      href="https://ajuda.apostaganha.bet.br/hc/pt-br" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-orange-500 transition-colors"
                    >
                      Confira o regulamento
                    </a>
                </p>
              </div>
            </div>
            
            {/* Right Content - Game Image Area */}
            <div className="relative lg:block hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden min-h-screen flex flex-col">
        {/* Background Image Mobile - Top Section */}
        <div className="relative flex-1 min-h-[65vh]">
          <img 
            src={finalMobileImage}
            alt={`${gameName} Background Mobile`}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95"></div>
        </div>
        
        {/* Content Mobile - Bottom Section */}
        <div className="relative z-10 bg-black/95 px-4 py-6 min-h-[35vh] flex flex-col justify-center">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-black leading-none gradient-orange-text font-dharma-exbold">
              APOSTOU,<br />
              GANHOU!
            </h1>
            
            <div className="space-y-2">
              <p className="text-lg font-bold text-white font-dharma-exbold">
                {actionText} <span className="text-orange-500">{amount}</span> E{' '}
                <span className="text-orange-500">GANHE {spins} {rodadasText}</span>{' '}
                {slotText} {gameName.toUpperCase()}!
              </p>
              
              <p className="text-base font-bold text-white font-dharma-exbold">
                É SIMPLES: JOGOU, GANHOU.
              </p>
            </div>
            
            <div className="space-y-2">
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="block"
              >
                <Button className="casino-button text-base w-full px-6 py-3">
                  <span>RESGATE AGORA E APROVEITE</span>
                </Button>
              </a>
              
              <p className="text-xs text-gray-400">
                * <a 
                    href="https://ajuda.apostaganha.bet.br/hc/pt-br" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-orange-500 transition-colors"
                  >
                    Confira o regulamento
                  </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
