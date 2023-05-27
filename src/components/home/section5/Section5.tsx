import { BlogCard } from '../BlogCard'
import { SectionNameComponent } from '../SectionNameComponent'

export function Section5() {
  return (
    <section className="bg-slate-200 flex flex-col py-10 px-5 gap-10">
      <SectionNameComponent>
        <h2 className="title">
          <strong>Eficiência</strong> na produção
        </h2>
      </SectionNameComponent>

      <BlogCard />
    </section>
  )
}
