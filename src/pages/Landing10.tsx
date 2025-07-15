
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import OrangeDivider from '@/components/OrangeDivider';

const Landing10 = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection 
        amount="R$10,00" 
        spins={125} 
        ariaLabel="Resgatar 125 giros grátis na slot Fênix Sortuda" 
      />
      <OrangeDivider />
      <AdvantagesSection />
      <OrangeDivider />
      <FeaturesGrid />
      <OrangeDivider />
      <CTASection 
        ariaLabel="Resgatar 125 giros grátis na slot Fênix Sortuda"
      />
      <Footer />
    </div>
  );
};

export default Landing10;
