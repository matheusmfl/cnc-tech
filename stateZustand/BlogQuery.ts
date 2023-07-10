import { create } from 'zustand'
import { getPostsByTags, getPostsFeed } from '../sanity/sanity-utils'
import { Posts } from '@/@types/post'

interface BlogQuery {
  selectedTags: string[]
  toggleTag: (tagId: string) => void
  getPosts: () => Promise<Posts[] | undefined>
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const useQueryStore = create<BlogQuery>((set, get) => ({
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
    const selectedTags = get().selectedTags
    const selectedPages = get().currentPage

    if (selectedPages && selectedPages < 2) {
      const posts =
        selectedTags.length === 0
          ? await getPostsFeed()
          : await getPostsByTags(selectedTags)

      return posts
    } else if (selectedPages && selectedPages > 1) {
      console.log('entrou')
      const posts =
        selectedTags.length === 0
          ? await getPostsFeed(selectedPages)
          : await getPostsByTags(selectedTags)

      return posts
    }
  },
  currentPage: 1,
  setCurrentPage: (page) => {
    set({ currentPage: page })
  },
}))
