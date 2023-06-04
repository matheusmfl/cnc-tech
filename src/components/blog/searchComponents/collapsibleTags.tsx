'use client'
import { MenuItem } from '@/components/home/header/MenuItem'
import * as Collapsible from '@radix-ui/react-collapsible'

import { ChevronDown, ChevronUp } from 'lucide-react'

import { useState } from 'react'

export function CollapsibleTags() {
  /* eslint-disable no-unused-vars */

  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className="border-b border-[#CBD5E1] flex justify-between px-2 py-3 transition">
        <span className="text-slate-900 text-base leading-5 font-medium">
          Categorias
        </span>
        <Collapsible.Trigger asChild>
          <button>
            {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="CollapsibleContent">
        <MenuItem title="Produtos" icon="package" />
        <MenuItem title="Serviços" icon="settings" />
        <MenuItem title="Contato" icon="contact" />
        <MenuItem title="Sobre" icon="info" />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
