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
  return (
    <div className="flex gap-2">
      <Image src={avatarBot} alt="Nosso avatar" className="h-[48px] w-[48px]" />
      <div className="bg-neutral-50 px-4 pt-4 pb-2 flex flex-col rounded-xl shadow-lg">
        <div className="w-full">
          {link ? (
            <a
              href={'#'}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ) : (
            <span>{title}</span>
          )}
        </div>
        {link ? (
          <div className="w-full">
            <span>{subtitle}</span>
          </div>
        ) : null}

        <div className="w-full justify-end flex">
          <span className="text-xs italic">17:50</span>
        </div>
      </div>
    </div>
  )
}
