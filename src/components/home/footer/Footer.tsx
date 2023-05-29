import Image from 'next/image'
import logoFooter from '../../../assets/logoFooter.svg'
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex flex-col py-10 px-5 gap-10 bg-slate-800">
      {/* Logo do Footer */}
      <div className="flex items-center justify-center py-3">
        <Image src={logoFooter} alt="Logo" />
      </div>
      {/* Lista de navegação do footer */}
      <div>
        <nav className="list-none text-slate-50 text-xs flex flex-col gap-5">
          <span className="text-sm">Contato</span>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:underline">
              +55 (54) 99112 - 3338
            </li>
            <li className="cursor-pointer hover:underline">
              +55 (54) 98105 - 4365
            </li>
          </ul>

          <span className="text-sm">Sobre nós</span>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:underline">
              Quem somos (história e valores)
            </li>
            <li className="cursor-pointer hover:underline">
              Membros e parceiros
            </li>
          </ul>

          <span className="text-sm">Mais</span>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:underline">
              Quer fazer parte da equipe?
            </li>
            <li className="cursor-pointer hover:underline">
              Novidades CNCTech
            </li>
          </ul>

          <span className="pt-5 cursor-pointer hover:underline">
            R. Armando Marco Zanetti, 09 - Tamandaré - Garibaldi, RS/Brasil
          </span>
        </nav>
      </div>
      {/* Links sociais do footer */}
      <div className="flex justify-between text-slate-50">
        <a href="/">
          <FacebookIcon />
        </a>

        <a href="/">
          <TwitterIcon />
        </a>

        <a href="/">
          <InstagramIcon />
        </a>

        <a href="/">
          <YoutubeIcon />
        </a>
      </div>
      {/* Copyright do Footer */}
      <div className="flex justify-between text-slate-50">
        <a href="" className="hover:underline">
          © 2023 CNCTech.
        </a>

        <div className="flex gap-2">
          <a href="" className="hover:underline">
            Privacidade
          </a>
          <a href="" className="hover:underline">
            Termos
          </a>
        </div>
      </div>
    </footer>
  )
}
