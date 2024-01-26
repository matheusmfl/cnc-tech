import Image from 'next/image'
import avatarBot from '@/assets/avatarBot.svg'

interface BalloonProps {
  title?: string | null
  subtitle?: string | null
  link?: {
    title: string | null
    href: string | null
  } | null
}

export function Balloon({ title, subtitle, link }: BalloonProps) {
  const date = new Date()

  const hora = date.getHours()
  const minutes = date.getMinutes()
  return (
    <div className="flex gap-2">
      <Image src={avatarBot} alt="Nosso avatar" className="h-[48px] w-[48px]" />
      <div className="bg-neutral-50 px-4 pt-4 pb-2 flex flex-col rounded-xl shadow-lg">
        <div className="w-full">
          {link ? (
            <a
              href={'#'}
              className="text-sky-600 font-medium text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ) : (
            <span className="text-neutral-600 font-normal text-base">
              {title}
            </span>
          )}
        </div>
        {link ? (
          <div className="w-full">
            <span>{subtitle}</span>
          </div>
        ) : null}

        <div className="w-full justify-end flex">
          <span className="text-xs italic">
            {hora.toString()}:{minutes.toString()}
          </span>
        </div>
      </div>
    </div>
  )
}
