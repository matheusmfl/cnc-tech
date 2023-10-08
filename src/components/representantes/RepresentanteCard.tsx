import Image from 'next/image'
import avatar from '@/assets/videoImageGeneric.png'

export function RepresentanteCard() {
  return (
    <div className="flex gap-4 border shadow-lg rounded-tr-[4px] rounded-br-[4px]">
      <Image
        src={avatar}
        alt="Avatar"
        className="h-[80px] w-[80px] object-cover rounded-tl-[4px] rounded-bl-[4px]"
      />
      <div className="py-3 px-3">
        <span className="font-roboto text-base font-medium leading-[24px] text-slate-800">
          Fabiana Cavalcanti
        </span>
      </div>
    </div>
  )
}
