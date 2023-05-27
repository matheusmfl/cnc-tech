/* eslint-disable no-unused-vars */
'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import logo from '../../assets/logo.svg'
import { Search, Menu, X, Package } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import iconMore from '../../assets/iconMore.svg'

// Items do menu

function MenuItem() {
  return (
    <div className="border-b border-solid border-slate-400 flex px-5 items-center justify-between bg-slate-100">
      <div>
        <Package />
        <span>Produtos</span>
      </div>
      <Image
        src={iconMore}
        alt="Icone que desce o menu"
        width={24}
        height={24}
      />
    </div>
  )
}

export function CollapsibleComponent() {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <header className="bg-slate-100 flex justify-between p-5 items-center">
        <Search size={20} />
        <Image src={logo} alt="Logo" />
        <Collapsible.Trigger asChild>
          <button>{open ? <Menu size={20} /> : <X size={20} />}</button>
        </Collapsible.Trigger>
      </header>
      <Collapsible.Content />
    </Collapsible.Root>
  )
}
