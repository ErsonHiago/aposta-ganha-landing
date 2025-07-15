
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  amount?: string;
  spins?: number;
  ariaLabel?: string;
}

const HeroSection = ({ 
  amount = "R$1,00", 
  spins = 50, 
  ariaLabel = "Resgatar 50 giros grátis na slot Fênix Sortuda" 
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen hero-bg overflow-hidden">
      {/* Background Phoenix */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/126df665-ea72-4d6b-bd97-0b826f9c1aec.png" 
          alt="Phoenix Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-orange-500 text-glow-orange leading-none">
              APOSTOU<br />
              GANHOU!
            </h1>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white px-2 sm:px-0">
                APOSTE <span className="text-orange-500">{amount}</span> E{' '}
                <span className="text-orange-500">GANHE {spins} GIROS GRÁTIS</span>{' '}
                NA SLOT FÊNIX SORTUDA!
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white">
                É SIMPLES: JOGOU, GANHOU.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="https://apostaganha.bet.br/cassino/jogos/fenix-sortuda?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_fenix-sortuda-1-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-"
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
          
          {/* Right Content - Phoenix Image Area */}
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
