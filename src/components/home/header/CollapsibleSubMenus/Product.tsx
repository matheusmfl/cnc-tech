'use client'
import { Package, X, Plus } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useEffect, useState } from 'react'
import { getProductCategories } from '../../../../../sanity/sanity-utils'

interface Icategories {
  title: string
  _id: string
}

export function ProductSubMenu() {
  const [categories, setCategories] = useState<Icategories[]>([])
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categorys = await getProductCategories()
        setCategories(categorys)
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
      }
    }

    fetchCategories()
  }, [])
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div
        className={`border-b border-solid 
        ${open ? 'text-white' : 'text-[#1F2A68]'}
        border-[#1F2A68] flex py-4 px-5 items-center justify-between 
        ${open ? 'bg-[#1F2A68]' : 'bg-slate-100'}`}
      >
        <div className="flex gap-[22px]">
          <Package />
          <span
            className={`font-roboto text-base font-medium 
            ${open ? 'text-white' : 'text-[#1F2A68]'}`}
          >
            Produtos
          </span>
        </div>
        <Collapsible.Trigger asChild>
          <button>{open ? <X size={20} /> : <Plus size={20} />}</button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="CollapsibleContent">
        {categories.map((category) => {
          return (
            <div
              key={category._id}
              className="px-[22px] py-5 hover:bg-slate-200 cursor-pointer border-b border-[#1F2A68]"
            >
              <span className="font-roboto text-base text-[#1F2A68] font-medium leading-[20px]">
                {category.title}
              </span>
            </div>
          )
        })}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
