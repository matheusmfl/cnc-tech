import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productCategory',
  title: 'Categorias PRODUTO',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
  ],
})
