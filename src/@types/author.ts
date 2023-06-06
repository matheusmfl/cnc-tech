/* eslint-disable no-undef */
import { Image, PortableTextBlock, Slug } from 'sanity'
import { Base } from './typings'

// eslint-disable-next-line no-undef
export interface Author extends Base {
  bio: PortableTextBlock[]
  image: Image
  name: string
  slug: Slug
}
