import { Footer } from '@/components/home/footer/Footer'

import { HeroSection } from '@/components/home/heroSection/HeroSection'
import { Section1 } from '@/components/home/section1/Section1'
import { Section10 } from '@/components/home/section10/Section10'
import { Section11 } from '@/components/home/section11/Section11'
import { Section2 } from '@/components/home/section2/Section2'
import { Section3 } from '@/components/home/section3/Section3'
import { Section4Middle } from '@/components/home/section4.5/Section4middle'
import { Section4 } from '@/components/home/section4/Section4'
import { NewSection5 } from '@/components/home/section5/NewSection5'

import { Section9 } from '@/components/home/section9/Section9'
import { SectionFeedbacks } from '@/components/home/sectionFeedbacks/sectionFeedbacks'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section4Middle />
      <NewSection5 />
      {/* <Section6 />
      <Section7 />
      <Section8 /> */}
      <SectionFeedbacks />
      {/* @ts-expect-error */}
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />
    </main>
  )
}
