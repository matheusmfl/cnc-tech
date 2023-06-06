import { Image, PortableTextBlock, Slug } from 'sanity'
import { Category } from './category'
import { Author } from './author'

// eslint-disable-next-line no-undef
export interface Posts extends Base {
  author: Author
  title: string
  slug: Slug
  image: Image
  categories: Category[]
  body: PortableTextBlock[]
}
