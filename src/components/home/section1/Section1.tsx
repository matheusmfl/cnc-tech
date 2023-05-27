import { Button } from '../Button'

export function Section1() {
  return (
    <section className="flex flex-col py-10 px-5 gap-5 bg-slate-100">
      <span className="text-lg text-slate-800 font-medium w-[310px]">
        Fale com nossos representantes e veja as melhores soluções pro seu
        negócio.
      </span>
      <div className="h-14">
        <Button>
          <strong>Falar conosco</strong>{' '}
        </Button>
      </div>
    </section>
  )
}
