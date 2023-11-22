import Image from 'next/image';
import UnitSection from "./components/UnitSection";
import LocationSection from './components/LocationSection';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <UnitSection />
      <LocationSection />
      <ContactSection />
    </main>
  );
}
