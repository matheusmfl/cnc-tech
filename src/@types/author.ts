import { PortableTextBlock } from 'sanity'

// eslint-disable-next-line no-undef
export interface Author extends Base {
  bio: PortableTextBlock[]
  image: Image
  name: string
  slug: Slug
}
