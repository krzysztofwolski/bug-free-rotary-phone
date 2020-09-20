import { CollectionFragment } from 'gql/queries/Products/Collection'
import { gql } from '@apollo/client'

export const HomepageShopQuery = gql` 
  query HomepageShopQuery {
	shop {
    defaultCurrency
    homepageCollection {
      ...CollectionFragment
    }
  }
  ${CollectionFragment}
}
`
