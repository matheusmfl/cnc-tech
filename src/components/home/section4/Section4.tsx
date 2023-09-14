import { CarrosselProductComponent } from './CarrosselProductComponent'

export function Section4() {
  return (
    <section className="py-10 px-5 flex flex-col bg-slate-200 gap-5 md:px-20 md:py-10">
      <h2 className="font-roboto text-2xl font-medium text-slate-800 leading-[32px]">
        Produtos na pronta entrega
      </h2>

      <div>
        <CarrosselProductComponent />
      </div>

      {/* Button */}

      <a href="#" className="w-full">
        <button className="py-3 md:w-[130px] text-center rounded-[4px] bg-[#1F2A68] w-full font-roboto text-slate-50 font-sm font-medium">
          Ver mais &gt;{' '}
        </button>
      </a>
    </section>
  )
}
