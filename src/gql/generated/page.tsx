import * as Types from './interfaces'

import * as Operations from './hooks'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { NormalizedCacheObject } from '@apollo/client'
import { QueryHookOptions, useQuery } from '@apollo/client'
import * as Apollo from '@apollo/client'
import React from 'react'
import { getApolloClient } from '../withApollo'
export async function getServerPageCategoryDetailsBySlug<
  T extends true | false
>(
  options: Omit<
    Apollo.QueryOptions<Types.ICategoryDetailsBySlugQueryVariables>,
    'query'
  >,
  ctx?: any,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<Types.ICategoryDetailsBySlugQuery>
    : { apolloState: NormalizedCacheObject }
}> {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.ICategoryDetailsBySlugQuery>({
    ...options,
    query: Operations.CategoryDetailsBySlugQueryDocument,
  })
  if (rawQueryResult) {
    return {
      props: data,
    } as any
  }
  const apolloState = apolloClient.cache.extract()
  return {
    props: {
      apolloState,
    },
  } as any
}
export const useCategoryDetailsBySlug = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.ICategoryDetailsBySlugQuery,
    Types.ICategoryDetailsBySlugQueryVariables
  >
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.CategoryDetailsBySlugQueryDocument, options)
}
export type PageCategoryDetailsBySlugComp = React.FC<{
  data?: Types.ICategoryDetailsBySlugQuery
  error?: Apollo.ApolloError
}>
export const withPageCategoryDetailsBySlug = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.ICategoryDetailsBySlugQuery,
    Types.ICategoryDetailsBySlugQueryVariables
  >
) => (WrappedComponent: PageCategoryDetailsBySlugComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  const { data, error } = useQuery(
    Operations.CategoryDetailsBySlugQueryDocument,
    options
  )
  return <WrappedComponent {...props} data={data} error={error} />
}
export const ssrCategoryDetailsBySlug = {
  getServerPage: getServerPageCategoryDetailsBySlug,
  withPage: withPageCategoryDetailsBySlug,
  usePage: useCategoryDetailsBySlug,
}
export async function getServerPageFirstProducts<T extends true | false>(
  options: Omit<
    Apollo.QueryOptions<Types.IFirstProductsQueryVariables>,
    'query'
  >,
  ctx?: any,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<Types.IFirstProductsQuery>
    : { apolloState: NormalizedCacheObject }
}> {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.IFirstProductsQuery>({
    ...options,
    query: Operations.FirstProductsQueryDocument,
  })
  if (rawQueryResult) {
    return {
      props: data,
    } as any
  }
  const apolloState = apolloClient.cache.extract()
  return {
    props: {
      apolloState,
    },
  } as any
}
export const useFirstProducts = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.IFirstProductsQuery,
    Types.IFirstProductsQueryVariables
  >
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.FirstProductsQueryDocument, options)
}
export type PageFirstProductsComp = React.FC<{
  data?: Types.IFirstProductsQuery
  error?: Apollo.ApolloError
}>
export const withPageFirstProducts = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.IFirstProductsQuery,
    Types.IFirstProductsQueryVariables
  >
) => (WrappedComponent: PageFirstProductsComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  const { data, error } = useQuery(
    Operations.FirstProductsQueryDocument,
    options
  )
  return <WrappedComponent {...props} data={data} error={error} />
}
export const ssrFirstProducts = {
  getServerPage: getServerPageFirstProducts,
  withPage: withPageFirstProducts,
  usePage: useFirstProducts,
}
export async function getServerPageProductDetailsBySlug<T extends true | false>(
  options: Omit<
    Apollo.QueryOptions<Types.IProductDetailsBySlugQueryVariables>,
    'query'
  >,
  ctx?: any,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<Types.IProductDetailsBySlugQuery>
    : { apolloState: NormalizedCacheObject }
}> {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.IProductDetailsBySlugQuery>({
    ...options,
    query: Operations.ProductDetailsBySlugQueryDocument,
  })
  if (rawQueryResult) {
    return {
      props: data,
    } as any
  }
  const apolloState = apolloClient.cache.extract()
  return {
    props: {
      apolloState,
    },
  } as any
}
export const useProductDetailsBySlug = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.IProductDetailsBySlugQuery,
    Types.IProductDetailsBySlugQueryVariables
  >
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.ProductDetailsBySlugQueryDocument, options)
}
export type PageProductDetailsBySlugComp = React.FC<{
  data?: Types.IProductDetailsBySlugQuery
  error?: Apollo.ApolloError
}>
export const withPageProductDetailsBySlug = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.IProductDetailsBySlugQuery,
    Types.IProductDetailsBySlugQueryVariables
  >
) => (WrappedComponent: PageProductDetailsBySlugComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  const { data, error } = useQuery(
    Operations.ProductDetailsBySlugQueryDocument,
    options
  )
  return <WrappedComponent {...props} data={data} error={error} />
}
export const ssrProductDetailsBySlug = {
  getServerPage: getServerPageProductDetailsBySlug,
  withPage: withPageProductDetailsBySlug,
  usePage: useProductDetailsBySlug,
}
export async function getServerPageHomeShop<T extends true | false>(
  options: Omit<
    Apollo.QueryOptions<Types.IHomepageShopQueryVariables>,
    'query'
  >,
  ctx?: any,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<Types.IHomepageShopQuery>
    : { apolloState: NormalizedCacheObject }
}> {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.IHomepageShopQuery>({
    ...options,
    query: Operations.HomepageShopQueryDocument,
  })
  if (rawQueryResult) {
    return {
      props: data,
    } as any
  }
  const apolloState = apolloClient.cache.extract()
  return {
    props: {
      apolloState,
    },
  } as any
}
export const useHomeShop = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.IHomepageShopQuery,
    Types.IHomepageShopQueryVariables
  >
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.HomepageShopQueryDocument, options)
}
export type PageHomeShopComp = React.FC<{
  data?: Types.IHomepageShopQuery
  error?: Apollo.ApolloError
}>
export const withPageHomeShop = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.IHomepageShopQuery,
    Types.IHomepageShopQueryVariables
  >
) => (WrappedComponent: PageHomeShopComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  const { data, error } = useQuery(
    Operations.HomepageShopQueryDocument,
    options
  )
  return <WrappedComponent {...props} data={data} error={error} />
}
export const ssrHomeShop = {
  getServerPage: getServerPageHomeShop,
  withPage: withPageHomeShop,
  usePage: useHomeShop,
}
