import { Search, Home } from 'lucide-react'
import { MenuItem } from './MenuItem'
import { ProductSubMenu } from './CollapsibleSubMenus/Product'

export function AsideDesktop() {
  return (
    <aside className="hidden md:flex md:flex-col  w-[320px] border-r-[1px] border-[#1F2A68] ">
      {/* Search div */}{' '}
      <div className="grid grid-cols-2">
        {/* HomeNav Div */}
        <div className="border-b bg-slate-100 cursor-pointer border-r border-[#1F2A68] px-[25px] py-[30px] w-full flex items-center justify-center gap-[10px] h-[80px]">
          <Home size={20} className="text-[#1F2A68]" />
          <span className="uppercase text-base font-roboto font-medium leading-[20px] text-[#1F2A68]">
            Home
          </span>
        </div>

        {/* Search div */}
        <div className="border-b bg-slate-100 cursor-pointer border-[#1F2A68] px-[25px] py-[30px] w-full flex items-center justify-center gap-[10px] h-[80px]">
          <Search size={20} className="text-[#1F2A68]" />
          <span className="uppercase text-base font-roboto font-medium leading-[20px] text-[#1F2A68]">
            pesquisa
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-slate-100 h-screen">
        <ProductSubMenu />
        <MenuItem title="Serviços" icon="settings" />
        <MenuItem title="Contato" icon="contact" />
        <MenuItem title="Sobre" icon="info" />
      </div>
    </aside>
  )
}
