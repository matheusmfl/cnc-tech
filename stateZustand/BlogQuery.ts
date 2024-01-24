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
  page: number
  maxPages: number
  incrementPage: () => void
  decrementPage: () => void
  updateMaxPages: () => Promise<void>
}

export const useQueryStore = create<BlogQuery>((set, get) => ({
  page: 1,
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
    const selectedTags = get().selectedTags

    const posts =
      selectedTags.length === 0
        ? await getPostsFeed(1)
        : await getPostsByTags(selectedTags)

    return posts
  },
  incrementPage: () => {
    set((state) => {
      return { page: state.page + 1 }
    })
  },
  decrementPage: () => {
    set((state) => {
      // Garantindo que o valor mínimo seja 1
      const newPage = state.page > 1 ? state.page - 1 : 1
      return { page: newPage }
    })
  },
  updateMaxPages: async () => {
    const totalPosts = await getPostsFeedLength()
    console.log('Total Posts: ' + totalPosts)
    set({ maxPages: Math.ceil(totalPosts / 5) })
  },
}))
