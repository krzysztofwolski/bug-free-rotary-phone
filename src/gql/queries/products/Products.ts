import { gql } from '@apollo/client'

export const MoneyFragment = gql`
  fragment MoneyFragment on Money {
    amount
    currency
    localized
  }
`

export const TaxedMoneyFragment = gql`
  fragment TaxedMoneyFragment on TaxedMoney {
    currency
    gross {
      ...MoneyFragment
    }
    net {
      ...MoneyFragment
    }
    tax {
      ...MoneyFragment
    }
  }
  ${MoneyFragment}
`

export const FirstProductsQuery = gql`
  query FirstProducts {
    products(first: 5) {
      edges {
        node {
          id
          name
          description
          minimalVariantPrice {
            ...MoneyFragment
          }
        }
      }
    }
    ${MoneyFragment}
  }
`
