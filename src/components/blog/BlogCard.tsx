import { formatDate } from '@/lib/date-fns'
import Image from 'next/image'

type Props = {
  image?: any
  title: string
  date: string
}

export function BlogCard({ image, title, date }: Props) {
  return (
    <div className="flex rounded-md border border-slate-300 shadow-md cursor-pointer h-36">
      <div>
        {image && (
          <Image
            src={image}
            alt=""
            width={160}
            height={208}
            className="rounded-tl-md h-full rounded-bl-md object-cover"
          />
        )}
      </div>
      <div className="flex flex-col p-4 justify-between">
        <h2 className="text-slate-800 leading-5 text-base font-medium line-clamp-3 max-w-[120px]">
          {title}
        </h2>
        <span className="text-slate-400 font-normal text-sm">
          {formatDate(date)}
        </span>
      </div>
    </div>
  )
}
