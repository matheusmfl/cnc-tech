'use client'
import { useEffect, useState } from 'react'
import { getPostsFeedLength } from '../../../sanity/sanity-utils'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

export function PaginationComponent() {
  const [postsLength, setPostsLength] = useState(0)
  useEffect(() => {
    async function getPostsLength() {
      const totalPosts = await getPostsFeedLength()
      setPostsLength(totalPosts)
    }

    getPostsLength()
  }, [])

  const totalPages = Math.ceil(postsLength / 5)
  const totalPageArray = Array.from({ length: totalPages }, (_, index) => {
    // Faça algo com cada índice (index)
    return index + 1
  })

  console.log('aqui' + totalPages)
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
