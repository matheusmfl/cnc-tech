import { create } from 'zustand'

interface BlogQuery {
  selectedTags: string[]
  toggleTag: (tagId: string) => void
}

export const useQueryStore = create<BlogQuery>((set) => ({
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
}))
