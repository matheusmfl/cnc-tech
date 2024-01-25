/* eslint-disable prettier/prettier */
'use client'

import { Posts } from '@/@types/post'
import { BlogCard } from './BlogCard'
import { useQueryStore } from '../../../stateZustand/BlogQuery'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import { PaginationComponent } from './PaginationComponent'
import { SkeletonCards } from './SkeletonCards'

export function SectionFeed() {
  const { getPosts, selectedTags, atualPage, loading } = useQueryStore()
  const [posts, setPosts] = useState<Posts[] | undefined>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts()

        setPosts(fetchedPosts)
      } catch (error) {
        throw new Error()
      }
    }

    fetchPosts()
  }, [selectedTags, getPosts, atualPage])

  return (
    <section className="py-10 flex flex-col gap-7">
      <div>
        <h2 className="font-medium text-xl leading-5 text-slate-800 ">
          Feed CNCTech
        </h2>
      </div>

      <div
        // eslint-disable-next-line prettier/prettier
        className={`flex flex-col gap-4 md:grid ${loading ? 'md:grid-cols-1' : 'md:grid-cols-3'
          }`}
      >
        {/* Cards do blog */}

        {loading ? (
          <SkeletonCards />
        ) : (
          posts &&
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
          })
        )}

        {/* Navegação entre páginas */}
        <div className="md:hidden">
          {selectedTags.length < 1 && <PaginationComponent />}
        </div>
      </div>

      <div className="hidden md:flex">
        {selectedTags.length < 1 && <PaginationComponent />}
      </div>
    </section>
  )
}
