import React from 'react'
import { IProductPricingInfoFragment } from '../../../gql/generated/interfaces'
import { isGrossPriceEqual } from '../../../utils'
import { Price } from '../../atoms'

export interface ProductPricingProps {
  pricing: IProductPricingInfoFragment
}

export const ProductPricing: React.FC<ProductPricingProps> = ({ pricing }) => {
  const priceRangeStart = pricing.priceRange?.start
  const priceRangeStop = pricing.priceRange?.stop
  if (priceRangeStart && priceRangeStop) {
    if (isGrossPriceEqual(priceRangeStart, priceRangeStop)) {
      return <Price money={priceRangeStart.gross} />
    } else {
      return (
        <p>
          <Price money={priceRangeStart.gross} /> -{' '}
          <Price money={priceRangeStop.gross} />
        </p>
      )
    }
  }
  return <>No price</>
}
