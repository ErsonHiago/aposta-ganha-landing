
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
    <section className="bg-black py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center orange-gradient group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg text-center leading-tight px-2">
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
