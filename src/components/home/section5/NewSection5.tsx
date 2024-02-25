import Image from 'next/image'
import img1 from '../../../assets/supportImage.jpeg'
import img2 from '../../../assets/representanteImage.jpg'
import img3 from '../../../assets/cursosImage.jpg'

export function NewSection5() {
  return (
    <section className="bg-slate-200 py-10 px-5 flex flex-col gap-5 md:py-10 md:px-20 2xl:px-[12%]">
      <h2 className="text-2xl font-roboto font-medium leading-[32px] text-slate-800">
        Contato
      </h2>

      {/* container de cards */}
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-5">
        {/* Primeiro CARD */}

        <div className="flex flex-col rounded-md shadow-lg md:flex-col-reverse">
          <Image
            src={img1}
            alt="Suporte e atendimento CNC-Tech"
            className="aspect-video rounded-t-lg md:h-[240px] object-cover md:rounded-t-none"
          />

          <div className="p-5 flex flex-col gap-5 md:bg-slate-50 md:h-[163px] md:justify-between">
            <h3 className="font-roboto font-medium text-lg leading-[24px] text-sky-900">
              Atendimento e suporte{' '}
            </h3>

            <div className="pt-[17px] flex w-full items-end justify-end">
              <a
                href="/"
                className="text-[#1F2A68] font-medium text-base leading-[24px]"
              >
                Suporte CNCTech &gt;&gt;{' '}
              </a>
            </div>
          </div>
        </div>

        {/* Segundo CARD */}

        <div className="flex flex-col rounded-md shadow-lg md:flex-col-reverse">
          <Image
            src={img2}
            alt="Suporte e atendimento CNC-Tech"
            className="aspect-video rounded-t-lg md:h-[240px] object-cover md:rounded-t-none"
          />

          <div className="p-5 flex flex-col gap-5 md:bg-slate-50 md:h-[163px] md:justify-between">
            <h3 className="font-roboto font-medium text-lg leading-[24px] text-sky-900">
              Representante, encontre um próximo a você{' '}
            </h3>

            <div className="pt-[17px] flex w-full items-end justify-end">
              <a
                href="/"
                className="text-[#1F2A68] font-medium text-base leading-[24px]"
              >
                &gt;&gt;{' '}
              </a>
            </div>
          </div>
        </div>

        {/* Terceiro CARD */}

        <div className="flex flex-col rounded-md shadow-lg md:flex-col-reverse">
          <Image
            src={img3}
            alt="Suporte e atendimento CNC-Tech"
            className="aspect-video rounded-t-lg md:h-[240px] object-cover md:rounded-t-none"
          />

          <div className="p-5 flex flex-col gap-5 md:bg-slate-50 md:h-[163px] md:justify-between">
            <h3 className="font-roboto font-medium text-lg leading-[24px] text-sky-900">
              Cursos de capacitação de equipes{' '}
            </h3>

            <div className="pt-[17px] flex w-full items-end justify-end">
              <a
                href="/"
                className="text-[#1F2A68] font-medium text-base leading-[24px]"
              >
                Ver cursos &gt;&gt;{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
