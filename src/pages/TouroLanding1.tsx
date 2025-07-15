
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import OrangeDivider from '@/components/OrangeDivider';

const TouroLanding1 = () => {
  const touroHref = "https://apostaganha.bet.br/cassino/jogos/p-tourosortudo?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_touro-sortudo-3-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-";

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection 
        amount="R$1,00"
        spins={50}
        ariaLabel="Resgatar 50 rodadas no Touro Sortudo"
        gameType="touro"
        desktopImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_touro_desktop.png"
        mobileImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_touro_mobile.png"
        gameName="Touro Sortudo"
        rodadasText="RODADAS"
        actionText="APOSTOU"
        href={touroHref}
      />
      <OrangeDivider />
      <AdvantagesSection />
      <OrangeDivider />
      <FeaturesGrid />
      <OrangeDivider />
      <CTASection 
        ariaLabel="Resgatar 50 rodadas no Touro Sortudo"
        href={touroHref}
      />
      <Footer />
    </div>
  );
};

export default TouroLanding1;
