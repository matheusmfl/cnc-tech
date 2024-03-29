import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categorias BLOG',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
  ],
})
