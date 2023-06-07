'use client'

import { useEffect, useState } from 'react'
import { getCategories } from '../../../../../sanity/sanity-utils'
import { Tags } from './Tags'
import { Category } from '@/@types/category'
import { useQueryStore } from '../../../../../stateZustand/BlogQuery'

export function TagsContainer() {
  const { selectedTags, toggleTag } = useQueryStore()
  const [categories, setCategories] = useState<Category[]>([])

  // Carregar as categorias ao montar o componente
  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories()
      setCategories(fetchedCategories)
    }

    fetchCategories()
  }, [])

  return (
    <div className="px-5 py-10 bg-slate-100 flex flex-row rounded-[4px] flex-wrap gap-2">
      {categories.map((category) => {
        const { _id, title } = category
        const isActive = selectedTags.includes(_id)

        return (
          <div key={_id}>
            <Tags
              title={title}
              isActive={isActive}
              onClick={() => toggleTag(_id)}
            />
          </div>
        )
      })}
    </div>
  )
}
