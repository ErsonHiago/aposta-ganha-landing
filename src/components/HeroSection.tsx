
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-black text-orange-500 text-glow-orange leading-none">
              APOSTOU<br />
              GANHOU!
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-bold text-white">
                APOSTE <span className="text-orange-500">R$1,00</span> E{' '}
                <span className="text-orange-500">GANHE 50 GIROS GRÁTIS</span>{' '}
                NA SLOT FÊNIX SORTUDA!
              </p>
              
              <p className="text-lg lg:text-xl font-bold text-white">
                É SIMPLES: JOGOU, GANHOU.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button className="casino-button text-lg">
                <span>RESGATE AGORA E APROVEITE</span>
              </Button>
              
              <p className="text-sm text-gray-400">
                * <a href="#" className="underline hover:text-orange-500 transition-colors">Confira o regulamento</a>
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
