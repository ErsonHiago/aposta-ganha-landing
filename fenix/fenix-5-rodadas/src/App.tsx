
import HeroSection from './components/HeroSection'
import FeaturesGrid from './components/FeaturesGrid'
import AdvantagesSection from './components/AdvantagesSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection 
        amount="R$5,00"
        spins={100}
        gameType="fenix"
        gameName="Fênix Sortuda"
        rodadasText="GIROS GRÁTIS"
        href="https://apostaganha.bet.br/cassino/jogos/fenix-sortuda?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_fenix-sortuda-5-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-"
      />
      <FeaturesGrid />
      <AdvantagesSection />
      <CTASection 
        amount="R$5,00"
        spins={100}
        gameName="Fênix Sortuda"
        href="https://apostaganha.bet.br/cassino/jogos/fenix-sortuda?utm_source=crm&utm_medium=e-mail&utm_campaign=Aposte-Ganhe&utm_content=e-mail_cassino_14-7-2025_slots_promocional_aposte-ganhe_-_br_apostadores-ativos-cassino_-_fenix-sortuda-5-14-07_personalizado_exclusividade_promocional_aposta-condicionada_foto-e-texto_-"
      />
      <Footer />
    </div>
  )
}

export default App
