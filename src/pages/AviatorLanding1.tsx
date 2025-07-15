
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import OrangeDivider from '@/components/OrangeDivider';

const AviatorLanding1 = () => {
  const aviatorHref = "https://apostaganha.bet.br/cassino/jogos/aviator?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_aviator-1-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-";

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection 
        amount="R$1,00"
        spins={5}
        ariaLabel="Resgatar 5 rodadas no Aviator"
        gameType="aviator"
        desktopImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_aviator_desktop.png"
        mobileImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_aviator_mobile.png"
        gameName="Aviator"
        rodadasText="RODADAS"
        actionText="DEPOSITE E APOSTE APENAS"
        href={aviatorHref}
      />
      <OrangeDivider />
      <AdvantagesSection />
      <OrangeDivider />
      <FeaturesGrid />
      <OrangeDivider />
      <CTASection 
        ariaLabel="Resgatar 5 rodadas no Aviator"
        href={aviatorHref}
      />
      <Footer />
    </div>
  );
};

export default AviatorLanding1;
