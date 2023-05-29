import Image from 'next/image'
import blogGenericImage from '../../assets/blogGenericImage.png'

interface blogCardWithDateProps {
  title: string
  date: string
  category: string
}

export function BlogCardWithDate({
  title,
  date,
  category,
}: blogCardWithDateProps) {
  return (
    <div className="shadow-lg flex flex-col rounded-md overflow-hidden">
      {/* container com texto, data e categoria */}
      <div className="p-5 bg-slate-100 gap-[72px] flex flex-col">
        <h3 className="font-medium text-sky-900 leading-6">{title}</h3>

        <div className="flex flex-col gap-2 text-slate-900 text-base leading-6 font-normal ">
          <span>{category}</span>
          <span>{date}</span>
        </div>
      </div>

      {/* container com imagem */}
      <div>
        <Image src={blogGenericImage} alt="Imagem genérica do blog!" />
      </div>
    </div>
  )
}
