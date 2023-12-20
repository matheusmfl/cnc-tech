import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { Header } from '@/components/home/header/Header'

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
// import { SectionFeedbacks } from '@/components/home/sectionFeedbacks/sectionFeedbacks'

export default function Home() {
  return (
    <main>
      <div className="md:fixed md:left-0 z-10">
        <Header />
        <AsideDesktop />
      </div>
      <div className="z-0 md:ml-[320px]">
        <HeroSection />
        <div className="md:grid md:grid-cols-3 md:px-20 md:py-10 md:bg-[#1F2A68]">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
        <Section4 />
        <Section4Middle />
        <NewSection5 />
        {/* <SectionFeedbacks /> */}
        {/* @ts-expect-error */}
        <Section9 />
        <Section10 />
        <Section11 />
        <Footer />
      </div>
    </main>
  )
}
