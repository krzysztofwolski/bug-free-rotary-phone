import { gql } from '@apollo/client'
import { CollectionFragment } from '../Products/Collection'

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
