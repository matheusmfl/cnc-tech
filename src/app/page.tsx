import { Header } from '@/components/home/header/Header'
import { HeroSection } from '@/components/home/heroSection/HeroSection'
import { Section1 } from '@/components/home/section1/Section1'
import { Section2 } from '@/components/home/section2/Section2'
import { Section3 } from '@/components/home/section3/Section3'

export default function Home() {
  return (
    <div className=" bg-blue-900">
      <Header />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <h1>Home</h1>
    </div>
  )
}
