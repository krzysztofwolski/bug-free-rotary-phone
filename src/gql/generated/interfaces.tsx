import * as Types from './schemas'

export type ICollectionFragment = { __typename?: 'Collection' } & Pick<
  Types.ICollection,
  'id' | 'slug' | 'name' | 'description'
> & {
    products?: Types.Maybe<
      { __typename?: 'ProductCountableConnection' } & {
        edges: Array<
          { __typename?: 'ProductCountableEdge' } & {
            node: { __typename?: 'Product' } & IProductDetailsFragment
          }
        >
      }
    >
  }

export type IMoneyFragment = { __typename?: 'Money' } & Pick<
  Types.IMoney,
  'amount' | 'currency'
>

export type ITaxedMoneyFragment = { __typename?: 'TaxedMoney' } & Pick<
  Types.ITaxedMoney,
  'currency'
> & {
    gross: { __typename?: 'Money' } & IMoneyFragment
    net: { __typename?: 'Money' } & IMoneyFragment
    tax: { __typename?: 'Money' } & IMoneyFragment
  }

export type ITaxedMoneyRangeFragment = { __typename?: 'TaxedMoneyRange' } & {
  start?: Types.Maybe<{ __typename?: 'TaxedMoney' } & ITaxedMoneyFragment>
  stop?: Types.Maybe<{ __typename?: 'TaxedMoney' } & ITaxedMoneyFragment>
}

export type IProductPricingInfoFragment = {
  __typename?: 'ProductPricingInfo'
} & Pick<Types.IProductPricingInfo, 'onSale'> & {
    discount?: Types.Maybe<{ __typename?: 'TaxedMoney' } & ITaxedMoneyFragment>
    discountLocalCurrency?: Types.Maybe<
      { __typename?: 'TaxedMoney' } & ITaxedMoneyFragment
    >
    priceRange?: Types.Maybe<
      { __typename?: 'TaxedMoneyRange' } & ITaxedMoneyRangeFragment
    >
    priceRangeUndiscounted?: Types.Maybe<
      { __typename?: 'TaxedMoneyRange' } & ITaxedMoneyRangeFragment
    >
    priceRangeLocalCurrency?: Types.Maybe<
      { __typename?: 'TaxedMoneyRange' } & ITaxedMoneyRangeFragment
    >
  }

export type IImageFragment = { __typename?: 'Image' } & Pick<
  Types.IImage,
  'alt' | 'url'
>

export type IProductDetailsFragment = { __typename?: 'Product' } & Pick<
  Types.IProduct,
  'id' | 'name' | 'description'
> & {
    thumbnail?: Types.Maybe<{ __typename?: 'Image' } & IImageFragment>
    pricing?: Types.Maybe<
      { __typename?: 'ProductPricingInfo' } & IProductPricingInfoFragment
    >
  }

export type IFirstProductsQueryVariables = Types.Exact<{ [key: string]: never }>

export type IFirstProductsQuery = { __typename?: 'Query' } & {
  products?: Types.Maybe<
    { __typename?: 'ProductCountableConnection' } & {
      edges: Array<
        { __typename?: 'ProductCountableEdge' } & {
          node: { __typename?: 'Product' } & IProductDetailsFragment
        }
      >
    }
  >
}

export type IHomepageShopQueryVariables = Types.Exact<{ [key: string]: never }>

export type IHomepageShopQuery = { __typename?: 'Query' } & {
  shop: { __typename?: 'Shop' } & Pick<Types.IShop, 'defaultCurrency'> & {
      homepageCollection?: Types.Maybe<
        { __typename?: 'Collection' } & ICollectionFragment
      >
    }
}