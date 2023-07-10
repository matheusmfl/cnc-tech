import Image from 'next/image'

type Props = {
  image: any
  title: string
  description: string
}
export function BlogCard({ image, title, description }: Props) {
  return (
    <div className="rounded-3xl overflow-hidden flex flex-col shadow-lg">
      <div className="aspect-square h-60 flex items-center justify-center bg-white">
        <Image src={image} alt="Generic Image" width={1000} height={1000} />
      </div>
      <div className="flex flex-col gap-4 bg-slate-100 px-4 py-5">
        <h3 className="title font-medium leading-6 text-lg text-slate-800">
          {title}
        </h3>

        <span className="subtitle text-slate-900 line-clamp-4">
          {description}
        </span>

        <div className="w-full pt-7 flex justify-end">
          <a
            href="/"
            className=" text-right w-full text-slate-800  font-bold text-lg hover:underline"
          >
            Leia mais
          </a>
        </div>
      </div>
    </div>
  )
}
