import { gql } from '@apollo/client'
import { ProductDetailsFragment } from './Products'

export const CategoryFragment = gql`
  fragment CategoryFragment on Category {
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

export const CategoryDetailsBySlugQuery = gql`
  query CategoryDetailsBySlug($slug: String!) {
    category(slug: $slug) {
        products (first: 100){
            edges {
                node {
                ...ProductDetailsFragment
                }
            }
        }
    }
    ${ProductDetailsFragment}
  }
`
