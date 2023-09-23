import Image from 'next/image'
import genericImg from '../../assets/productImage.png'

interface ProductProps {
  name: string
  img?: string
}

export function ProductCard({ name, img }: ProductProps) {
  return (
    <div className="flex flex-col shadow-lg rounded-lg w-full md:w-[200px]">
      {/* Card com imagem */}
      <div className="bg-slate-200 px-5 py-5 rounded-t-lg">
        <Image
          src={genericImg}
          alt="img do produto"
          className="rounded-t-lg object-cover md:h-[186px]  md:object-contain"
        />
      </div>
      <div className="px-6 py-3 h-min-[28px]">
        <span className="font-roboto text-base leading-[24px] font-medium">
          {name}
        </span>
      </div>
    </div>
  )
}
