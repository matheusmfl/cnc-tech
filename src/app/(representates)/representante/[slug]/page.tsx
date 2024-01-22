import { Footer } from '@/components/home/footer/Footer'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { Header } from '@/components/home/header/Header'
import arrow from '@/assets/arrowBack.svg'
import Image from 'next/image'
import Link from 'next/link'
import { getRepresentanteBySlug } from '../../../../../sanity/sanity-utils'

type Props = {
  params: { representantes: string; slug: string }
}
export default async function pageBySlug({ params }: Props) {
  const fetch = await getRepresentanteBySlug(params.slug)
  const representante = fetch[0]
  const email = representante.email
  const telephone = representante.telephone
  const cellphone = representante.cellphone
  // const city = representante.city
  const name = representante.title
  const bio = representante.bio
  const avatar = representante.avatarUrl

  return (
    <main>
      <div className="md:fixed md:left-0 z-10">
        <Header />
        <AsideDesktop />
      </div>
      <div className="z-0 md:ml-[320px]">
        {/* Div azul com H1 */}
        <div className="py-10 px-6 lg:px-20 flex flex-col gap-6 text-white bg-[#1F2A68]">
          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src={arrow}
              alt="seta para voltar"
              className="text-white bg-white"
            />
            <Link href={'/representantes'}>
              <span className="font-roboto text-base font-bold cursor-pointer  leading-[24px] underline">
                Voltar
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <Image
              src={avatar}
              alt="avatar"
              width={400}
              height={400}
              className="rounded-full shadow-md border border-white w-[80px] h-[80px] object-cover"
            />
            <h1 className="font-roboto text-3xl font-medium leading-[36px] text-[#F8FAFC] ">
              {name}
            </h1>

            {/* divisor */}
            <div className="h-[4px] w-[80px] bg-white mx-auto" />
          </div>
        </div>

        {/* Segundo container */}
        <div className="px-6 py-10 lg:px-20 flex flex-col bg-slate-50">
          {/* Container Filho numero 1 */}
          <div className="pb-10 flex flex-col gap-6 ">
            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              {bio}
            </span>

            {email && (
              <span className="font-roboto font-medium text-base leading-6 text-slate-800">
                <strong>E-mail: </strong> {email}
              </span>
            )}

            {telephone && (
              <span className="font-roboto font-medium text-base leading-6 text-slate-800">
                <strong>Telefone fixo: </strong> {telephone}
              </span>
            )}

            {cellphone && (
              <span className="font-roboto font-medium text-base leading-6 text-slate-800">
                <strong>Telefone celular: </strong> {cellphone}
              </span>
            )}

            <span className="font-roboto font-medium text-base leading-6 text-slate-800">
              <strong>Horário de atendimento: </strong> Segunda à sexta das 9h
              às 18h
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
