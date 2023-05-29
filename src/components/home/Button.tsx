import { ReactNode } from 'react'
import { ArrowLeft, ChevronsRight, ArrowRight } from 'lucide-react'

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="btn-primary hover:brightness-90">
      <ArrowLeft />
      {children}
    </button>
  )
}

export function NextButton() {
  return (
    <button className="flex items-center text-inherit justify-center py-3 px-6 border rounded-full border-inherit">
      <ChevronsRight />
    </button>
  )
}

export function ArrowButton({ children }: { children: ReactNode }) {
  return (
    <button className="flex gap-4 border border-solid border-inherit rounded-[40px] text-inherit py-[10px] px-6">
      {children} <ArrowRight />
    </button>
  )
}
