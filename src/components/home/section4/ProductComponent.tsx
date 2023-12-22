import Image from 'next/image'

interface ProductsProps {
  imageUrl: string
  title: string
  subtitle: string
}
export function ProductComponent({ imageUrl, title, subtitle }: ProductsProps) {
  return (
    <div className="flex flex-col w-full rounded-lg shadow-xl">
      {/* Image DIV */}
      <div>
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt="Imagem do produto"
          className="max-h-[240px] rounded-t-lg object-cover"
        />
      </div>

      {/* Description DIV */}
      <div className="flex flex-col px-5 pt-5 pb-8 gap-3 bg-[#F1F5F9] rounded-b-lg">
        <h3 className="text-slate-800 font-roboto font-medium leading-[24px] text-lg">
          {title}
        </h3>

        <span className="line-clamp-4 font-roboto text-slate-900 font-normal leading-[24px] text-base">
          {subtitle}
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
