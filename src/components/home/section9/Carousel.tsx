'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useQueryStore } from '../../../../stateZustand/BlogQuery'
import Link from 'next/link'
import { BlogCardWithDate } from '../BlogCardWithDate'
import { useEffect, useState } from 'react'
import { Posts } from '@/@types/post'

export function CarouselComponent() {
  const { getPosts } = useQueryStore()

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
  }, [getPosts])

  return (
    <Carousel>
      <CarouselContent>
        {posts &&
          posts.map((post, index) => {
            return (
              <CarouselItem key={post._id} className="basis-1/3">
                <Link href={`blogpage/${post.slug.current}`}>
                  <BlogCardWithDate
                    date={'25/02/2023'}
                    image={post.image}
                    category="Tecnologia"
                    title={post.title}
                  />
                </Link>
              </CarouselItem>
            )
          })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
