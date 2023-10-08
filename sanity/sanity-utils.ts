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

export async function getRepresentantesByState(estado: string) {
  const client = createClient(clientConfig)

  try {
    const query = `*[_type == 'representantesBrasil'  && state == $estado]`

    const resultado = await client.fetch(query, { estado })
    return resultado
  } catch (error) {
    console.error('Error ao buscar representante')
    throw error
  }
}

export async function getStateRepresentantes() {
  const client = createClient(clientConfig)
  try {
    const query = `*[_type == 'representantesBrasil']{
      state
    }`

    const representantes = await client.fetch(query)

    // Extrair estados únicos da lista de representantes
    const estados = [...new Set(representantes.map((rep: any) => rep.state))]

    return estados
  } catch (error) {
    console.error('Erro ao buscar estados dos representaantes:', error)
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

export async function getCategoriesBySlug(categorySlug: string) {
  const client = createClient(clientConfig)

  try {
    const categoryQuery = `*[_type == 'productCategory' && slug.current == $categorySlug]`

    // Execute a consulta para obter a categoria
    const category = await client.fetch(categoryQuery, { categorySlug })

    if (!category || category.length === 0) {
      throw new Error('Categoria não encontrada')
    }

    return category[0].title // Retorna o título da categoria encontrada
  } catch (error) {
    console.error('Erro ao buscar categoria:', error)
    throw error // Você pode optar por relançar o erro para que ele seja tratado onde a função for chamada.
  }
}

export async function getProductsByCategorySlug(categorySlug: string) {
  const client = createClient(clientConfig)
  try {
    // Consulta GROQ para obter a categoria de produto com base no slug
    const categoryQuery = `*[_type == 'productCategory' && slug.current == $categorySlug]`

    // Execute a consulta para obter a categoria
    const [category] = await client.fetch(categoryQuery, { categorySlug })

    if (!category) {
      throw new Error('Categoria não encontrada')
    }

    // Consulta GROQ para obter produtos relacionados à categoria
    const productsQuery = `*[_type == 'produto' && references($category)] {
      title,
      "imageUrl": image.asset->url,
      slug
    }`

    // Execute a consulta para obter os produtos relacionados à categoria
    const products = await client.fetch(productsQuery, {
      category: category._id,
    })

    return products
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return []
  }
}

export async function getProductBySlug(slug: string) {
  const client = createClient(clientConfig)
  try {
    // Consulta GROQ para buscar o produto com base no slug
    const query = `
    *[_type == 'produto' && slug.current == $slug][0] {
      title,
      "imageUrl": image.asset->url,
      specifications,
      slug,
      productCategory,
      body
    }
  `

    // Execute a consulta para buscar o produto
    const product = await client.fetch(query, { slug })

    if (!product) {
      throw new Error('Produto não encontrado')
    }

    return product
  } catch (error) {
    console.error('Erro ao buscar o produto:', error)
    throw error // Você pode optar por relançar o erro para que ele seja tratado onde a função for chamada.
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
