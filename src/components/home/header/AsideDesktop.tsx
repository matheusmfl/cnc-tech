import { Search, Home } from 'lucide-react'
import { MenuItem } from './MenuItem'
import { ProductSubMenu } from './CollapsibleSubMenus/Product'
import Link from 'next/link'

export function AsideDesktop() {
  return (
    <aside className="hidden md:flex md:flex-col bg-slate-100  w-[320px] border-r-[1px] border-[#1F2A68] ">
      {/* Search div */}{' '}
      <div className="grid grid-cols-2">
        {/* HomeNav Div */}
        <Link href={'/'}>
          <div className="border-b bg-slate-100 cursor-pointer border-r border-[#1F2A68] px-[25px] py-[30px] w-full flex items-center justify-center gap-[10px] h-[80px]">
            <Home size={20} className="text-[#1F2A68]" />
            <span className="uppercase text-base font-roboto font-medium leading-[20px] text-[#1F2A68]">
              Home
            </span>
          </div>
        </Link>

        {/* Search div */}
        <div className="border-b bg-slate-100 cursor-pointer border-[#1F2A68] py-[30px] w-full flex items-center justify-center gap-[10px] h-[80px]">
          <Search size={20} className="text-[#1F2A68]" />
          <span className="uppercase text-base font-roboto font-medium leading-[20px] text-[#1F2A68]">
            pesquisa
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-slate-100 h-screen">
        <ProductSubMenu />
        <MenuItem title="Serviços" icon="settings" doted />
        <MenuItem title="Contato" icon="contact" doted />
        <a href="/blog">
          <MenuItem title="Blog Cnc-Tech" icon="blog" doted={false} />
        </a>

        <MenuItem title="Sobre" icon="info" doted />
      </div>
    </aside>
  )
}
