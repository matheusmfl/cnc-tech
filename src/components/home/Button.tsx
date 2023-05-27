import { ReactNode } from 'react'
import { ArrowLeft, ChevronsRight } from 'lucide-react'

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
    <button className="flex items-center justify-center py-3 px-6 text-white border rounded-full border-white">
      <ChevronsRight />
    </button>
  )
}
