import { Category } from '@/@types/category'
import { createClient, groq } from 'next-sanity'
import { clientConfig } from './config/client-config'
import { Posts } from '@/@types/post'
import { Author } from '@/@types/author'
import imageUrlBuilder from '@sanity/image-url'

export async function getCategories(): Promise<Category[]> {
  const client = createClient(clientConfig)

  try {
    const categories = await client.fetch(groq`*[_type == 'category']`)
    return categories
  } catch (error) {
    console.log('Erro ao buscar as categorias do blog:' + error)
    throw error
  }
}

export async function getProductCategories() {
  const client = createClient(clientConfig)
  try {
    // Consulta para buscar todos os documentos do tipo 'produto'
    const query = `*[_type == 'productCategory']`

    // Execute a consulta
    const categorias = await client.fetch(query)

    // Faça o que você deseja com os produtos, por exemplo, imprimir no console

    // Retorne os produtos para uso posterior
    return categorias
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    throw error
  }
}

export async function getProductsByCategory(categorySlug: string) {
  const client = createClient(clientConfig)

  const query = groq`
    *[_type == "produto" && references(*[_type == "productCategory" && slug.current == $categorySlug]._id)] {
      _id,
      title,
      slug,
      image,
      body,
      specifications
    }
  `

  const params = { categorySlug }
  try {
    const products = await client.fetch(query, params)
    return products
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return []
  }
}

export async function getPostsFeed(page?: number): Promise<Posts[]> {
  const client = createClient(clientConfig)

  try {
    if (page) {
      const pageSize = 6
      const startIndex = (page - 1) * pageSize
      const endIndex = startIndex + pageSize

      return await client.fetch(groq`*[_type == 'post' && highlight == false]{
        title,
        'image': image.asset->url,
        'categories': categories[]->,
        slug,
        _id,
        _createdAt,
        highlight
      }[${startIndex}...${endIndex}]`)
    }
    return await client.fetch(groq`*[_type == 'post' && highlight == false]{
      title,
      'image': image.asset->url,
      'categories':categories[]->,
      slug,
      _id,
      _createdAt,
      highlight

    }`)
  } catch (error) {
    console.log('Erro ao buscar os posts:' + error)
    throw error
  }
}

export async function getPostsByHighlights(): Promise<Posts[]> {
  const client = createClient(clientConfig)

  try {
    return await client.fetch(groq`*[_type == 'post' && highlight == true]{
      title,
      'image': image.asset->url,
      'categories':categories[]->,
      slug,
      _id,
      _createdAt,
      highlight

    }`)
  } catch (error) {
    console.log('Erro ao buscar os posts:' + error)
    throw error
  }
}

export async function getAuthor(): Promise<Author[]> {
  const client = createClient(clientConfig)

  try {
    const query = groq`*[_id == $authorId][0]`
    const authorId = '0eb75ddb-5397-4d8d-a349-c99837506fa1'
    return await client.fetch(query, { authorId })
  } catch (error) {
    console.log('Erro ao buscar o autor:' + error)
    throw error
  }
}

export async function getPage(slug: string): Promise<Posts> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  'author': author-> name,
  'image': image.asset->url,
  'categories':categories[]->title,
   _id,
   _createdAt,
   body,
  "slug": slug.current,
  }`,
    { slug },
  )
}

export const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
})

export async function getPostsByTags(categoryIds: string[]): Promise<Posts[]> {
  const client = createClient(clientConfig)

  try {
    let query = groq`*[_type == 'post'`
    if (categoryIds.length === 1) {
      query = groq`${query} && references("${categoryIds[0]}")]`
    } else if (categoryIds.length > 1) {
      query = groq`${query} && (`
      categoryIds.forEach((categoryId, index) => {
        query = groq`${query} references("${categoryId}")`
        if (index < categoryIds.length - 1) {
          query = groq`${query} ||`
        }
      })
      query = groq`${query})]`
    } else {
      query = groq`${query}]`
    }

    query = groq`${query}{
      title,
      'image': image.asset->url,
      'categories':categories[]->,
      slug,
      _id,
      _createdAt,
      highlight
    }`

    return await client.fetch(query)
  } catch (error) {
    console.log('Erro ao buscar os posts: ' + error)
    throw error
  }
}
