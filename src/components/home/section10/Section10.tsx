import { getAllVideos } from '../../../../sanity/sanity-utils'
import { VideoCard } from '../VideoCard'

export async function Section10() {
  const videos = await getAllVideos()
  console.log(videos)
  return (
    <section className="flex flex-col gap-5 px-5 py-10 bg-[#1F2A68] md:px-20 md:py-20 md:gap-10">
      {/* Nome da Sessão */}

      <h2 className="text-2xl font-roboto font-medium leading-[32px] text-slate-50">
        <strong>Últimos</strong> vídeos
      </h2>

      {/* container com os CardsVideos */}
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
        {videos &&
          videos.map((video: any) => {
            return (
              <VideoCard
                key={video.title}
                videoUrl={video.videoUrl}
                description={video.description}
                imageUrl={video.imageUrl}
              />
            )
          })}
      </div>

      {/* sessão com texto final + botão */}
      <div className="flex flex-col gap-5 pt-5">
        <span className="text-slate-50 font-normal text-base leading-6">
          Leia mais sobre tecnologia, indústria e produtividade no blog da
          CNCTech.
        </span>
        {/* div com botão usado para posicionar no final do conteúdo */}
        <button className="w-full rounded-[4px] md:w-[160px] bg-[#3C90CE] font-roboto text-sm font-medium text-white py-3">
          Veja mais vídeos &gt;
        </button>
      </div>
    </section>
  )
}
