import { SectionDestaques } from '@/components/blog/SectionDestaques'
import { SectionFeed } from '@/components/blog/SectionFeed'
import { SearchComponent } from '@/components/blog/searchComponents/searchComponent'
import { AsideDesktop } from '@/components/home/header/AsideDesktop'
import { DesktopLogo } from '@/components/home/header/DesktopLogo'
import { Header } from '@/components/home/header/Header'

export default async function BlogHome() {
  return (
    <>
      <div className="md:fixed md:left-0 z-10">
        <Header />
        <AsideDesktop />
      </div>
      <DesktopLogo />

      <main className="bg-slate-100 flex flex-col p-6 gap-5 md:px-20 md:py-10 md:ml-[320px]">
        <SearchComponent />
        {/* @ts-expect-error */}
        <SectionDestaques />

        <SectionFeed />
      </main>
    </>
  )
}
