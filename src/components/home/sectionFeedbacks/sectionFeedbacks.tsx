import { FeedbackCard } from '../FeedbackCard'
import { SectionNameComponent } from '../SectionNameComponent'
import { SliderComponent } from '../SliderComponent'

export function SectionFeedbacks() {
  return (
    <section className="flex flex-col px-5 py-10 gap-10 bg-slate-100">
      {/* Nome da Sessão */}
      <SectionNameComponent>
        <h2 className="title text-black">
          Cultura do <strong>crescimento</strong>
        </h2>
      </SectionNameComponent>

      {/* Componente do slide renderizando os comentários */}
      <SliderComponent
        element={[<FeedbackCard key={1} />, <FeedbackCard key={2} />]}
      />
    </section>
  )
}
