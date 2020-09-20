import { NextPage, NextPageContext } from 'next'
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

/* eslint-disable */
export const withApollo = (PageComponent: NextPage) => (props: any) => {
  /* eslint-enable */
  return (
    <ApolloProvider client={getApolloClient(null, props.apolloState)}>
      <PageComponent />
    </ApolloProvider>
  )
}

export const getApolloClient = (
  ctx?: NextPageContext | null,
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink({
    uri: 'https://pwa.demo.saleor.rocks/graphql/',
    fetch,
  })
  const cache = new InMemoryCache().restore(initialState || {})
  return new ApolloClient({
    link: httpLink,
    cache,
  })
}
