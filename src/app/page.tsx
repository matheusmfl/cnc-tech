import { Header } from '@/components/home/header/Header'
import { HeroSection } from '@/components/home/heroSection/HeroSection'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-blue-900">
      <Header />
      <HeroSection />
      <h1>Home</h1>
    </div>
  )
}
