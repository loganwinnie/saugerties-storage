import Image from 'next/image';
import UnitSection from "./components/UnitSection";
import LocationSection from './components/LocationSection';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection/>
      <DetailsSection/>
      <UnitSection/>
      <LocationSection/>
    </main>
  );
}
