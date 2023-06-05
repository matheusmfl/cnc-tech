'use client'
/* eslint-disable prettier/prettier */


import * as Collapsible from '@radix-ui/react-collapsible'

import { ChevronDown, ChevronUp } from 'lucide-react'

import { useState } from 'react'
import { getCategories } from '../../../../sanity/sanity-utils'
import { Tags } from './tagsComponents/Tags'
// import { TagsContainer } from './tagsComponents/TagsContainer'

async function TagsContainer() {
  const categories = await getCategories()
  return (
    <div className="px-5 py-10 flex flex-row flex-wrap gap-2">
      {categories.map((category) => {
        return (
          <div key={category._id}>
            <Tags title={category.title} />
          </div>
        )
      })}
    </div>
  )
}


export async function CollapsibleTags() {
  /* eslint-disable no-unused-vars */

  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className='rounded-[4px]'>
      <div
        className={`border-b border-[#CBD5E1] ${open ? 'bg-slate-100 rounded-[4px]' : 'bg-inherit'
          } flex justify-between px-2 py-3 transition`}
      >
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
        <div>
          <h1>teste</h1>
          {/* @ts-expect-error Async Server Component */}
          <TagsContainer />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
