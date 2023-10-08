import Image from 'next/image'

interface ICardProps {
  name: string
  imageUrl?: string
}
export function RepresentanteCard({ name, imageUrl }: ICardProps) {
  return (
    <div className="flex gap-4 lg:gap-0 lg:flex-col lg:rounded-[4px] border shadow-lg rounded-tr-[4px] rounded-br-[4px]">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Avatar"
          width={400}
          height={400}
          className="h-[80px] lg:h-[180px] lg:w-full object-center w-[80px] object-cover rounded-tl-[4px] lg:rounded-b-[0px] lg:rounded-t-[4px] rounded-bl-[4px]"
        />
      )}

      <div className="py-3 px-3 lg:pt-1">
        <span className="font-roboto text-base font-medium leading-[24px] text-slate-800">
          {name}
        </span>
      </div>
    </div>
  )
}
