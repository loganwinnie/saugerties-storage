import Image from 'next/image'
import UnitSection from "./components/UnitSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <UnitSection />
    </main>
  )
}
