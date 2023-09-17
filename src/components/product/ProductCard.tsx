import Image from 'next/image'
import genericImg from '../../assets/productImage.png'

interface ProductProps {
  name: string
  img?: string
}

export function ProductCard({ name, img }: ProductProps) {
  return (
    <div className="flex flex-col shadow-lg rounded-lg h-[300px] w-[200px]">
      {/* Card com imagem */}
      <div className="bg-slate-200 px-5 py-5">
        <Image src={genericImg} alt="img do produto" />
      </div>
      <div className="px-6 py-3">
        <span className="font-roboto text-base leading-[24px] font-medium">
          {name}
        </span>
      </div>
    </div>
  )
}
