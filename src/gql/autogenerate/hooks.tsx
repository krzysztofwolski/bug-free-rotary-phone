import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export const MoneyFragmentFragmentDoc = gql`
  fragment MoneyFragment on Money {
    amount
    currency
    localized
  }
`
export const TaxedMoneyFragmentFragmentDoc = gql`
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
  ${MoneyFragmentFragmentDoc}
`
export const FirstProductsDocument = gql`
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
  }
  ${MoneyFragmentFragmentDoc}
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
