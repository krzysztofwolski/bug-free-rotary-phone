import { gql } from '@apollo/client'
import { CollectionFragment } from './Collection'

export const MenuItemFragment = gql`
  fragment MenuItemFragment on MenuItem {
    id
    name
    category {
      id
      name
      slug
    }
    collection {
      id
      name
      slug
    }
    page {
      id
      title
      slug
    }
  }
`

export const MenuFragment = gql`
  fragment MenuFragment on Menu {
    id
    name
    items {
      ...MenuItemFragment
      children {
        ...MenuItemFragment
      }
    }

    ${MenuItemFragment}
  }
`

export const HomepageShopQuery = gql` 
  query HomepageShopQuery {
	shop {
    name
    defaultCurrency
    homepageCollection {
      ...CollectionFragment
    }
    navigation {
      main {
          ...MenuFragment
      }
    }
  }
  ${CollectionFragment}
  ${MenuFragment}
}
`
