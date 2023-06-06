import { getCategories } from '../../../../../sanity/sanity-utils'
import { Tags } from './Tags'

export async function TagsContainer() {
  const categories = await getCategories()
  return (
    <div className="px-5 py-10 bg-slate-100 flex flex-row rounded-[4px] flex-wrap gap-2">
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
