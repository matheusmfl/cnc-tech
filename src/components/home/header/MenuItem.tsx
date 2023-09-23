// Items do menu
'use client'
import { Package, Settings, UserSquare2, Info, X, Plus } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { ProductSubMenu } from './CollapsibleSubMenus/Product'

interface MenuItems {
  icon: 'package' | 'settings' | 'contact' | 'info'
  title: string
}

export function MenuItem({ icon, title }: MenuItems) {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className="border-b border-solid text-gray-700 border-slate-400 flex py-4 px-5 items-center justify-between bg-slate-100">
        <div className="flex gap-[22px]">
          {icon === 'package' && <Package />}
          {icon === 'contact' && <UserSquare2 />}
          {icon === 'info' && <Info />}
          {icon === 'settings' && <Settings />}
          <span>{title}</span>
        </div>
        <Collapsible.Trigger asChild>
          <button>{open ? <X size={20} /> : <Plus size={20} />}</button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="CollapsibleContent">
        <ProductSubMenu />
        <MenuItem title="Serviços" icon="settings" />
        <MenuItem title="Contato" icon="contact" />
        <MenuItem title="Sobre" icon="info" />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
