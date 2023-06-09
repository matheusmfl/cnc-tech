import { Posts } from '@/@types/post'
import { getPostsByHighlights } from '../../../sanity/sanity-utils'
import { BlogCard } from './BlogCard'

export async function SectionDestaques() {
  const posts: Posts[] = await getPostsByHighlights()

  return (
    <section className="py-10 flex flex-col gap-7 ">
      <div>
        <h2 className="font-bold text-xl leading-5 text-slate-800 ">
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
