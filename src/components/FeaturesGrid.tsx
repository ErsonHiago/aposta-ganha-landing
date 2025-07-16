
import React from 'react';
import { TrendingUp, Gamepad2, Zap, Gift } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'SUPER ODDS'
  },
  {
    icon: Gamepad2,
    title: 'SLOTS DIVERTIDOS'
  },
  {
    icon: Zap,
    title: 'PLATAFORMA RÁPIDA E INTUITIVA'
  },
  {
    icon: Gift,
    title: 'PROMOÇÕES IMPERDÍVEIS'
  }
];

const FeaturesGrid = () => {
  return (
    <section className="bg-black py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <a
                key={index}
                href="https://apostaganha.bet.br/esportes/futebol/internacional-clubes/liga/uefa-champions-league"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${feature.title}`}
                className="feature-card group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full flex items-center justify-center orange-gradient group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base text-center leading-tight px-2 font-dharma-exbold crisp-text">
                  {feature.title}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
