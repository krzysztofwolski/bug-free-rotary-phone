import { gql } from '@apollo/client'
import { ProductDetailsFragment } from './Products'

export const CollectionFragment = gql`
  fragment CollectionFragment on Collection {
    id
    slug
    name
    description

    products(first: 10) {
      edges {
        node {
          ...ProductDetailsFragment
        }
      }
    }
  }
  ${ProductDetailsFragment}
`
