/* eslint-disable no-unused-vars */
'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import logo from '../../../assets/logo.png'
import { Search, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { MenuItem } from './MenuItem'
import Link from 'next/link'
import { ProductSubMenu } from './CollapsibleSubMenus/Product'

export function CollapsibleComponent() {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <header className="bg-slate-100 md:w-[320px] md:hidden w-full color-gray-700 leading-5 flex justify-between p-5 items-center border-b-2 border-solid border-slate-400">
        <Search size={20} />
        <Link href={'/'}>
          <Image src={logo} alt="Logo" className="w-[142px]" />
        </Link>
        <Collapsible.Trigger asChild>
          <button>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </Collapsible.Trigger>
      </header>
      <Collapsible.Content className="CollapsibleContent">
        <ProductSubMenu />
        <MenuItem title="Serviços" icon="settings" doted />
        <MenuItem title="Contato" icon="contact" doted />
        <MenuItem title="Sobre" icon="info" doted />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
