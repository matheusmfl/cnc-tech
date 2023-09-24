import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'
import Image from 'next/image'
import genericImg from '../../../../../assets/ProductImgGeneric.jpeg'
import {
  getCategoriesBySlug,
  getProductBySlug,
} from '../../../../../../sanity/sanity-utils'

type Props = {
  params: { categoria: string; productSlug: string }
}
export default async function ProductPage({ params }: Props) {
  const category = params.categoria
  const slug = params.productSlug
  const categoryTitle = await getCategoriesBySlug(category)
  const product = await getProductBySlug(slug)

  console.log(product)
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
          <div className="flex flex-col">
            {/* div navegação */}
            <div className="px-10 py-[10px] bg-slate-100">
              <span className="font-roboto text-base font-normal text-[#075985] ">
                Home &gt; {categoryTitle} &gt; Centro de furação
              </span>
            </div>
            {/* Div com imagem do produto */}
            <div className="w-full md:h-[440px] overflow-hidden">
              <Image
                src={genericImg}
                alt="Imagem do produto"
                className="object-cover"
              />
            </div>

            {/* Container Texto */}

            <div className="px-10 py-5 flex flex-col">
              {/* Container Specifications */}
              <div className="flex flex-col gap-5">
                <span className="font-roboto text-lg font-normal leading-[28px] text-[#334155] ">
                  Categoria: Centro de furação
                </span>

                <h2 className="font-roboto text-slate-900 text-3xl font-medium leading-[44px] ">
                  Modelo: MSZ600AC
                </h2>

                {/* divisor */}
                <div className="h-[4px] w-[120px] bg-[#1F2A68]" />

                {/* Div contendo texto Body */}

                <div className="py-5">
                  <span>
                    Centro de furação CNC para indústria Fácil operação,
                    treinamento simples e sem necessidade de operador
                    especializado Essa série de centro de furação possui três
                    cabeçotes potentes o que resulta em 40% maior produtividade
                    do que as máquinas convencionais Trabalha seis lados da peça
                    em um só processo, adequada para alta produção A alta
                    precisão melhora a consistência da montagem das peças
                    Equipada com dispositivo de detecção de tamanho do painel,
                    que evita danos causados por erro de etiquetagem Equipada
                    com leitor de código de barra para selecionar programas
                    automaticamente. Esta máquina pode ser introduzida em uma
                    linha de produção, na qual as peças podem sair diretamente
                    da coladeira de bordas através de esteiras de alimentação
                    automática para o processo de furação.
                  </span>

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
