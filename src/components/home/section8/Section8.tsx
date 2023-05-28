import { FeedbackCard } from '../FeedbackCard'
import { SectionNameComponent } from '../SectionNameComponent'

export function Section8() {
  return (
    <section className="flex flex-col px-5 py-10 gap-10 bg-gray-300">
      {/* Nome da Sessão */}
      <SectionNameComponent>
        <h2 className="title text-black">
          Cultura do <strong>crescimento</strong>
        </h2>
      </SectionNameComponent>

      <span className="text-slate-900 text-sm text-left leading-6">
        Todo suporte que possuímos nos levou a conquistar clientes distribuídos
        pela América do Sul, América Central e Estados Unidos. A CNCTech também
        presta cursos técnicos e treinamentos com o objetivo de formar
        profissionais capacitados para o mercado de trabalho.
      </span>

      <FeedbackCard />
    </section>
  )
}
