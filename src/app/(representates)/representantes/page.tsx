import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'

export default function Representantes() {
  return (
    <main>
      <div className="md:fixed md:left-0 z-10">
        <Header />
        <AsideDesktop />
      </div>
      <div className="z-0 md:ml-[320px]">
        <DesktopLogo />
        {/* Div azul com H1 */}
        <div className="py-10 px-6 flex flex-col gap-6 bg-[#1F2A68]">
          <h1 className="font-roboto text-3xl font-medium leading-[36px] text-[#F8FAFC] ">
            <strong>Disponha</strong> da ajuda de nossos{' '}
            <strong>representantes</strong>
            nacionais e internacionais
          </h1>

          {/* divisor */}
          <div className="h-[4px] w-[80px] bg-white" />
        </div>

        {/* Segundo container */}
        <div className="px-6 py-10 flex flex-col bg-slate-50">
          {/* Container Filho numero 1 */}
          <div className="pb-10 flex flex-col gap-10 ">
            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              Selecione o seu estado para ver a lista de representantes
              disponíveis.
            </span>

            {/* Div com input */}
            <div className="flex flex-col gap-[10px]">
              <span className="font-roboto text-sm font-normal text-gray-700">
                Selecionar
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
