import Image from 'next/image'
import logo from '../../../assets/logo2CncTech.png'
import image from '../../../assets/servicosCncTech.jpeg'

export function Section4Middle() {
  return (
    <section className="bg-[#F0F2F4] py-10 px-5 flex flex-col gap-5 rounded-lg overflow-hidden">
      {/* logo div */}
      <div className="flex items-center justify-center">
        <Image src={logo} alt="nossa logomarca" className="h-1/3 w-1/3" />
      </div>

      {/* Card */}
      <div className="flex flex-col shadow-lg rounded-b-lg ">
        {/* img div */}
        <div>
          <Image src={image} alt="Imagem generica" className="rounded-t-lg" />
        </div>
        {/* div abaixo imagem */}
        <div className="flex flex-col p-5 gap-4">
          <h2 className="font-roboto font-medium text-[#1F2A68] leading-[24px] text-lg">
            Conheça um pouco mais da nossa história
          </h2>

          <span className="font-roboto font-medium text-[#3C90CE] leading-[24px] text-base">
            e do que faz a CNCTech a melhor escolha para atender você e o seu
            negócio.
          </span>
        </div>
      </div>
    </section>
  )
}
