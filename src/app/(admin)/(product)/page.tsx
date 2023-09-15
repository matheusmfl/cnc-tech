import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { Header } from '@/components/home/header/Header'

export default function Product() {
  return (
    <main>
      <div className="md:fixed md:left-0 z-10">
        <Header />
        <AsideDesktop />
      </div>

      {/* Container principal */}
      <section className="flex flex-col gap-5">
        <h2 className="font-roboto font-medium text-[#1F2A68] leading-[24px] text-lg md:text-[24px]">
          Centro de furação
        </h2>
        {/* divisor */}

        <div className="h-[4px] w-[80px] bg-[#1F2A68]" />
      </section>
    </main>
  )
}
