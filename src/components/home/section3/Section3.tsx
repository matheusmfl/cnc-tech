import { NextButton } from '../Button'

export function Section3() {
  return (
    <section className="p-10 flex flex-col bg-gray-700 gap-7 text-white">
      <h2 className="title leading-7 text-justify text-slate-50">
        <strong>
          Dúvidas para encontrar a tecnologia certa para a sua necessidade.
        </strong>
      </h2>
      <div className="flex justify-end w-full ">
        <NextButton />
      </div>
    </section>
  )
}
