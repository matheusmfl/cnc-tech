import { SearchComponent } from '@/components/blog/searchComponents/searchComponent'
import { TagsContainer } from '@/components/blog/searchComponents/tagsComponents/TagsContainer'

// import { getCategories } from '../../../../sanity/sanity-utils'

export default async function BlogHome() {
  // const categories = await getCategories()

  return (
    <>
      <SearchComponent />
      {/* @ts-expect-error Async Server Component */}
      <TagsContainer />
    </>
  )
}
