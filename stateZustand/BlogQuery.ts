import { create } from 'zustand'
import {
  getPostsByTags,
  getPostsFeed,
  getPostsFeedLength,
} from '../sanity/sanity-utils'
import { Posts } from '@/@types/post'

interface BlogQuery {
  selectedTags: string[]
  toggleTag: (tagId: string) => void
  getPosts: () => Promise<Posts[] | undefined>
  atualPage: number
  maxPages: number
  incrementPage: () => void
  decrementPage: () => void
  updateMaxPages: () => Promise<void>
  setAtualPage: (page: number) => void
  loading: boolean
  setLoading: (isLoading: boolean) => void
}

export const useQueryStore = create<BlogQuery>((set, get) => ({
  loading: false,
  atualPage: 1,
  maxPages: 1,
  selectedTags: [],
  toggleTag: (tagId) => {
    set((state) => {
      if (state.selectedTags.includes(tagId)) {
        return { selectedTags: state.selectedTags.filter((id) => id !== tagId) }
      } else {
        return { selectedTags: [...state.selectedTags, tagId] }
      }
    })
  },
  getPosts: async () => {
    set({ loading: true })

    try {
      const { atualPage, selectedTags } = get()

      const posts =
        selectedTags.length === 0
          ? await getPostsFeed(atualPage)
          : await getPostsByTags(selectedTags)

      return posts
    } finally {
      setTimeout(() => {
        set({ loading: false })
      }, 1000)
    }
  },
  setAtualPage: (page) => {
    set({ atualPage: page })
  },
  incrementPage: () => {
    set((state) => {
      // Verifica se a página atual é menor que o maxPages antes de incrementar
      if (state.atualPage < state.maxPages) {
        return { atualPage: state.atualPage + 1 }
      }
      return state // Retorna o estado atual sem fazer alterações
    })
  },
  setLoading: (isLoading) => {
    set({ loading: isLoading })
  },
  decrementPage: () => {
    set((state) => {
      // Garantindo que o valor mínimo seja 1
      const newPage = state.atualPage > 1 ? state.atualPage - 1 : 1
      return { atualPage: newPage }
    })
  },
  updateMaxPages: async () => {
    const totalPosts = await getPostsFeedLength()
    console.log('Total Posts: ' + totalPosts)
    set({ maxPages: Math.ceil(totalPosts / 5) })
  },
}))
