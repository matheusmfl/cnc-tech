import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'
import { RepresentanteCard } from '@/components/representantes/RepresentanteCard'
import arrow from '@/assets/arrowBack.svg'
import Image from 'next/image'

export default function RepresentantesState() {
  return (
    <main>
      <div className="md:fixed md:left-0 z-10">
        <Header />
        <AsideDesktop />
      </div>
      <div className="z-0 md:ml-[320px]">
        <DesktopLogo />
        {/* Div azul com H1 */}
        <div className="py-10 px-6 lg:px-20 flex flex-col gap-6 bg-[#1F2A68]">
          <h1 className="font-roboto text-3xl font-medium leading-[36px] text-[#F8FAFC] ">
            <strong>Disponha</strong> da ajuda de nossos{' '}
            <strong>representantes</strong> nacionais e internacionais
          </h1>

          {/* divisor */}
          <div className="h-[4px] w-[80px] bg-white" />
        </div>

        {/* Segundo container */}
        <div className="px-6 py-10 lg:px-20 flex flex-col gap-6 bg-slate-50">
          <span className="font-roboto text-base font-medium leading-[20px] text-gray-700">
            Exibindo 06 representantes em Rio Grande do Sul
          </span>
          <RepresentanteCard />
          <RepresentanteCard />
          <div className="flex gap-1 items-center cursor-pointer">
            <Image src={arrow} alt="seta para voltar" />
            <span className="font-roboto text-base font-bold cursor-pointer text-gray-700 leading-[24px] underline">
              Voltar
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
