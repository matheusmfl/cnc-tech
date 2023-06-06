import { Posts } from '@/@types/post'
import { getPostsFeed } from '../../../sanity/sanity-utils'
import { BlogCard } from './BlogCard'

export async function SectionFeed() {
  const posts: Posts[] = await getPostsFeed()
  return (
    <section className="py-10 flex flex-col gap-7">
      <div>
        <h2 className="font-medium text-xl leading-5 text-slate-800 ">
          Feed CNCTech
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
