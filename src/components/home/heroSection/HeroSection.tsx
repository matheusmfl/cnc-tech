import Image from 'next/image'
import heroImg from '../../../assets/hero-image.png'

export function HeroSection() {
  return (
    <section className="gratiantHero pt-[30px] px-5 pb-[10px] flex flex-col gap-5">
      <h2 className="title">
        <strong>Importadora</strong> especializada em máquinas{' '}
        <strong>industriais</strong>
      </h2>

      <span className="subtitle">
        A anos desenvolvendo melhores estratégias para produção moveleira
      </span>

      <Image src={heroImg} alt="Imagem de uma de nossas máquinas" />
    </section>
  )
}
