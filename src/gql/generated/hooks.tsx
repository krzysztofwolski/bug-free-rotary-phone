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
  ${ImageFragmentDoc}
  ${ProductPricingInfoFragmentDoc}
`
export const CategoryFragmentDoc = gql`
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
  ${ProductDetailsFragmentDoc}
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
export const MenuItemFragmentDoc = gql`
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
export const MenuFragmentDoc = gql`
  fragment MenuFragment on Menu {
    id
    name
    items {
      ...MenuItemFragment
      children {
        ...MenuItemFragment
      }
    }
  }
  ${MenuItemFragmentDoc}
`
export const CategoryDetailsBySlugDocument = gql`
  query CategoryDetailsBySlug($slug: String!) {
    category(slug: $slug) {
      products(first: 100) {
        edges {
          node {
            ...ProductDetailsFragment
          }
        }
      }
    }
  }
  ${ProductDetailsFragmentDoc}
`

/**
 * __useCategoryDetailsBySlugQuery__
 *
 * To run a query within a React component, call `useCategoryDetailsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryDetailsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryDetailsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryDetailsBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.ICategoryDetailsBySlugQuery,
    Types.ICategoryDetailsBySlugQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.ICategoryDetailsBySlugQuery,
    Types.ICategoryDetailsBySlugQueryVariables
  >(CategoryDetailsBySlugDocument, baseOptions)
}
export function useCategoryDetailsBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ICategoryDetailsBySlugQuery,
    Types.ICategoryDetailsBySlugQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.ICategoryDetailsBySlugQuery,
    Types.ICategoryDetailsBySlugQueryVariables
  >(CategoryDetailsBySlugDocument, baseOptions)
}
export type CategoryDetailsBySlugQueryHookResult = ReturnType<
  typeof useCategoryDetailsBySlugQuery
>
export type CategoryDetailsBySlugLazyQueryHookResult = ReturnType<
  typeof useCategoryDetailsBySlugLazyQuery
>
export type CategoryDetailsBySlugQueryResult = Apollo.QueryResult<
  Types.ICategoryDetailsBySlugQuery,
  Types.ICategoryDetailsBySlugQueryVariables
>
export function refetchCategoryDetailsBySlugQuery(
  variables?: Types.ICategoryDetailsBySlugQueryVariables
) {
  return { query: CategoryDetailsBySlugDocument, variables: variables }
}
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
export const ProductDetailsBySlugDocument = gql`
  query ProductDetailsBySlug($slug: String!) {
    product(slug: $slug) {
      ...ProductDetailsFragment
    }
  }
  ${ProductDetailsFragmentDoc}
`

/**
 * __useProductDetailsBySlugQuery__
 *
 * To run a query within a React component, call `useProductDetailsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductDetailsBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.IProductDetailsBySlugQuery,
    Types.IProductDetailsBySlugQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.IProductDetailsBySlugQuery,
    Types.IProductDetailsBySlugQueryVariables
  >(ProductDetailsBySlugDocument, baseOptions)
}
export function useProductDetailsBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.IProductDetailsBySlugQuery,
    Types.IProductDetailsBySlugQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.IProductDetailsBySlugQuery,
    Types.IProductDetailsBySlugQueryVariables
  >(ProductDetailsBySlugDocument, baseOptions)
}
export type ProductDetailsBySlugQueryHookResult = ReturnType<
  typeof useProductDetailsBySlugQuery
>
export type ProductDetailsBySlugLazyQueryHookResult = ReturnType<
  typeof useProductDetailsBySlugLazyQuery
>
export type ProductDetailsBySlugQueryResult = Apollo.QueryResult<
  Types.IProductDetailsBySlugQuery,
  Types.IProductDetailsBySlugQueryVariables
>
export function refetchProductDetailsBySlugQuery(
  variables?: Types.IProductDetailsBySlugQueryVariables
) {
  return { query: ProductDetailsBySlugDocument, variables: variables }
}
export const HomepageShopQueryDocument = gql`
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
  }
  ${CollectionFragmentDoc}
  ${MenuFragmentDoc}
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
