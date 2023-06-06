import { Image, PortableTextBlock, Slug } from 'sanity'
import { Category } from './category'
import { Author } from './author'
import { Base } from './typings'

export interface Posts extends Base {
  author: Author
  highlight: boolean
  title: string
  slug: Slug
  image: Image
  categories: Category[]
  body: PortableTextBlock[]
}
