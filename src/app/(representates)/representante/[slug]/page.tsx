import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'
import arrow from '@/assets/arrowBack.svg'
import Image from 'next/image'
import avatar from '@/assets/atendimento.png'
import Link from 'next/link'

export default async function pageBySlug() {
  return (
    <main>
      <div className="md:fixed md:left-0 z-10">
        <Header />
        <AsideDesktop />
      </div>
      <div className="z-0 md:ml-[320px]">
        <DesktopLogo />
        {/* Div azul com H1 */}
        <div className="py-10 px-6 lg:px-20 flex flex-col gap-6 text-white bg-[#1F2A68]">
          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src={arrow}
              alt="seta para voltar"
              className="text-white bg-white"
            />
            <Link href={'/representantes'}>
              <span className="font-roboto text-base font-bold cursor-pointer  leading-[24px] underline">
                Voltar
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <Image
              src={avatar}
              alt="avatar"
              className="rounded-full shadow-md border border-white w-[80px] h-[80px] object-cover"
            />
            <h1 className="font-roboto text-3xl font-medium leading-[36px] text-[#F8FAFC] ">
              Matheus Fonteles
            </h1>

            {/* divisor */}
            <div className="h-[4px] w-[80px] bg-white mx-auto" />
          </div>
        </div>

        {/* Segundo container */}
        <div className="px-6 py-10 lg:px-20 flex flex-col bg-slate-50">
          {/* Container Filho numero 1 */}
          <div className="pb-10 flex flex-col gap-6 ">
            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              Sou representante de vendas da CNCTech a 5 anos e ajudarei a
              encontrar a melhor solução para o seu negócio.
            </span>

            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              <strong>E-mail: </strong> matheusfonteles@hotmail.com
            </span>
            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              <strong>Telefone: </strong> 051 9-9999-9999
            </span>
            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              <strong>Horário de atendimento: </strong> Segunda à sexta das 9h
              às 18h
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
