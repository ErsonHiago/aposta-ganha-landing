
import React from 'react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  ariaLabel?: string;
  href?: string;
}

const CTASection = ({ 
  ariaLabel = "Resgatar giros grátis",
  href = "https://apostaganha.bet.br/cassino/jogos/fenix-sortuda?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_fenix-sortuda-1-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-"
}: CTASectionProps) => {
  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="inline-block"
        >
          <Button className="casino-button text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
            <span>RESGATE AGORA E APROVEITE</span>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
