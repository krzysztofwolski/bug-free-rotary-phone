import { Price } from 'components/atoms'
import { IProductPricingInfoFragment } from 'gql/generated/interfaces'
import { IMoney } from 'gql/generated/schemas'
import React from 'react'
import { isGrossPriceEqual } from 'utils'

export interface ProductPricingProps {
  pricing: IProductPricingInfoFragment
}

export const ProductPricing: React.FC<ProductPricingProps> = ({ pricing }) => {
  const priceRangeStart = pricing.priceRange?.start
  const priceRangeStop = pricing.priceRange?.stop
  if (priceRangeStart && priceRangeStop) {
    if (isGrossPriceEqual(priceRangeStart, priceRangeStop)) {
      return <Price money={priceRangeStart.gross as IMoney} />
    } else {
      return (
        <p>
          <Price money={priceRangeStart.gross as IMoney} /> -{' '}
          <Price money={priceRangeStop.gross as IMoney} />
        </p>
      )
    }
  }
  return <>No price</>
}
