import { Search } from 'lucide-react'
import { MenuItem } from './MenuItem'

export function AsideDesktop() {
  return (
    <aside className="hidden md:flex md:flex-col  w-[320px] ">
      {/* Search div */}{' '}
      <div className="border bg-slate-100 cursor-pointer border-[#1F2A68] px-[25px] py-[30px] w-full flex items-center justify-center gap-[10px] h-[80px]">
        <Search size={20} className="text-[#1F2A68]" />
        <span className="uppercase text-base font-roboto font-medium leading-[20px] text-[#1F2A68]">
          pesquisa
        </span>
      </div>
      <div className="flex flex-col bg-slate-100 h-screen">
        <MenuItem title="Produtos" icon="package" />
        <MenuItem title="Serviços" icon="settings" />
        <MenuItem title="Contato" icon="contact" />
        <MenuItem title="Sobre" icon="info" />
      </div>
    </aside>
  )
}
