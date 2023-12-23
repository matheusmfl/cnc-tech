import Image from 'next/image'

interface videoProps {
  videoUrl: string
  description: string
  imageUrl: string
}

export function VideoCard({ videoUrl, description, imageUrl }: videoProps) {
  return (
    <div className="flex flex-col bg-slate-50 overflow-hidden rounded-md">
      {/* container que contém a imagem do video */}
      <a href={videoUrl} target="_blank" rel="noreferrer">
        <div className="bg-slate-900">
          <Image
            src={imageUrl}
            width={400}
            height={400}
            alt="Video imagem Generic"
          />
        </div>
      </a>

      <span className="p-5 leading-6 font-normal text-base text-sky-800">
        {description}
      </span>
    </div>
  )
}
