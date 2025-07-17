import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import NewFooter from '@/components/NewFooter';
import OrangeDivider from '@/components/OrangeDivider';

const FenixLanding1 = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection 
        amount="R$1,00" 
        spins={50} 
        ariaLabel="Resgatar 50 giros grátis na slot Fênix Sortuda"
        gameType="fenix"
        gameName="Fênix Sortuda"
        rodadasText="GIROS GRÁTIS"
        actionText="APOSTE"
      />
      <OrangeDivider />
      <AdvantagesSection />
      <OrangeDivider />
      <FeaturesGrid />
      <OrangeDivider />
      <CTASection 
        ariaLabel="Resgatar 50 giros grátis na slot Fênix Sortuda"
      />
      <NewFooter />
    </div>
  );
};

export default FenixLanding1;