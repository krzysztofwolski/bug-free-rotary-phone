import { CollectionFragment } from 'gql/queries/Products/Collection'
import { gql } from '@apollo/client'

export const MenuItemFragment = gql`
  fragment MenuItemFragment on MenuItem {
    id
    name
    category {
      id
      name
      slug
    }
  }
`

export const HomepageShopQuery = gql` 
  query HomepageShopQuery {
	shop {
    defaultCurrency
    homepageCollection {
      ...CollectionFragment
    }
    navigation {
      main {
        id 
        items {
          ...MenuItemFragment
        }
      }
    }
  }
  ${CollectionFragment}
  ${MenuItemFragment}
}
`
