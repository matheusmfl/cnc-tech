import Image from 'next/image'
import logoFooter from '../../../assets/refactor-logo.svg'
import { FacebookIcon, YoutubeIcon, InstagramIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex flex-col py-10 px-5 gap-10 bg-slate-800 md:px-20">
      {/* Logo do Footer */}
      <div className="flex items-center justify-center py-3">
        <Image src={logoFooter} alt="Logo" className="h-32 w-32" />
      </div>

      {/* Lista de navegação do footer */}

      <nav className="list-none text-slate-50 text-xs flex flex-col gap-5 md:w-full">
        <div className="flex flex-col md:flex-row gap-5 md:justify-between md:w-full">
          <div className="flex flex-col gap-5">
            <span className="text-sm">Contato</span>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">
                +55 (54) 99112 - 3338
              </li>
              <li className="cursor-pointer hover:underline">
                +55 (54) 98105 - 4365
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-sm">Sobre nós</span>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">
                Quem somos (história e valores)
              </li>
              <li className="cursor-pointer hover:underline">
                Membros e parceiros
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-sm">Mais</span>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">
                Quer fazer parte da equipe?
              </li>
              <li className="cursor-pointer hover:underline">
                Novidades CNCTech
              </li>
            </ul>
          </div>
        </div>

        <span className="pt-5 cursor-pointer hover:underline md:text-center md:w-full">
          R. Armando Marco Zanetti, 09 - Tamandaré - Garibaldi, RS/Brasil
        </span>
      </nav>

      {/* Links sociais do footer */}
      <div className="flex justify-between text-slate-50">
        <a href="https://www.facebook.com/CNCtechBrazil">
          <FacebookIcon />
        </a>

        <a href="https://www.instagram.com/cnctechmaquinas/">
          <InstagramIcon />
        </a>

        <a href="https://www.youtube.com/@cnctechmaquinas7353">
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
