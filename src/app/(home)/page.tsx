import { Footer } from '@/components/home/footer/Footer'

import { HeroSection } from '@/components/home/heroSection/HeroSection'
import { Section1 } from '@/components/home/section1/Section1'
import { Section10 } from '@/components/home/section10/Section10'
import { Section11 } from '@/components/home/section11/Section11'
import { Section2 } from '@/components/home/section2/Section2'
import { Section3 } from '@/components/home/section3/Section3'
import { Section4 } from '@/components/home/section4/Section4'
import { Section5 } from '@/components/home/section5/Section5'
import { Section6 } from '@/components/home/section6/Section6'
import { Section7 } from '@/components/home/section7/Section7'
import { Section8 } from '@/components/home/section8/Section8'
import { Section9 } from '@/components/home/section9/Section9'
import { SectionFeedbacks } from '@/components/home/sectionFeedbacks/sectionFeedbacks'

export default function Home() {
  return (
    <div className=" bg-blue-900">
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <SectionFeedbacks />
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />
    </div>
  )
}
