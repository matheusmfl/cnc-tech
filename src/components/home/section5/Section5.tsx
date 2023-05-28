import { SectionNameComponent } from '../SectionNameComponent'
import { SliderComponent } from '../SliderComponent'
import { BlogCard } from '../BlogCard'

export function Section5() {
  return (
    <section className="bg-slate-200 flex flex-col py-10 px-5 gap-10 overflow-x-hidden">
      <SectionNameComponent>
        <h2 className="title">
          <strong>Eficiência</strong> na produção
        </h2>
      </SectionNameComponent>

      <SliderComponent element={[<BlogCard key={1} />, <BlogCard key={2} />]} />
    </section>
  )
}
