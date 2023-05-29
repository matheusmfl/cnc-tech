import Image from 'next/image'
import imageVideoGeneric from '../../assets/videoImageGeneric.png'
import { ReactNode } from 'react'

export function VideoCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col bg-slate-50 overflow-hidden rounded-md">
      {/* container que contém a imagem do video */}
      <div>
        <Image src={imageVideoGeneric} alt="Video imagem Generic" />
      </div>

      <span className="p-5 leading-6 font-normal text-base text-sky-800">
        {children}
      </span>
    </div>
  )
}
