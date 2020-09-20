import * as Types from './interfaces'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export const IMoneyFragment = gql`
  fragment MoneyFragment on Money {
    amount
    currency
  }
`
export const ITaxedMoneyFragment = gql`
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
  ${IMoneyFragment}
`
export const ITaxedMoneyRangeFragment = gql`
  fragment TaxedMoneyRangeFragment on TaxedMoneyRange {
    start {
      ...TaxedMoneyFragment
    }
    stop {
      ...TaxedMoneyFragment
    }
  }
  ${ITaxedMoneyFragment}
`
export const IProductPricingInfoFragment = gql`
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
  ${ITaxedMoneyFragment}
  ${ITaxedMoneyRangeFragment}
`
export const IProductDetailsFragment = gql`
  fragment ProductDetailsFragment on Product {
    id
    name
    description
    pricing {
      ...ProductPricingInfoFragment
    }
  }
  ${IProductPricingInfoFragment}
`
export const ICollectionFragment = gql`
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
  ${IProductDetailsFragment}
`
export const FirstProductsDocument = gql`
  query FirstProducts {
    products(first: 5) {
      edges {
        node {
          ...ProductDetailsFragment
        }
      }
    }
  }
  ${IProductDetailsFragment}
`

/**
 * __useFirstProductsQuery__
 *
 * To run a query within a React component, call `useFirstProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFirstProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.FirstProductsQuery,
    Types.FirstProductsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.FirstProductsQuery,
    Types.FirstProductsQueryVariables
  >(FirstProductsDocument, baseOptions)
}
export function useFirstProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.FirstProductsQuery,
    Types.FirstProductsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.FirstProductsQuery,
    Types.FirstProductsQueryVariables
  >(FirstProductsDocument, baseOptions)
}
export type FirstProductsQueryHookResult = ReturnType<
  typeof useFirstProductsQuery
>
export type FirstProductsLazyQueryHookResult = ReturnType<
  typeof useFirstProductsLazyQuery
>
export type FirstProductsQueryResult = Apollo.QueryResult<
  Types.FirstProductsQuery,
  Types.FirstProductsQueryVariables
>
export function refetchFirstProductsQuery(
  variables?: Types.FirstProductsQueryVariables
) {
  return { query: FirstProductsDocument, variables: variables }
}
export const HomepageShopDocument = gql`
  query HomepageShop {
    shop {
      defaultCurrency
      homepageCollection {
        ...CollectionFragment
      }
    }
  }
  ${ICollectionFragment}
`

/**
 * __useHomepageShopQuery__
 *
 * To run a query within a React component, call `useHomepageShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageShopQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageShopQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.HomepageShopQuery,
    Types.HomepageShopQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.HomepageShopQuery,
    Types.HomepageShopQueryVariables
  >(HomepageShopDocument, baseOptions)
}
export function useHomepageShopLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.HomepageShopQuery,
    Types.HomepageShopQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.HomepageShopQuery,
    Types.HomepageShopQueryVariables
  >(HomepageShopDocument, baseOptions)
}
export type HomepageShopQueryHookResult = ReturnType<
  typeof useHomepageShopQuery
>
export type HomepageShopLazyQueryHookResult = ReturnType<
  typeof useHomepageShopLazyQuery
>
export type HomepageShopQueryResult = Apollo.QueryResult<
  Types.HomepageShopQuery,
  Types.HomepageShopQueryVariables
>
export function refetchHomepageShopQuery(
  variables?: Types.HomepageShopQueryVariables
) {
  return { query: HomepageShopDocument, variables: variables }
}
