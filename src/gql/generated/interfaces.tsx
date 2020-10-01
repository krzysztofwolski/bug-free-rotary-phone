import * as Types from './schemas'

export type ICategoryDetailsFragment = { __typename?: 'Category' } & Pick<
  Types.ICategory,
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

export type ICategoryDetailsBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type ICategoryDetailsBySlugQuery = { __typename?: 'Query' } & {
  category?: Types.Maybe<{ __typename?: 'Category' } & ICategoryDetailsFragment>
}

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

export type IVariantPricingInfoFragment = {
  __typename?: 'VariantPricingInfo'
} & Pick<Types.IVariantPricingInfo, 'onSale'> & {
    discount?: Types.Maybe<{ __typename?: 'TaxedMoney' } & ITaxedMoneyFragment>
    discountLocalCurrency?: Types.Maybe<
      { __typename?: 'TaxedMoney' } & ITaxedMoneyFragment
    >
    price?: Types.Maybe<{ __typename?: 'TaxedMoney' } & ITaxedMoneyFragment>
    priceUndiscounted?: Types.Maybe<
      { __typename?: 'TaxedMoney' } & ITaxedMoneyFragment
    >
    priceLocalCurrency?: Types.Maybe<
      { __typename?: 'TaxedMoney' } & ITaxedMoneyFragment
    >
  }

export type IProductVariantFragment = { __typename?: 'ProductVariant' } & Pick<
  Types.IProductVariant,
  'id' | 'name' | 'sku'
> & {
    pricing?: Types.Maybe<
      { __typename?: 'VariantPricingInfo' } & IVariantPricingInfoFragment
    >
  }

export type IImageFragment = { __typename?: 'Image' } & Pick<
  Types.IImage,
  'alt' | 'url'
>

export type IProductDetailsFragment = { __typename?: 'Product' } & Pick<
  Types.IProduct,
  'id' | 'name' | 'slug' | 'description'
> & {
    variants?: Types.Maybe<
      Array<
        Types.Maybe<{ __typename?: 'ProductVariant' } & IProductVariantFragment>
      >
    >
    category?: Types.Maybe<
      { __typename?: 'Category' } & Pick<
        Types.ICategory,
        'id' | 'name' | 'slug'
      > & {
          parent?: Types.Maybe<
            { __typename?: 'Category' } & Pick<
              Types.ICategory,
              'id' | 'name' | 'slug'
            > & {
                parent?: Types.Maybe<
                  { __typename?: 'Category' } & Pick<
                    Types.ICategory,
                    'id' | 'name' | 'slug'
                  >
                >
              }
          >
        }
    >
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

export type IProductDetailsBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type IProductDetailsBySlugQuery = { __typename?: 'Query' } & {
  product?: Types.Maybe<{ __typename?: 'Product' } & IProductDetailsFragment>
}

export type IMenuItemFragment = { __typename?: 'MenuItem' } & Pick<
  Types.IMenuItem,
  'id' | 'name'
> & {
    category?: Types.Maybe<
      { __typename?: 'Category' } & Pick<
        Types.ICategory,
        'id' | 'name' | 'slug'
      >
    >
    collection?: Types.Maybe<
      { __typename?: 'Collection' } & Pick<
        Types.ICollection,
        'id' | 'name' | 'slug'
      >
    >
    page?: Types.Maybe<
      { __typename?: 'Page' } & Pick<Types.IPage, 'id' | 'title' | 'slug'>
    >
  }

export type IMenuFragment = { __typename?: 'Menu' } & Pick<
  Types.IMenu,
  'id' | 'name'
> & {
    items?: Types.Maybe<
      Array<
        Types.Maybe<
          { __typename?: 'MenuItem' } & {
            children?: Types.Maybe<
              Array<
                Types.Maybe<{ __typename?: 'MenuItem' } & IMenuItemFragment>
              >
            >
          } & IMenuItemFragment
        >
      >
    >
  }

export type IHomepageShopQueryVariables = Types.Exact<{ [key: string]: never }>

export type IHomepageShopQuery = { __typename?: 'Query' } & {
  shop: { __typename?: 'Shop' } & Pick<
    Types.IShop,
    'name' | 'defaultCurrency'
  > & {
      homepageCollection?: Types.Maybe<
        { __typename?: 'Collection' } & ICollectionFragment
      >
      navigation?: Types.Maybe<
        { __typename?: 'Navigation' } & {
          main?: Types.Maybe<{ __typename?: 'Menu' } & IMenuFragment>
        }
      >
    }
}
