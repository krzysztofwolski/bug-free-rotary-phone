import { Text } from '@chakra-ui/core'
import React from 'react'
import { IVariantPricingInfoFragment } from '../../../gql/generated/interfaces'
import { Price } from '../../atoms'

export interface IVariantPricingProps {
  pricing: IVariantPricingInfoFragment
}

export const VariantPricing: React.FC<IVariantPricingProps> = ({ pricing }) => {
  return (
    <>
      {pricing.price ? (
        <>
          {pricing.onSale && pricing.priceUndiscounted?.gross && (
            <Text as="s">
              <Price money={pricing.priceUndiscounted?.gross} />
            </Text>
          )}
          <Price money={pricing.price.gross} />
        </>
      ) : (
        <p>No price</p>
      )}
    </>
  )
}
