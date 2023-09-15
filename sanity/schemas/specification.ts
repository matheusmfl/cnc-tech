import { defineField, defineType } from 'sanity'

export const Specification = defineType({
  name: 'specification',
  title: 'Especificação',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Chave',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Valor',
      type: 'string',
    }),
  ],
})
