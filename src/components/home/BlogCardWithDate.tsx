import Image from 'next/image'

interface blogCardWithDateProps {
  title: string
  date: string
  category: string
  image: any
}

export function BlogCardWithDate({
  title,
  date,
  category,
  image,
}: blogCardWithDateProps) {
  return (
    <div className="shadow-lg flex flex-col rounded-md overflow-hidden md:w-[240px]">
      {/* container com texto, data e categoria */}
      <div className="p-5 bg-slate-100 gap-[72px] flex flex-col h-[224px] md:h-[224px]">
        <h3 className="font-medium text-sky-900 leading-6 md:line-clamp-2">
          {title}
        </h3>

        <div className="flex flex-col gap-2 text-slate-900 text-base leading-6 font-normal ">
          <span>{category}</span>
          <span>{date}</span>
        </div>
      </div>

      {/* container com imagem */}
      <div className="h-[226px]">
        <Image
          src={image}
          alt="Imagem genérica do blog!"
          width={600}
          height={600}
          className="h-full md:h-[240px] object-cover"
        />
      </div>
    </div>
  )
}
