
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import NewFooter from '@/components/NewFooter';
import OrangeDivider from '@/components/OrangeDivider';

const CachorroLanding5 = () => {
  const cachorroHref = "https://apostaganha.bet.br/cassino/jogos/p-cachorro-sortudo?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_cachorro-sortudo-3_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-";

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection 
        amount="R$5,00"
        spins={100}
        ariaLabel="Receber 100 rodadas no Cachorro Sortudo"
        gameType="cachorro"
        desktopImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_cachorro_desktop.png"
        mobileImage="https://storage.googleapis.com/ag-crm/2025-CRM-AG/Imgs/lp_cahorro_mobile.png"
        gameName="Cachorro Sortudo"
        rodadasText="RODADAS"
        actionText="APOSTE"
        href={cachorroHref}
      />
      <OrangeDivider />
      <AdvantagesSection />
      <OrangeDivider />
      <FeaturesGrid />
      <OrangeDivider />
      <CTASection 
        ariaLabel="Receber 100 rodadas no Cachorro Sortudo"
        href={cachorroHref}
      />
      <NewFooter />
    </div>
  );
};

export default CachorroLanding5;
