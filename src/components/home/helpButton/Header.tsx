import Image from 'next/image'
import avatarBot from '@/assets/avatarBot.svg'

export function HeaderChatBot() {
  return (
    <div className="w-full h-[72px] p-4 bg-slate-50 flex gap-4 items-center justify-center">
      {/* Avatar + Name */}
      <div className="flex gap-4 items-center">
        <Image alt="Foto CNC-Tech Avatar" src={avatarBot} />
        <span className="text-neutral-700 text-2xl font-medium">Aron</span>
      </div>
    </div>
  )
}
