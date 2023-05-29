import { BlogCardWithDate } from '../BlogCardWithDate'
import { ArrowButton } from '../Button'
import { SectionNameComponent } from '../SectionNameComponent'

export function Section9() {
  return (
    <section className="flex flex-col gap-10 px-5 py-10 bg-gray-300">
      {/* Nome da Sessão */}
      <SectionNameComponent>
        <h2 className="title text-black">
          Novidades <strong>CNCTech</strong>
        </h2>
      </SectionNameComponent>

      {/* sessão dos cards */}
      <div className="flex flex-col gap-5">
        <BlogCardWithDate
          title="Soluções avançadas de usinagens e furação,
         desde uma máquina individual até a interligação em células de produção"
          category="Produção em Rede"
          date="22/03/2023"
        />
        <BlogCardWithDate
          title="Soluções avançadas de usinagens e furação,
         desde uma máquina individual até a interligação em células de produção"
          category="Produção em Rede"
          date="22/03/2023"
        />
        <BlogCardWithDate
          title="Soluções avançadas de usinagens e furação,
         desde uma máquina individual até a interligação em células de produção"
          category="Produção em Rede"
          date="22/03/2023"
        />
        <BlogCardWithDate
          title="Soluções avançadas de usinagens e furação,
         desde uma máquina individual até a interligação em células de produção"
          category="Produção em Rede"
          date="22/03/2023"
        />
      </div>

      {/* sessão com texto final + botão */}
      <div className="flex flex-col gap-[70px]">
        <span>
          Leia mais sobre tecnologia, indústria e produtividade no blog da
          CNCTech.
        </span>
        {/* div com botão usado para posicionar no final do conteúdo */}
        <div className="flex justify-end">
          <ArrowButton> Ver mais </ArrowButton>
        </div>
      </div>
    </section>
  )
}
