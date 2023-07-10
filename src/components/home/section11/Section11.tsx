import { Button } from '../Button'
import { SectionNameComponent } from '../SectionNameComponent'

export function Section11() {
  return (
    <section className="flex flex-col gap-16 px-5 py-10 bg-gray-300">
      {/* Nome da Sessão */}
      <SectionNameComponent>
        <h2 className="title text-black">
          <strong>Converse</strong> com um representante <br />
          <strong>CNCTech</strong>
        </h2>
      </SectionNameComponent>

      <span className="font-normal text-base leading-6 text-slate-900">
        Tire suas dúvidas com um dos nossos representantes no Brasil, América do
        Sul e Estados Unidos.
      </span>

      <Button>
        <strong>Falar com representante</strong>
      </Button>
    </section>
  )
}
