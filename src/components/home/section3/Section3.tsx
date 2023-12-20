import Link from 'next/link'

import { ChevronsRight } from 'lucide-react'

export function Section3() {
  return (
    <section className="flex flex-col py-5 px-5 gap-5 bg-[#F0F2F4]">
      {/* Text DIV */}
      <div>
        <h2 className="font-roboto text-lg font-semibold text-[#1E293B]">
          <span className="font-roboto text-[28px] leading-[36px] font-medium text-[#3C90CE]">
            Fábrica 4.0
          </span>
          <br /> as melhores soluções em automação para você
        </h2>
      </div>

      {/* ButtonDIV */}
      <div className="flex w-full text-slate-900 border-slate-900 justify-end overflow-hidden">
        <Link href={'/produto/fixed/fabrica-inteligente-4-0'}>
          <button className="flex border-slate-900 items-center text-inherit justify-center w-[70px] py-3 px-6 border rounded-full border-inherit">
            <ChevronsRight />
          </button>
        </Link>
      </div>
    </section>
  )
}
