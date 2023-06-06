/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: Reference
}

interface Reference {
  _ref: string
  _type: 'reference'
}

interface Slug {
  _type: 'slug'
  current: string
}

interface MainImage {
  _type: 'image'
  asset: Reference
}
