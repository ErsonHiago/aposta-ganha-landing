
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import NewFooter from '@/components/NewFooter';
import OrangeDivider from '@/components/OrangeDivider';

const AviatorLanding5 = () => {
  const aviatorHref = "https://apostaganha.bet.br/cassino/jogos/aviator?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_aviator-5-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-";

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection 
        amount="R$5,00"
        spins={10}
        ariaLabel="Receber 10 rodadas no Aviator"
        gameType="aviator"
        desktopImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_aviator_desktop.png"
        mobileImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_aviator_mobile.png"
        gameName="Aviator"
        rodadasText="RODADAS"
        actionText="APOSTOU"
        href={aviatorHref}
      />
      <OrangeDivider />
      <AdvantagesSection />
      <OrangeDivider />
      <FeaturesGrid />
      <OrangeDivider />
      <CTASection 
        ariaLabel="Receber 10 rodadas no Aviator"
        href={aviatorHref}
      />
      <NewFooter />
    </div>
  );
};

export default AviatorLanding5;
