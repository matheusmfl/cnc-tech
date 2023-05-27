import { NextButton } from '../Button'

export function Section3() {
  return (
    <section className="p-10 flex flex-col bg-gray-700 gap-7">
      <h2 className="title leading-7 text-justify">
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
