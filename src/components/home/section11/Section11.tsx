export function Section11() {
  return (
    <section className="flex flex-col gap-16 px-5 py-10 md:px-20 md:py-20 bg-slate-100 bg-map bg-center bg-no-repeat">
      {/* Nome da Sessão */}

      <h2 className="text-2xl font-roboto font-medium leading-[32px] text-slate-800">
        <strong>Converse</strong> com um representante <br />
        <strong>CNCTech</strong>
      </h2>

      <span className="font-medium font-roboto text-base leading-6 text-slate-900">
        Tire suas dúvidas com um dos nossos representantes no Brasil, América do
        Sul e Estados Unidos.
      </span>

      <a href="/representantes" className="w-full">
        <button className="py-3 rounded-lg md:w-[180px] text-center font-roboto font-medium text-sm text-slate-50 bg-[#1F2A68] w-full">
          Falar com representante &gt;
        </button>
      </a>
    </section>
  )
}
