import { SearchComponent } from '@/components/blog/searchComponents/searchComponent'
// import { getCategories } from '../../../../sanity/sanity-utils'

export default async function BlogHome() {
  // const categories = await getCategories()

  return (
    <>
      <SearchComponent />
    </>
  )
}
