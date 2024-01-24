import { formatDate } from '@/lib/date-fns'
import Image from 'next/image'

type Props = {
  image?: any
  title: string
  date: string
}

export function BlogCard({ image, title, date }: Props) {
  return (
    <div className="flex rounded-md md:flex-col border border-slate-300 shadow-md cursor-pointer h-36 md:h-96">
      <div className="md:h-[203px]">
        {image && (
          <Image
            src={image}
            alt=""
            width={400}
            height={380}
            className="rounded-tl-md md:h-full md:w-[280px] rounded-bl-md object-cover object-center w-[160px] h-[208px] "
          />
        )}
      </div>
      <div className="flex flex-col p-4 justify-between md:h-[200px]">
        <h2 className="text-slate-800 leading-5 text-base font-medium line-clamp-3 md:line-clamp-5 max-w-[120px]">
          {title}
        </h2>
        <span className="text-slate-400 font-normal text-sm">
          {formatDate(date)}
        </span>
      </div>
    </div>
  )
}
