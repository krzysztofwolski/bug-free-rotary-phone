import * as Types from './interfaces'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export const ImageFragmentDoc = gql`
  fragment ImageFragment on Image {
    alt
    url
  }
`
export const MoneyFragmentDoc = gql`
  fragment MoneyFragment on Money {
    amount
    currency
  }
`
export const TaxedMoneyFragmentDoc = gql`
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
  ${MoneyFragmentDoc}
`
export const TaxedMoneyRangeFragmentDoc = gql`
  fragment TaxedMoneyRangeFragment on TaxedMoneyRange {
    start {
      ...TaxedMoneyFragment
    }
    stop {
      ...TaxedMoneyFragment
    }
  }
  ${TaxedMoneyFragmentDoc}
`
export const ProductPricingInfoFragmentDoc = gql`
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
  ${TaxedMoneyFragmentDoc}
  ${TaxedMoneyRangeFragmentDoc}
`
export const ProductDetailsFragmentDoc = gql`
  fragment ProductDetailsFragment on Product {
    id
    name
    description
    thumbnail(size: 500) {
      ...ImageFragment
    }
    pricing {
      ...ProductPricingInfoFragment
    }
  }
  ${ImageFragmentDoc}
  ${ProductPricingInfoFragmentDoc}
`
export const CollectionFragmentDoc = gql`
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
  ${ProductDetailsFragmentDoc}
`
export const FirstProductsQueryDocument = gql`
  query FirstProductsQuery {
    products(first: 5) {
      edges {
        node {
          ...ProductDetailsFragment
        }
      }
    }
  }
  ${ProductDetailsFragmentDoc}
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
    Types.IFirstProductsQuery,
    Types.IFirstProductsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.IFirstProductsQuery,
    Types.IFirstProductsQueryVariables
  >(FirstProductsQueryDocument, baseOptions)
}
export function useFirstProductsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.IFirstProductsQuery,
    Types.IFirstProductsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.IFirstProductsQuery,
    Types.IFirstProductsQueryVariables
  >(FirstProductsQueryDocument, baseOptions)
}
export type FirstProductsQueryHookResult = ReturnType<
  typeof useFirstProductsQuery
>
export type FirstProductsQueryLazyQueryHookResult = ReturnType<
  typeof useFirstProductsQueryLazyQuery
>
export type FirstProductsQueryQueryResult = Apollo.QueryResult<
  Types.IFirstProductsQuery,
  Types.IFirstProductsQueryVariables
>
export function refetchFirstProductsQuery(
  variables?: Types.IFirstProductsQueryVariables
) {
  return { query: FirstProductsQueryDocument, variables: variables }
}
export const HomepageShopQueryDocument = gql`
  query HomepageShopQuery {
    shop {
      defaultCurrency
      homepageCollection {
        ...CollectionFragment
      }
    }
  }
  ${CollectionFragmentDoc}
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
    Types.IHomepageShopQuery,
    Types.IHomepageShopQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.IHomepageShopQuery,
    Types.IHomepageShopQueryVariables
  >(HomepageShopQueryDocument, baseOptions)
}
export function useHomepageShopQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.IHomepageShopQuery,
    Types.IHomepageShopQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.IHomepageShopQuery,
    Types.IHomepageShopQueryVariables
  >(HomepageShopQueryDocument, baseOptions)
}
export type HomepageShopQueryHookResult = ReturnType<
  typeof useHomepageShopQuery
>
export type HomepageShopQueryLazyQueryHookResult = ReturnType<
  typeof useHomepageShopQueryLazyQuery
>
export type HomepageShopQueryQueryResult = Apollo.QueryResult<
  Types.IHomepageShopQuery,
  Types.IHomepageShopQueryVariables
>
export function refetchHomepageShopQuery(
  variables?: Types.IHomepageShopQueryVariables
) {
  return { query: HomepageShopQueryDocument, variables: variables }
}