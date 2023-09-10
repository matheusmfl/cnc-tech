import Image from 'next/image'
import logo from '../../../assets/logo.svg'

export function DesktopLogo() {
  return (
    <header className="hidden md:flex items-end justify-end py-4 px-5 w-full bg-slate-100 h-[80px]">
      <Image src={logo} alt="logo CNC-Tech" className="w-[142px]" />
    </header>
  )
}
