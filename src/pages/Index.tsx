
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import NewFooter from '@/components/NewFooter';
import OrangeDivider from '@/components/OrangeDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <OrangeDivider />
      <AdvantagesSection />
      <OrangeDivider />
      <FeaturesGrid />
      <OrangeDivider />
      <CTASection />
      <NewFooter />
    </div>
  );
};

export default Index;
