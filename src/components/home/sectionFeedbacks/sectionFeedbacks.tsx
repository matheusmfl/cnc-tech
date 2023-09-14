import { FeedbackCard } from '../FeedbackCard'
import { SliderComponent } from '../SliderComponent'

export function SectionFeedbacks() {
  return (
    <section className="flex flex-col px-5 py-10 gap-20 md:px-20 md:py-20 bg-slate-100 overflow-x-hidden">
      {/* Nome da Sessão */}
      <div>
        <h2 className="font-roboto font-medium leading-[32px] text-2xl text-center md:text-left text-slate-800">
          Depoimento de nossos <strong>clientes</strong>
        </h2>
      </div>

      {/* Componente do slide renderizando os comentários */}
      <SliderComponent
        element={[
          <FeedbackCard key={1} />,
          <FeedbackCard key={2} />,
          <FeedbackCard key={3} />,
        ]}
      />
    </section>
  )
}
