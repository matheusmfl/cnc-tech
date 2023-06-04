import { CollapsibleTags } from './collapsibleTags'
import { SearchInput } from './searchInput'

export function SearchComponent() {
  return (
    <div className="flex flex-col gap-5">
      <SearchInput />
      <CollapsibleTags />
    </div>
  )
}
