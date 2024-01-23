/* eslint-disable prettier/prettier */
import { Posts } from '@/@types/post'
import { getPostsFeed } from '../../../../sanity/sanity-utils'
import { BlogCardWithDate } from '../BlogCardWithDate'
import { ArrowButton } from '../Button'
import Link from 'next/link'

export async function Section9() {
  const posts: Posts[] = await getPostsFeed();

  // Adicione esta função para verificar se há mais de 3 posts
  const shouldAddScroll = posts.length > 3;

  return (
    <section className="flex flex-col gap-10 px-5 py-10 bg-gray-300 md:px-20 md:py-20">
      {/* Nome da Sessão */}
      <h2 className="text-2xl font-roboto font-medium leading-[32px] text-slate-800">
        Novidades <strong>CNCTech</strong>
      </h2>

      {/* sessão dos cards */}
      <div
        className={`flex flex-col md:flex-row gap-5 md:overflow-x-scroll`}
        style={{
          overflowX: shouldAddScroll ? 'auto' : 'hidden', // Adicione overflowX para ativar/desativar a rolagem
          display: 'flex', // Garante que os elementos fiquem em uma única linha
        }}
      >
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
          );
        })}
      </div>

      {/* sessão com texto final + botão */}
      <div className="flex flex-col gap-[70px] md:gap-[35px]">
        <span className='font-medium text-slate-800 leading-[28px] font-roboto'>
          Leia mais sobre tecnologia, indústria e produtividade no blog da CNCTech.
        </span>
        {/* div com botão usado para posicionar no final do conteúdo */}
        <div className="flex justify-end md:justify-start border-slate-900 text-slate-900">
          <a href='/blog'>
            <ArrowButton> Ver mais </ArrowButton>
          </a>
        </div>
      </div>
    </section>
  );
}