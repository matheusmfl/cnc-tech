import { SectionNameComponent } from '../SectionNameComponent'
import imgGereneric from '../../../assets/atendimento.png'
import Image from 'next/image'

export function Section7() {
  return (
    <section className="flex flex-col px-5 py-10 gap-10 bg-slate-200">
      {/* Nome da Sessão */}
      <SectionNameComponent>
        <h2 className="title text-black">
          <strong>Atendimento</strong> e suporte especializado
        </h2>
      </SectionNameComponent>

      {/* Segundo container que contém texto e Logo */}
      <div className="flex flex-col gap-3">
        <span className="text-slate-900 text-sm text-left leading-6">
          Além das vendas, a CNCTech está preparada para dar todo apoio técnico
          para nossos clientes. Possuímos assistência técnica qualificada,
          estoque de peças de manutenção, treinamentos, telediagnóstico, entre
          outras capacitações para auxiliar nossos clientes no seu crescimento.
        </span>

        {/* <div className="aspect-square rounded-lg shadow-2xl flex items-center bg-white justify-center"> */}
        <Image
          src={imgGereneric}
          alt="Imagem Genérica"
          className="w-full h-full mt-2"
          width={1200}
          height={1200}
        />
        {/* </div> */}
      </div>
    </section>
  )
}
