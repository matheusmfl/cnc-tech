import { ArrowButton } from '../Button'
import { SectionNameComponent } from '../SectionNameComponent'
import { VideoCard } from '../VideoCard'

export function Section10() {
  return (
    <section className="flex flex-col gap-5 px-5 py-10 bg-gray-700">
      {/* Nome da Sessão */}
      <SectionNameComponent>
        <h2 className="title text-black">
          <strong>Últimos</strong> vídeos
        </h2>
      </SectionNameComponent>

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
        <div className="flex justify-end border-slate-50 text-slate-50">
          <ArrowButton> Veja mais vídeos</ArrowButton>
        </div>
      </div>
    </section>
  )
}
