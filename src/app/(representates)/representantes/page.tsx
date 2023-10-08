import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'

import { OptionsComponent } from '@/components/representantes/OptionsComponent'

export default async function Representantes() {
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
        <div className="px-6 py-10 lg:px-20 flex flex-col bg-slate-50">
          {/* Container Filho numero 1 */}
          <div className="pb-10 flex flex-col gap-10 ">
            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              Selecione o seu estado para ver a lista de representantes
              disponíveis.
            </span>

            {/* Div com input */}
            <OptionsComponent />

            {/* Div internacional */}
            <div className="flex flex-col pt-20 gap-5">
              <span className="font-roboto text-lg font-medium text-slate-800 leading-[24px]">
                Sua empresa não está do Brasil?
              </span>

              <span className="font-roboto text-base font-normal text-slate-800 leading-[24px]">
                A CNCTech tem representantes em diversos países
              </span>

              {/* div button */}
              <div className="py-5">
                <button className="py-4 bg-[#1F2A68] shadow-md font-roboto rounded-[4px] lg:w-[320px] text-white font-medium text-base text-center w-full">
                  Representantes internacionais
                </button>
              </div>
            </div>

            {/* last div */}
            <div className="flex flex-col py-20 gap-5">
              <h3 className="font-roboto text-base font-medium text-slate-800 leading-[24px]">
                Problemas para encontrar um representante?
              </h3>

              <span className="font-roboto text-base font-normal text-slate-800 leading-[24px]">
                Clique no botão abaixo e fale com um de nossos atendentes
              </span>

              {/* link */}

              <span className="font-roboto text-base font-bold cursor-pointer pt-5 text-[#1F2A68] leading-[24px] underline">
                Fale com um atendente -&gt;{' '}
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
