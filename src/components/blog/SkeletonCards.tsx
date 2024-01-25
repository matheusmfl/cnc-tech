'use client'

import { useQueryStore } from '../../../stateZustand/BlogQuery'

export function SkeletonCards() {
  const { loading } = useQueryStore()

  return (
    <div className="md:grid md:grid-cols-3 md:gap-4 w-full relative">
      {/* Linha horizontal fora dos cards */}
      {loading && (
        <div className="absolute -top-4 left-0 z-10 right-28 h-2 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-line-grow"></div>
      )}

      {Array.from({ length: 3 }, (_, index) => index + 1).map((id, index) => {
        return (
          <div
            key={id}
            className="md:h-96 shadow-md bg-slate-200 relative overflow-hidden animate-pulse"
          >
            {/* Conteúdo do card de vídeo */}
          </div>
        )
      })}
    </div>
  )
}
