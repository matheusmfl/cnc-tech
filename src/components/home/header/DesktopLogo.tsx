import Image from 'next/image'
import logo from '../../../assets/refactor-logo.svg'
import Link from 'next/link'

export function DesktopLogo() {
  return (
    <header className="hidden md:flex items-end justify-end py-4 px-5 w-full border-b border-slate-900 bg-slate-100 h-[80px]">
      <Link href={'/'}>
        <Image src={logo} alt="logo CNC-Tech" className="w-[142px]" />
      </Link>
    </header>
  )
}
