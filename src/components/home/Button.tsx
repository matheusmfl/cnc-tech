import { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="btn-primary hover:brightness-90">
      <ArrowLeft />
      {children}
    </button>
  )
}
