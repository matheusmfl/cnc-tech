import { Posts } from '@/@types/post'
import { getPosts } from '../../../sanity/sanity-utils'
import { BlogCard } from './BlogCard'

export async function SectionDestaques() {
  const posts: Posts[] = await getPosts()
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
          console.log(post)
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
