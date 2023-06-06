import Image from 'next/image'

type Props = {
  image: any
  title: string
  date: string
}

export function BlogCard({ image, title, date }: Props) {
  return (
    <div className="flex rounded-md border border-slate-300 shadow-md">
      <div>
        <Image
          src={image}
          alt=""
          width={128}
          height={200}
          className="rounded-tl-md rounded-bl-md"
        />
      </div>
      <div className="flex flex-col p-4 justify-between">
        <h2 className="text-slate-800 leading-5 text-base font-medium">
          {title}
        </h2>
        <span className="text-slate-400 font-normal text-sm">{date}</span>
      </div>
    </div>
  )
}
