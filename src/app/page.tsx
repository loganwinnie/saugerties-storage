import Image from 'next/image';
import UnitSection from "./components/UnitSection";
import LocationSection from './components/LocationSection';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <UnitSection />
      <LocationSection />
      <Footer/>
    </main>
  );
}
