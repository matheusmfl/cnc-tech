import { SectionDestaques } from '@/components/blog/SectionDestaques'
import { SectionFeed } from '@/components/blog/SectionFeed'
import { SearchComponent } from '@/components/blog/searchComponents/searchComponent'

export default async function BlogHome() {
  return (
    <>
      <SearchComponent />
      {/* @ts-expect-error */}
      <SectionDestaques />
      {/* @ts-expect-error */}
      <SectionFeed />
    </>
  )
}
