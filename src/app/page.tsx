import { Header } from '@/components/home/header/Header'
import { HeroSection } from '@/components/home/heroSection/HeroSection'
import { Section1 } from '@/components/home/section1/Section1'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-blue-900">
      <Header />
      <HeroSection />
      <Section1 />
      <h1>Home</h1>
    </div>
  )
}
