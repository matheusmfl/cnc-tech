'use client'
import { useEffect } from 'react'
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
  const {
    maxPages,
    updateMaxPages,
    atualPage,
    incrementPage,
    decrementPage,
    setAtualPage,
  } = useQueryStore()
  useEffect(() => {
    updateMaxPages()
  }, [])

  function handleNextPage() {
    incrementPage()
  }

  function handleDecrementPage() {
    decrementPage()
  }

  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: maxPages },
      (_, index) => index + 1,
    )

    return pageNumbers.map((pageNumber: number) => (
      <PaginationItem key={pageNumber} onClick={() => setAtualPage(pageNumber)}>
        <PaginationLink
          className={`${pageNumber === atualPage && 'underline'}`}
        >
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    ))
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={handleDecrementPage}>
          <PaginationPrevious />
        </PaginationItem>
        {renderPageNumbers()}
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
