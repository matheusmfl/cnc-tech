import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import product from './schemas/product'
import { Specification } from './schemas/specification'
import productCategory from './schemas/productCategory'
import { RepresentantesBrasil } from './schemas/representantesBrasil'
import { videosHome } from './schemas/video/videosHome'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    product,
    Specification,
    productCategory,
    RepresentantesBrasil,
    videosHome,
  ],
}
