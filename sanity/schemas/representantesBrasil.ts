import { defineField, defineType } from 'sanity'

export const RepresentantesBrasil = defineType({
  name: 'representantesBrasil',
  title: 'representantes Brasil',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do representante',
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
      name: 'bio',
      title: 'Biografia',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'Estado *Campo obrigatório',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Território Nacional', value: 'AC' },
          { title: 'Acre', value: 'AC' },
          { title: 'Alagoas', value: 'AL' },
          { title: 'Amapá', value: 'AP' },
          { title: 'Amazonas', value: 'AM' },
          { title: 'Bahia', value: 'BA' },
          { title: 'Ceará', value: 'CE' },
          { title: 'Distrito Federal', value: 'DF' },
          { title: 'Espírito Santo', value: 'ES' },
          { title: 'Goiás', value: 'GO' },
          { title: 'Maranhão', value: 'MA' },
          { title: 'Mato Grosso', value: 'MT' },
          { title: 'Mato Grosso do Sul', value: 'MS' },
          { title: 'Minas Gerais', value: 'MG' },
          { title: 'Pará', value: 'PA' },
          { title: 'Paraíba', value: 'PB' },
          { title: 'Paraná', value: 'PR' },
          { title: 'Pernambuco', value: 'PE' },
          { title: 'Piauí', value: 'PI' },
          { title: 'Rio de Janeiro', value: 'RJ' },
          { title: 'Rio Grande do Norte', value: 'RN' },
          { title: 'Rio Grande do Sul', value: 'RS' },
          { title: 'Rondônia', value: 'RO' },
          { title: 'Roraima', value: 'RR' },
          { title: 'Santa Catarina', value: 'SC' },
          { title: 'São Paulo', value: 'SP' },
          { title: 'Sergipe', value: 'SE' },
          { title: 'Tocantins', value: 'TO' },
        ],
      },
    }),
    defineField({
      name: 'city',
      title: 'Cidade',
      type: 'string',
    }),
    defineField({
      name: 'avatar',
      title: 'Foto do perfil',
      type: 'image',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'telephone',
      title: 'Telefone Fixo',
      type: 'string',
    }),
    defineField({
      name: 'cellphone',
      title:
        'Celular (Sem Parenteses, sem Traços, sem espaços, com 0 + DDD  e número somente ex: 011940004000)',
      type: 'string',
    }),
  ],
})
