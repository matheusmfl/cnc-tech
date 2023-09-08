import Image from 'next/image'
import genericImage from '../../../assets/ProductImgGeneric.jpeg'

export function ProductComponent() {
  return (
    <div className="flex flex-col w-full rounded-xl shadow-xl">
      {/* Image DIV */}
      <div>
        <Image
          src={genericImage}
          alt="Imagem do produto"
          className="max-h-[240px]"
        />
      </div>

      {/* Description DIV */}
      <div className="flex flex-col px-5 pt-5 pb-8 gap-3 bg-[#F1F5F9]">
        <h3 className="text-slate-800 font-roboto font-medium leading-[24px] text-lg">
          Robô FEEDBOT na CNC DRILLTEQ V-500
        </h3>

        <span className="line-clamp-4 font-roboto text-slate-900 font-normal leading-[24px] text-base">
          Manuseio seguro, preciso e automático de peças para uma produção mais
          eficiente
        </span>

        <div className="text-right flex h-10 items-end justify-end">
          <a
            href="/"
            className="font-roboto text-lg leading-[24px] font-medium text-slate-800"
          >
            Mais informações
          </a>
        </div>
      </div>
    </div>
  )
}
