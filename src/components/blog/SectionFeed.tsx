'use client'

import { Posts } from '@/@types/post'
import { BlogCard } from './BlogCard'
import { useQueryStore } from '../../../stateZustand/BlogQuery'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getPostsFeed } from '../../../sanity/sanity-utils'
import { PaginationComponent } from './PaginationComponent'

export function SectionFeed() {
  const { getPosts, selectedTags } = useQueryStore()
  const [posts, setPosts] = useState<Posts[] | undefined>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const page = 1
        const fetchedPosts = await getPostsFeed(page)

        setPosts(fetchedPosts)
      } catch (error) {
        throw new Error()
      }
    }

    fetchPosts()
  }, [selectedTags, getPosts])

  return (
    <section className="py-10 flex flex-col gap-7">
      <div>
        <h2 className="font-medium text-xl leading-5 text-slate-800 ">
          Feed CNCTech
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Cards do blog */}

        {posts &&
          posts.map((post, index) => {
            return (
              <Link href={`blogpage/${post.slug.current}`} key={post._id}>
                <BlogCard
                  key={post._id}
                  date={post._createdAt}
                  image={post.image}
                  title={post.title}
                />
              </Link>
            )
          })}
        {/* Navegação entre páginas */}
        <div>{posts && <PaginationComponent />}</div>
      </div>
    </section>
  )
}
