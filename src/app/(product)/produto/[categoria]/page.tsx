import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByCategory } from '../../../../../sanity/sanity-utils'

interface Params {
  category: string
}
export default async function Product({ category }: Params) {
  const produtos = await getProductsByCategory(category)

  console.log(produtos)
  return (
    <>
      <main className="w-full">
        <div className="md:fixed md:left-0 z-10">
          <Header />
          <AsideDesktop />
        </div>

        {/* Container principal */}
        <section className="z-0 md:ml-[320px]">
          {/* Desktop logo com separator */}
          <DesktopLogo />

          {/* Container Geral */}
          <div className="px-6 py-8 md:px-20 md:py-10 flex flex-col gap-5">
            <h2 className="font-roboto font-medium text-[#1F2A68] leading-[24px] text-lg md:text-[24px]">
              Centro de furação
            </h2>
            {/* divisor */}

            <div className="h-[4px] w-[80px] bg-[#1F2A68]" />

            {/* Exibindo ... máquinas */}
            <span className="text-[#9CA3AF] text-base leading-[24px] font-normal font-roboto">
              Exibindo <strong className="text-black">06</strong> máquinas
            </span>

            {/* Div com os Cards */}
            <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-5 py-5">
              <ProductCard name="MSZ600AC" />
              <ProductCard name="MSZ600AC" />
              <ProductCard name="MSZ600AC" />
              <ProductCard name="MSZ600AC" />
              <ProductCard name="MSZ600AC" />
              <ProductCard name="MSZ600AC" />
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}
