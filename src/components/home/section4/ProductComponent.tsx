import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { builder } from '../../../../sanity/sanity-utils'

interface ProductsProps {
  imageUrl: string
  title: string
  body: any
  slug: any
}
export function ProductComponent({
  imageUrl,
  title,
  body,
  slug,
}: ProductsProps) {
  return (
    <div className="flex flex-col w-full rounded-lg shadow-xl">
      {/* Image DIV */}
      <div>
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt="Imagem do produto"
          className="max-h-[240px] rounded-t-lg object-cover"
        />
      </div>

      {/* Description DIV */}
      <div className="flex flex-col px-5 pt-5 pb-8 gap-3 bg-[#F1F5F9] rounded-b-lg">
        <h3 className="text-slate-800 font-roboto font-medium leading-[24px] text-lg">
          {title}
        </h3>

        <span className="line-clamp-4 font-roboto text-slate-900 font-normal leading-[24px] text-base">
          {/* {subtitle} */}
          <PortableText
            value={body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-3xl text-slate-900 font-bold leading-9 pb-2">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl text-slate-900 font-bold leading-8 pb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl text-slate-900 font-bold leading-6 pb-2">
                    {children}
                  </h3>
                ),

                h4: ({ children }) => (
                  <h4 className="text-lg text-slate-900 font-bold leading-6 pb-2">
                    {children}
                  </h4>
                ),
                normal: ({ children }) => (
                  <p className="text-base text-slate-900 font-normal leading-6 pb-2">
                    {children}
                  </p>
                ),
              },
              listItem: {
                number: ({ children }) => (
                  <li style={{ listStyleType: 'decimal' }}>{children}</li>
                ),
                bullet: ({ children }) => (
                  <li
                    style={{
                      listStyleType: 'disc',
                      marginLeft: '16px',
                    }}
                  >
                    {children}
                  </li>
                ),
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={`${value.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="text-4xl pb-2">
                    <Image
                      src={builder.image(value).toString()}
                      alt={value.alt}
                      width={1000}
                      height={1000}
                    />
                  </div>
                ),
              },
            }}
          />
        </span>

        <div className="text-right flex h-10 items-end justify-end">
          <a
            href={`/produto/pronta-entrega/${slug.current}`}
            className="font-roboto text-lg leading-[24px] font-medium text-slate-800"
          >
            Mais informações
          </a>
        </div>
      </div>
    </div>
  )
}
