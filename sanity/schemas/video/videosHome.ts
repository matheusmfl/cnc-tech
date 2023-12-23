import { defineField, defineType } from 'sanity'

export const videosHome = defineType({
  name: 'videos',
  title: 'Home Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'videoUrl',
      title: 'Url no youtube do vídeo',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Breve resumo do vídeo',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Thumb do vídeo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
