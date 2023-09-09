import { Posts } from '@/@types/post'
import { getPostsFeed } from '../../../../sanity/sanity-utils'
import { BlogCardWithDate } from '../BlogCardWithDate'
import { ArrowButton } from '../Button'
import Link from 'next/link'

export async function Section9() {
  const posts: Posts[] = await getPostsFeed()
  return (
    <section className="flex flex-col gap-10 px-5 py-10 bg-gray-300">
      {/* Nome da Sessão */}

      <h2 className="text-2xl font-roboto font-medium leading-[32px] text-slate-800">
        Novidades <strong>CNCTech</strong>
      </h2>

      {/* sessão dos cards */}
      <div className="flex flex-col gap-5">
        {posts.map((post, index) => {
          return (
            <Link href={`blogpage/${post.slug.current}`} key={post._id}>
              <BlogCardWithDate
                date={'25/02/2023'}
                image={post.image}
                category="Tecnologia"
                title={post.title}
              />
            </Link>
          )
        })}
      </div>

      {/* sessão com texto final + botão */}
      <div className="flex flex-col gap-[70px]">
        <span>
          Leia mais sobre tecnologia, indústria e produtividade no blog da
          CNCTech.
        </span>
        {/* div com botão usado para posicionar no final do conteúdo */}
        <div className="flex justify-end border-slate-900 text-slate-900">
          <ArrowButton> Ver mais </ArrowButton>
        </div>
      </div>
    </section>
  )
}
