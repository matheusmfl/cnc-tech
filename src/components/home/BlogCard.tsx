import Image from 'next/image'
import imgGeneric from '../../assets/genericImg.svg'

export function BlogCard() {
  return (
    <div className="rounded-3xl overflow-hidden flex flex-col shadow-xl">
      <div className="aspect-square h-60 flex items-center justify-center bg-white">
        <Image src={imgGeneric} alt="Generic Image" />
      </div>
      <div className="flex flex-col gap-4 bg-slate-100 px-4 py-5">
        <h3 className="title text-slate-800">
          Como um maquinário integrado te ajuda a produzir mais?
        </h3>

        <span className="subtitle text-slate-900">
          Desde gestão automatizada de estoque até a diminuição de intervenções
          manuais, logística e gestão de recursos de forma inteligente
        </span>

        <div className="w-full pt-7 flex justify-end">
          <a
            href="/"
            className=" text-right w-full text-slate-800 font-bold text-lg hover:underline"
          >
            Leia mais
          </a>
        </div>
      </div>
    </div>
  )
}
