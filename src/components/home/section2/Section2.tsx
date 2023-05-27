import { NextButton } from '../Button'

export function Section2() {
  return (
    <section className="p-10 flex flex-col bg-slate-800 gap-7">
      <h2 className="title leading-7 text-justify">
        <strong>Cases de sucesso, entenda como seus colegas trabalham</strong>
      </h2>
      <div className="flex justify-end w-full ">
        <NextButton />
      </div>
    </section>
  )
}
