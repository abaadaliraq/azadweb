import { TopBar } from "@/components/layout/TopBar";
import { Hero } from "@/components/sections/Hero";
import { I18nProvider } from "@/lib/i18n";
import { Footer } from "@/src/components/layout/Footer";
import { AbaadIntro } from "@/src/components/sections/AbaadIntro";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { FilmIntro } from "@/src/components/sections/FilmIntro";
import { HouseOfAntiquesIntro } from "@/src/components/sections/HouseOfAntiquesIntro";
import { JourneyIntro } from "@/src/components/sections/JourneyIntro";

export default function Home() {
  return (
    <I18nProvider>
      <TopBar />
      <main>
        <Hero />
        <JourneyIntro />
        <FilmIntro />
        <HouseOfAntiquesIntro />
        <AbaadIntro />
        <ContactSection />
        <Footer />
      </main>
    </I18nProvider>
  );
}
