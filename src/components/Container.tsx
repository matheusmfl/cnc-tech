import { ReactNode } from 'react'

interface iContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: iContainerProps) {
  return <div className={`max-w-[700px] ${className}`}>{children}</div>
}
