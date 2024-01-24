'use client'
import { useEffect, useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'
import { useQueryStore } from '../../../stateZustand/BlogQuery'

export function PaginationComponent() {
  const [postsLength, setPostsLength] = useState(0)
  const { maxPages, updateMaxPages, page, incrementPage, decrementPage } =
    useQueryStore()
  useEffect(() => {
    setPostsLength(maxPages)
    updateMaxPages()
  }, [maxPages])

  console.log('Página atual: ' + page)
  function handleNextPage() {
    incrementPage()
  }

  function handleDecrementPage() {
    decrementPage()
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={handleDecrementPage}>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem onClick={handleNextPage}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
