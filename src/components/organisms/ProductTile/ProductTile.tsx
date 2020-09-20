import React from 'react'
import { IProductDetailsFragment } from 'gql/generated/interfaces'
import { ProductPricing } from 'components/molecules'

export interface IProductTileProps {
  product?: IProductDetailsFragment
}

export const ProductTile: React.FC<IProductTileProps> = ({ product }) => {
  if (!product) {
    return <p>Product tile skeleton</p>
  }
  return (
    <div key={product.id}>
      <img src={product.thumbnail?.url} alt={product.thumbnail?.alt || ''} />
      <p>{product.name}</p>
      <p>{!!product.pricing && <ProductPricing pricing={product.pricing} />}</p>
    </div>
  )
}
