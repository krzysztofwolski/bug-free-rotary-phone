import * as Types from "./operations";

import * as Operations from "./hooks";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { NormalizedCacheObject } from "@apollo/client";
import { QueryHookOptions, useQuery } from "@apollo/client";
import * as Apollo from "@apollo/client";
import React from "react";
import { getApolloClient } from "../withApollo";
export async function getServerPageFirstProducts<T extends true | false>(
  options: Omit<
    Apollo.QueryOptions<Types.FirstProductsQueryVariables>,
    "query"
  >,
  ctx?: any,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<Types.FirstProductsQuery>
    : { apolloState: NormalizedCacheObject };
}> {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.FirstProductsQuery>({
    ...options,
    query: Operations.FirstProductsDocument,
  });
  if (rawQueryResult) {
    return {
      props: data,
    } as any;
  }
  const apolloState = apolloClient.cache.extract();
  return {
    props: {
      apolloState,
    },
  } as any;
}
export const useFirstProducts = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.FirstProductsQuery,
    Types.FirstProductsQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.FirstProductsDocument, options);
};
export type PageFirstProductsComp = React.FC<{
  data?: Types.FirstProductsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageFirstProducts = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.FirstProductsQuery,
    Types.FirstProductsQueryVariables
  >
) => (WrappedComponent: PageFirstProductsComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.FirstProductsDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrFirstProducts = {
  getServerPage: getServerPageFirstProducts,
  withPage: withPageFirstProducts,
  usePage: useFirstProducts,
};
