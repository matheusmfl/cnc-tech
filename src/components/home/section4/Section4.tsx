import { NextButton } from '../Button'

export function Section4() {
  return (
    <section className="p-10 flex flex-col bg-slate-100 gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="title leading-7 text-black">
          <strong>
            Mantenha sua equipe
            <br /> atualizada e treinada
          </strong>
        </h2>
        <span className="subtitle text-sky-800">
          Conheça nossos cursos para equipes de alto desempenho
        </span>
      </div>
      <div className="flex justify-end w-full border-black">
        <NextButton />
      </div>
    </section>
  )
}
