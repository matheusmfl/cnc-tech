import { SliderComponent } from '@/components/home/SliderComponent'
import { Header } from '@/components/home/header/Header'
import { HeroSection } from '@/components/home/heroSection/HeroSection'
import { Section1 } from '@/components/home/section1/Section1'
import { Section2 } from '@/components/home/section2/Section2'
import { Section3 } from '@/components/home/section3/Section3'
import { Section4 } from '@/components/home/section4/Section4'
import { Section5 } from '@/components/home/section5/Section5'

export default function Home() {
  return (
    <div className=" bg-blue-900">
      <Header />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}
