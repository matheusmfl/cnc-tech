import Image from 'next/image'
import avatar from '../../assets/avatar.svg'

export function FeedbackCard() {
  return (
    <div
      className="flex flex-col rounded-lg bg-sky-900 text-white
     items-center justify-center px-10 text-center"
    >
      <div className="-translate-y-14">
        <Image src={avatar} alt="Avatar" />
      </div>

      <div className="-translate-y-20 flex flex-col gap-3 h-24">
        <span className="text-base leading-6 font-normal">
          O atendente que me ajudou foi excepcional em todos os aspectos, desde
          a cordialidade até a competência técnica.
        </span>
        <strong className="text-base">Ana Barcelar</strong>
      </div>
    </div>
  )
}
