'use client'

import { Posts } from '@/@types/post'
import { BlogCard } from './BlogCard'
import { useQueryStore } from '../../../stateZustand/BlogQuery'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function SectionFeed() {
  const { getPosts, selectedTags, currentPage, setCurrentPage } =
    useQueryStore()
  const [posts, setPosts] = useState<Posts[] | undefined>([])
  const [totalPages, setTotalPages] = useState(0)
  const postsPerPage = 5 // Defina o número desejado de posts por página

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
  }, [selectedTags, getPosts, currentPage])

  useEffect(() => {
    setTotalPages(Math.ceil(posts!.length / postsPerPage))
  }, [posts])

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

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
        <div>
          {totalPages > 0 && (
            <div className="flex justify-between">
              {currentPage !== 0 && (
                <button
                  onClick={handlePrevPage}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-l"
                >
                  Anterior
                </button>
              )}
              <p className="text-gray-700">
                Página {currentPage} de {totalPages}
              </p>
              {currentPage !== totalPages && (
                <button
                  onClick={handleNextPage}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-r"
                >
                  Próxima
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
