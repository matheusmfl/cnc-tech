import { VideoCard } from '../VideoCard'

export function Section10() {
  return (
    <section className="flex flex-col gap-5 px-5 py-10 bg-gray-700">
      {/* Nome da Sessão */}

      <h2 className="text-2xl font-roboto font-medium leading-[32px] text-slate-800">
        <strong>Últimos</strong> vídeos
      </h2>

      {/* container com os CardsVideos */}
      <div className="flex flex-col gap-5">
        <VideoCard>
          Previsão de quantidade e tempo necessário atender sua demanda,
          softwares de gestão inteligente.{' '}
        </VideoCard>

        <VideoCard>
          Previsão de quantidade e tempo necessário atender sua demanda,
          softwares de gestão inteligente.{' '}
        </VideoCard>

        <VideoCard>
          Previsão de quantidade e tempo necessário atender sua demanda,
          softwares de gestão inteligente.{' '}
        </VideoCard>

        <VideoCard>
          Previsão de quantidade e tempo necessário atender sua demanda,
          softwares de gestão inteligente.{' '}
        </VideoCard>
      </div>

      {/* sessão com texto final + botão */}
      <div className="flex flex-col gap-[70px] pt-5">
        <span className="text-slate-50 font-normal text-base leading-6">
          Leia mais sobre tecnologia, indústria e produtividade no blog da
          CNCTech.
        </span>
        {/* div com botão usado para posicionar no final do conteúdo */}
        <button className="w-full rounded-[4px] bg-[#3C90CE] font-roboto text-sm font-medium text-white py-3">
          Veja mais vídeos &gt;
        </button>
      </div>
    </section>
  )
}
