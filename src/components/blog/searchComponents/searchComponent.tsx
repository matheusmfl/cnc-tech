import { CollapsibleTags } from './collapsibleTags'
import { SearchInput } from './searchInput'
import { TagsContainer } from './tagsComponents/TagsContainer'

export function SearchComponent() {
  return (
    <div className="flex flex-col gap-5">
      <SearchInput />
      <CollapsibleTags>
        <TagsContainer />
      </CollapsibleTags>
    </div>
  )
}
