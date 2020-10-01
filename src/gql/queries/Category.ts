import { gql } from '@apollo/client'
import { ProductDetailsFragment } from './Products'

export const CategoryDetailsFragment = gql`
  fragment CategoryDetailsFragment on Category {
    id
    slug
    name
    description
    products(first: 50) {
      edges {
        node {
          ...ProductDetailsFragment
        }
      }
    }
  }
  ${ProductDetailsFragment}
`

export const CategoryDetailsBySlugQuery = gql`
  query CategoryDetailsBySlugQuery($slug: String!) {
    category(slug: $slug) {
        ...CategoryDetailsFragment
    }
    ${CategoryDetailsFragment}
  }
`
