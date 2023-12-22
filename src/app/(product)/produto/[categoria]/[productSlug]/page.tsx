import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { Header } from '@/components/home/header/Header'
import Image from 'next/image'
import {
  builder,
  getCategoriesBySlug,
  getProductBySlug,
} from '../../../../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

type Props = {
  params: { categoria: string; productSlug: string }
}
export default async function ProductPage({ params }: Props) {
  const category = params.categoria
  const slug = params.productSlug
  const categoryTitle = await getCategoriesBySlug(category)
  const product = await getProductBySlug(slug)
  const productSpecifications = product.specifications
  console.log(product.body)

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

          {/* Container Geral */}
          <div className="flex flex-col bg-slate-100">
            {/* div navegação */}
            <div className="px-10 py-[10px] bg-slate-100">
              <span className="font-roboto text-base font-normal text-[#075985] ">
                <Link href={'/'}>Home &gt;</Link>{' '}
                <Link href={`/produto/${category}`}>{categoryTitle} &gt; </Link>
                {product.title}
              </span>
            </div>
            {/* Div com imagem do produto */}
            <div className="w-full md:h-[440px] md:relative overflow-hidden hidden md:block">
              <Image
                src={product.imageUrl}
                fill
                alt="Imagem do produto"
                className="object-cover"
              />
            </div>

            <div className="w-full md:h-[440px] overflow-hidden  md:hidden">
              <Image
                src={product.imageUrl}
                width={400}
                height={400}
                alt="Imagem do produto"
                className="object-cover"
              />
            </div>

            {/* Container Texto */}

            <div className="px-10 py-5 flex flex-col">
              {/* Container Specifications */}
              <div className="flex flex-col gap-5">
                <span className="font-roboto text-lg font-normal leading-[28px] text-[#334155] ">
                  Categoria: {categoryTitle}
                </span>

                <h2 className="font-roboto text-slate-900 text-3xl font-medium leading-[44px] ">
                  Modelo: {product.title}
                </h2>

                {/* divisor */}
                <div className="h-[4px] w-[120px] bg-[#1F2A68]" />

                {/* Div contendo texto Body */}

                <div className="py-5">
                  <PortableText
                    value={product.body}
                    components={{
                      block: {
                        h1: ({ children }) => (
                          <h1 className="text-3xl text-slate-900 font-bold leading-9 pb-2">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-2xl text-slate-900 font-bold leading-8 pb-2">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl text-slate-900 font-bold leading-6 pb-2">
                            {children}
                          </h3>
                        ),

                        h4: ({ children }) => (
                          <h4 className="text-lg text-slate-900 font-bold leading-6 pb-2">
                            {children}
                          </h4>
                        ),
                        normal: ({ children }) => (
                          <p className="text-base text-slate-900 font-normal leading-6 pb-2">
                            {children}
                          </p>
                        ),
                      },
                      listItem: {
                        number: ({ children }) => (
                          <li style={{ listStyleType: 'decimal' }}>
                            {children}
                          </li>
                        ),
                        bullet: ({ children }) => (
                          <li
                            style={{
                              listStyleType: 'disc',
                              marginLeft: '16px',
                            }}
                          >
                            {children}
                          </li>
                        ),
                      },
                      marks: {
                        link: ({ value, children }) => (
                          <a
                            href={`${value.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 hover:underline"
                          >
                            {children}
                          </a>
                        ),
                      },
                      types: {
                        image: ({ value }) => (
                          <div className="text-4xl pb-2">
                            <Image
                              src={builder.image(value).toString()}
                              alt={value.alt}
                              width={1000}
                              height={1000}
                            />
                          </div>
                        ),
                      },
                    }}
                  />

                  {/* Div specifications */}

                  {productSpecifications && (
                    <div className="flex flex-col gap-[10px]">
                      <span className="font-roboto text-xl font-medium leading-[28px] text-slate-900">
                        Informações técnicas:
                      </span>
                      {/* Container que simula a Tabela */}
                      <div className="w-full flex flex-col shadow-2xl">
                        {productSpecifications.map(
                          (specification: any, index: number) => {
                            // Verifique se o índice é par ou ímpar
                            const isEven = index % 2 === 0

                            // Defina classes CSS com base no resultado da verificação
                            const rowClasses = isEven
                              ? 'bg-gray-100' // Cor para índices pares
                              : 'bg-gray-200' // Cor para índices ímpares
                            return (
                              // Container Contendo a chave e valor
                              <div
                                key={specification._key}
                                className="grid grid-cols-2 "
                              >
                                <div
                                  className={`p-[10px] h-full border-l-2 border-gray-400 ${rowClasses}`}
                                >
                                  <span className="font-roboto text-lg font-normal leading-[28px] text-slate-800">
                                    {specification.key}
                                  </span>
                                </div>
                                <div
                                  className={`p-[10px] h-full border-l-2 border-gray-400 ${rowClasses}`}
                                >
                                  <span className="font-roboto text-lg font-normal leading-[28px] text-slate-800">
                                    {specification.value}
                                  </span>
                                </div>
                              </div>
                            )
                          },
                        )}
                      </div>
                    </div>
                  )}

                  {/* Div CTA */}

                  <div className="pt-10 pb-20">
                    <button className="rounded-[4px] px-6 py-4 text-center bg-[#1F2A68] font-roboto text-lg font-medium text-white">
                      Falar com representante
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}
