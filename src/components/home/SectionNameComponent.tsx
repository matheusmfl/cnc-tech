import { ReactNode } from 'react'

export function SectionNameComponent({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-8 border-[#075985] pl-5 py-3 shadow-lg">
      {children}
    </div>
  )
}
