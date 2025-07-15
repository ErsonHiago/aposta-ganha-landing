
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import OrangeDivider from '@/components/OrangeDivider';

const Landing5 = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection 
        amount="R$5,00" 
        spins={100} 
        ariaLabel="Resgatar 100 giros grátis na slot Fênix Sortuda"
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
        ariaLabel="Resgatar 100 giros grátis na slot Fênix Sortuda"
      />
      <Footer />
    </div>
  );
};

export default Landing5;
