import * as Types from './schemas'

export type MoneyFragmentFragment = { __typename?: 'Money' } & Pick<
  Types.Money,
  'amount' | 'currency' | 'localized'
>

export type TaxedMoneyFragmentFragment = { __typename?: 'TaxedMoney' } & Pick<
  Types.TaxedMoney,
  'currency'
> & {
    gross: { __typename?: 'Money' } & MoneyFragmentFragment
    net: { __typename?: 'Money' } & MoneyFragmentFragment
    tax: { __typename?: 'Money' } & MoneyFragmentFragment
  }

export type FirstProductsQueryVariables = Types.Exact<{ [key: string]: never }>

export type FirstProductsQuery = { __typename?: 'Query' } & {
  products?: Types.Maybe<
    { __typename?: 'ProductCountableConnection' } & {
      edges: Array<
        { __typename?: 'ProductCountableEdge' } & {
          node: { __typename?: 'Product' } & Pick<
            Types.Product,
            'id' | 'name' | 'description'
          > & {
              minimalVariantPrice?: Types.Maybe<
                { __typename?: 'Money' } & MoneyFragmentFragment
              >
            }
        }
      >
    }
  >
}
