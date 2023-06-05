import { Category } from '@/@types/category'
import { createClient, groq } from 'next-sanity'
import { clientConfig } from './config/client-config'

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
