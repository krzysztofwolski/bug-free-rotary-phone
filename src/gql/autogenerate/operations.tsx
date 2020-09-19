import * as Types from "./schemas";

export type FirstProductsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type FirstProductsQuery = { __typename?: "Query" } & {
  products?: Types.Maybe<
    { __typename?: "ProductCountableConnection" } & {
      edges: Array<
        { __typename?: "ProductCountableEdge" } & {
          node: { __typename?: "Product" } & Pick<
            Types.Product,
            "id" | "name" | "description"
          >;
        }
      >;
    }
  >;
};
