import Image from 'next/image'
import avatar from '../../../../assets/avatar.jpg'

export function Card() {
  return (
    <div className="flex flex-col">
      <Image src={avatar} alt="" />
      <div className="py-3 px-6">
        <span>Fabiana Cavalcanti</span>
      </div>
    </div>
  )
}
