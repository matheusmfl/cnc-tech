import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'
import { ProductCard } from '@/components/product/ProductCard'
import {
  getCategoriesBySlug,
  getProductsByCategorySlug,
} from '../../../../../sanity/sanity-utils'
import Link from 'next/link'

type Props = {
  params: { categoria: string }
}

interface IProdutos {
  title: string
  imageUrl: string
  slug: {
    current: string
  }
}
export default async function Product({ params }: Props) {
  const category = params.categoria
  const produtos = await getProductsByCategorySlug(category)
  const categoryTitle = await getCategoriesBySlug(category)

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
              {categoryTitle}
            </h2>
            {/* divisor */}

            <div className="h-[4px] w-[80px] bg-[#1F2A68]" />

            {/* Exibindo ... máquinas */}
            <span className="text-[#9CA3AF] text-base leading-[24px] font-normal font-roboto">
              Exibindo{' '}
              <strong className="text-black">0{produtos.length}</strong>{' '}
              máquinas
            </span>

            {/* Div com os Cards */}
            <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-5 py-5 ">
              {/* <ProductCard name="MSZ600AC" /> */}
              {produtos.map((produto: IProdutos, i: number) => {
                return (
                  <Link
                    href={`/produto/${category}/${produto.slug.current}`}
                    className="cursor-pointer"
                    key={i}
                  >
                    <ProductCard
                      name={produto.title}
                      imgUrl={produto.imageUrl}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}
