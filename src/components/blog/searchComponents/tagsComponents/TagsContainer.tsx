'use client'

import { useEffect, useState } from 'react'
import { getCategories } from '../../../../../sanity/sanity-utils'
import { Tags } from './Tags'
import { Category } from '@/@types/category'

export function TagsContainer() {
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const toggleTag = (tagId: string) => {
    setActiveTags((prevActiveTags) => {
      console.log('prevActiveTags:', prevActiveTags)
      console.log('tagId:', tagId)
      if (prevActiveTags.includes(tagId)) {
        return prevActiveTags.filter((id) => id !== tagId)
      } else {
        return [...prevActiveTags, tagId]
      }
    })
  }

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
        const isActive = activeTags.includes(_id)

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
