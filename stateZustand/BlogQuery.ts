import { create } from 'zustand'
import { getPostsByTags, getPostsFeed } from '../sanity/sanity-utils'
import { Posts } from '@/@types/post'

interface BlogQuery {
  selectedTags: string[]
  toggleTag: (tagId: string) => void
  getPosts: () => Promise<Posts[]>
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

    const posts =
      selectedTags.length === 0
        ? await getPostsFeed()
        : await getPostsByTags(selectedTags)

    return posts
  },
}))
