import { Category } from '@/@types/category'
import { createClient, groq } from 'next-sanity'
import { clientConfig } from './config/client-config'
import { Posts } from '@/@types/post'
import { Author } from '@/@types/author'

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

export async function getPosts(): Promise<Posts[]> {
  const client = createClient(clientConfig)

  try {
    return await client.fetch(groq`*[_type == 'post']{
      title,
      'image': image.asset->url,
      categories[]->,
      slug,
      _id,
      _createdAt,
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
