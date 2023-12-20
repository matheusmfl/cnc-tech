import Link from 'next/link'
import { NextButton } from '../Button'

export function Section1() {
  return (
    <section className="flex flex-col py-5 px-5 gap-5 bg-[#1F2A68] md:border md:border-white">
      {/* Text DIV */}
      <div>
        <h2 className="font-roboto text-lg font-medium text-slate-50">
          <span className="font-roboto text-[28px] leading-[36px] font-normal text-[#3C90CE]">
            Pronta entrega
          </span>{' '}
          conheça as tecnologias disponíveis para entrega imediata.
        </h2>
      </div>

      {/* ButtonDIV */}
      <div className="flex w-full text-white justify-end overflow-hidden">
        <Link href={'produto/pronta-entrega'}>
          <NextButton />
        </Link>
      </div>
    </section>
  )
}
