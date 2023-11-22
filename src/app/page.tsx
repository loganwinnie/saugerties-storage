import Image from 'next/image'
import UnitSection from "./components/UnitSection"
import LocationCard from './components/LocationCard';
import LocationSection from './components/LocationSection'
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection/>
      <UnitSection />
      <LocationSection/>
    </main>
  )
}
