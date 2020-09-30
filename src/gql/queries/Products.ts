import { gql } from '@apollo/client'

export const moneyFragments = {
  money: gql`
    fragment MoneyFragment on Money {
      amount
      currency
    }
  `,
}

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
  ${moneyFragments.money}
`

export const TaxedMoneyRangeFragment = gql`
  fragment TaxedMoneyRangeFragment on TaxedMoneyRange {
    start {
      ...TaxedMoneyFragment
    }
    stop {
      ...TaxedMoneyFragment
    }
  }
  ${TaxedMoneyFragment}
`

export const ProductPricingInfoFragment = gql`
  fragment ProductPricingInfoFragment on ProductPricingInfo {
    onSale
    discount {
      ...TaxedMoneyFragment
    }
    discountLocalCurrency {
      ...TaxedMoneyFragment
    }
    priceRange {
      ...TaxedMoneyRangeFragment
    }
    priceRangeUndiscounted {
      ...TaxedMoneyRangeFragment
    }
    priceRangeLocalCurrency {
      ...TaxedMoneyRangeFragment
    }
  }
  ${TaxedMoneyFragment}
  ${TaxedMoneyRangeFragment}
`

export const ImageFragment = gql`
  fragment ImageFragment on Image {
    alt
    url
  }
`

export const ProductDetailsFragment = gql`
  fragment ProductDetailsFragment on Product {
    id
    name
    slug
    description
    category {
      id
      name
      parent {
        id
        name
        parent {
          id
          name
        }
      }
    }
    thumbnail(size: 500) {
      ...ImageFragment
    }
    pricing {
      ...ProductPricingInfoFragment
    }
  }
  ${ProductPricingInfoFragment}
  ${ImageFragment}
`

export const FirstProductsQuery = gql`
  query FirstProductsQuery {
    products(first: 5) {
      edges {
        node {
          ...ProductDetailsFragment
        }
      }
    }
    ${ProductDetailsFragment}
  }
`

export const ProductDetailsBySlugQuery = gql`
  query ProductDetailsBySlug($slug: String!) {
    product(slug: $slug) {
      ...ProductDetailsFragment
    }
    ${ProductDetailsFragment}
  }
`
