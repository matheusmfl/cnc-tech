import { PortableText } from '@portabletext/react'

import Image from 'next/image'
import { builder, getPage } from '../../../../../sanity/sanity-utils'
import { SectionDestaques } from '@/components/blog/SectionDestaques'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <>
      {/* Image DIV */}
      <div className="aspect-video relative">
        <Image fill alt="" src={page.image as any} className="object-cover" />
      </div>

      <section className="flex flex-col gap-3 py-4 px-5 font-sans">
        {/* DateDiv */}
        <span className="text-slate-400 text-sm leading-5 font-normal">
          {page._createdAt}
        </span>
        {/* author div */}
        <div>
          <span className="text-slate-700 text-sm">
            <strong className="text-slate-900 text-sm">AUTOR(A):</strong>{' '}
            {page.author.toString()}
          </span>
        </div>
        {/* Tag Div */}
        <div className="pt-2">
          {page.categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`rounded-[4px] shadow-md bg-sky-800 text-white flex items-center justify-center py-1 px-2`}
              >
                {category.toString()}
              </button>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <PortableText
            value={page.body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-4xl text-slate-900 font-bold leading-9 pb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl text-slate-900 font-bold leading-8 pb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl text-slate-900 font-bold leading-6 pb-4">
                    {children}
                  </h3>
                ),

                h4: ({ children }) => (
                  <h4 className="text-xl text-slate-900 font-bold leading-6 pb-4">
                    {children}
                  </h4>
                ),
                normal: ({ children }) => (
                  <p className="text-base text-slate-900 font-normal leading-6 pb-4">
                    {children}
                  </p>
                ),
              },
              listItem: {
                number: ({ children }) => (
                  <li style={{ listStyleType: 'decimal' }}>{children}</li>
                ),
                bullet: ({ children }) => (
                  <li style={{ listStyleType: 'disc', marginLeft: '16px' }}>
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
                  <div className="text-4xl pb-4">
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
          {/* @ts-expect-error */}
          <SectionDestaques />
        </div>
      </section>
    </>
  )
}
