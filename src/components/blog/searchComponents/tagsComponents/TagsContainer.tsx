import { getCategories } from '../../../../../sanity/sanity-utils'
import { Tags } from './Tags'

export async function TagsContainer() {
  const categories = await getCategories()
  return (
    <div className="px-5 py-10 flex flex-col flex-wrap gap-2">
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
