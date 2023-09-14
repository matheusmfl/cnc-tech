import Image from 'next/image'
import avatar from '../../assets/avatar.svg'

export function FeedbackCard({ version }: { version: 1 | 2 | 3 }) {
  let spanText, strongText

  if (version === 2) {
    spanText =
      'Excelente serviço, fiquei muito satisfeito com a agilidade e eficiência da equipe que foi muito competente sempre prestativos e atenciosos. Sem dúvida, recomendo a CNCTech a todos.'
    strongText = 'Fernando Braz'
  } else if (version === 3) {
    spanText =
      'Profissionais excelentes e de extrema competência, deixo aqui a minha gratidão e admiração pelos serviços prestados a minha empresa, continuem assim sempre'
    strongText = 'Breno Zanotti'
  } else {
    spanText =
      'O atendente que me ajudou foi excepcional em todos os aspectos, desde a cordialidade até a competência técnica.'
    strongText = 'Ana Barcelar'
  }

  return (
    <div className="flex flex-col rounded-lg bg-[#1F2A68] text-white items-center justify-center px-10 md:px-2 md:items-center text-center md:w-[244px]">
      <div className="-translate-y-14">
        <Image src={avatar} alt="Avatar" />
      </div>

      <div className="-translate-y-20 flex flex-col gap-3 h-24 md:h-full">
        <span className="text-base leading-6 font-normal">{spanText}</span>
        <strong className="text-base">{strongText}</strong>
      </div>
    </div>
  )
}
