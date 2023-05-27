// Items do menu
import { Package, Settings, UserSquare2, Info } from 'lucide-react'
import iconMore from '../../../assets/iconMore.svg'
import Image from 'next/image'

interface MenuItems {
  icon: 'package' | 'settings' | 'contact' | 'info'
  title: string
}

export function MenuItem({ icon, title }: MenuItems) {
  return (
    <div className="border-b border-solid text-gray-700 border-slate-400 flex py-4 px-5 items-center justify-between bg-slate-100">
      <div className="flex gap-[22px]">
        {icon === 'package' && <Package />}
        {icon === 'contact' && <UserSquare2 />}
        {icon === 'info' && <Info />}
        {icon === 'settings' && <Settings />}
        <span>{title}</span>
      </div>
      <button>
        <Image
          src={iconMore}
          alt="Icone que desce o menu"
          width={24}
          height={24}
        />
      </button>
    </div>
  )
}
