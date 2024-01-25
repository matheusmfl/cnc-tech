/* eslint-disable prettier/prettier */
import { ArrowButton } from '../Button'

import { CarouselComponent } from './Carousel'

export async function Section9() {

  return (
    <section className="flex flex-col gap-10 px-5 py-10 bg-gray-300 md:px-20 md:py-20">
      {/* Nome da Sessão */}
      <h2 className="text-2xl font-roboto font-medium leading-[32px] text-slate-800">
        Novidades <strong>CNCTech</strong>
      </h2>

      {/* sessão dos cards */}

      <CarouselComponent />


      {/* sessão com texto final + botão */}
      <div className="flex flex-col gap-[70px] md:gap-[35px]">
        <span className='font-medium text-slate-800 leading-[28px] font-roboto'>
          Leia mais sobre tecnologia, indústria e produtividade no blog da CNCTech.
        </span>
        {/* div com botão usado para posicionar no final do conteúdo */}
        <div className="flex justify-end md:justify-start border-slate-900 text-slate-900">
          <a href='/blog' className='border-slate-800'>
            <ArrowButton> Ver mais </ArrowButton>
          </a>
        </div>
      </div>
    </section>
  );
}