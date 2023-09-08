import { NextButton } from '../Button'

export function Section2() {
  return (
    <section className="flex flex-col py-5 px-5 gap-5 bg-[#3C90CE]">
      {/* Text DIV */}
      <div>
        <h2 className="font-roboto text-lg font-medium text-slate-50">
          Dúvidas para encontrar a{' '}
          <span className="font-roboto text-[28px] leading-[36px] font-normal text-[#1F2A68]">
            tecnologia certa
          </span>{' '}
          para a sua necessidade.
        </h2>
      </div>

      {/* ButtonDIV */}
      <div className="flex w-full text-white justify-end overflow-hidden">
        <NextButton />
      </div>
    </section>
  )
}
