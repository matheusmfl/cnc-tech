import { Posts } from '@/@types/post'
import {
  getPostsByHighlights,
  getPostsByTags,
} from '../../../sanity/sanity-utils'
import { BlogCard } from './BlogCard'

export async function SectionDestaques() {
  const posts: Posts[] = await getPostsByHighlights()
  const postsByCategory: Posts[] = await getPostsByTags([
    '09a52fa9-4fe8-4a38-93c3-01aa61bae1cd',
    '4850d615-7543-4abc-ad5a-49843643dafc',
    '64f57184-b6c7-4a5b-a39b-0d5e6b90c3e9',
  ])
  console.log(postsByCategory)
  return (
    <section className="py-10 flex flex-col gap-7">
      <div>
        <h2 className="font-medium text-xl leading-5 text-slate-800 ">
          Destaques no nosso blog
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Cards do blog */}

        {posts.map((post, index) => {
          return (
            <BlogCard
              key={post._id}
              date={post._createdAt}
              image={post.image}
              title={post.title}
            />
          )
        })}
      </div>
    </section>
  )
}
