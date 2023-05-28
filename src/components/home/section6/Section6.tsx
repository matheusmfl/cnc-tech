import { SectionNameComponent } from '../SectionNameComponent'
import logo from '../../../assets/logo.svg'
import Image from 'next/image'

export function Section6() {
  return (
    <section className="flex flex-col px-5 py-10 gap-10 bg-slate-100">
      {/* Nome da Sessão */}
      <SectionNameComponent>
        <h2 className="title text-black">
          Quem somos e os <strong>valores</strong> que{' '}
          <strong>cultivamos</strong>
        </h2>
      </SectionNameComponent>

      {/* Segundo container que contém texto e Logo */}
      <div className="flex flex-col gap-3">
        {/* div que contém a logo */}
        <div className="w-full flex items-center justify-center">
          <Image src={logo} alt="logo da empresa" />
        </div>
        <span className="text-slate-900 text-sm text-justify leading-6">
          A CNCTech Machinery é uma empresa fundada em 2016 em Bento
          Gonçalves-RS, inicialmente dedicada à prestação de assistência técnica
          em CNC para a indústria moveleira. Com o tempo, a empresa expandiu seu
          negócio para compra e venda de máquinas semi-novas e, posteriormente,
          começou a vender máquinas novas de empresas líderes mundiais em alta
          tecnologia, à medida que surgiam oportunidades no mercado.
        </span>
      </div>
    </section>
  )
}
