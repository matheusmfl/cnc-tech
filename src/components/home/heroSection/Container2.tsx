import Image from 'next/image'
import containerImage from '../../../assets/heroImgBg.jpg'

export function Container2() {
  return (
    <div className="w-full aspect-video md:flex md:items-start ">
      <Image src={containerImage} alt="Texto alternativo" className="h-full" />
    </div>
  )
}
