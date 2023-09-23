import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'produto',
  title: 'Produto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Modelo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'image',
      title: 'Banner Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto descritivo do conteúdo da imagem',
        },
      ],
    }),
    defineField({
      name: 'productCategory',
      title: 'Categoria',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'productCategory' } }],
    }),
    defineField({
      name: 'body',
      title: 'Corpo do texto',
      type: 'blockContent',
    }),
    defineField({
      name: 'specifications',
      title: 'Especificações Técnicas',
      type: 'array',
      of: [{ type: 'specification' }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
