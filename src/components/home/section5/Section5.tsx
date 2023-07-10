import { SectionNameComponent } from '../SectionNameComponent'
import { SliderComponent } from '../SliderComponent'
import { BlogCard } from '../BlogCard'
import { getPostsByHighlights } from '../../../../sanity/sanity-utils'
import { Posts } from '@/@types/post'
import Link from 'next/link'

export async function Section5() {
  const posts: Posts[] = await getPostsByHighlights()
  return (
    <section className="bg-slate-200 flex flex-col py-10 px-5 gap-10 overflow-x-hidden">
      <SectionNameComponent>
        <h2 className="title">
          <strong>Eficiência</strong> na produção
        </h2>
      </SectionNameComponent>

      <SliderComponent
        element={posts.map((post, index) => {
          return (
            <Link href={`blogpage/${post.slug.current}`} key={post._id}>
              <BlogCard
                description={
                  'We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes'
                }
                image={post.image}
                title={post.title}
              />
            </Link>
          )
        })}
      />
    </section>
  )
}
