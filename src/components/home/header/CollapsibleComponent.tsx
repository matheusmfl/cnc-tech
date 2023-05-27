/* eslint-disable no-unused-vars */
'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import logo from '../../../assets/logo.svg'
import { Search, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { MenuItem } from './MenuItem'

export function CollapsibleComponent() {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <header className="bg-slate-100 w-full color-gray-700 leading-5 flex justify-between p-5 items-center border-b border-solid border-slate-400">
        <Search size={20} />
        <Image src={logo} alt="Logo" />
        <Collapsible.Trigger asChild>
          <button>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </Collapsible.Trigger>
      </header>
      <Collapsible.Content>
        <MenuItem title="Produtos" icon="package" />
        <MenuItem title="Serviços" icon="settings" />
        <MenuItem title="Contato" icon="contact" />
        <MenuItem title="Sobre" icon="info" />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
