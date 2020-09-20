import React from 'react'
import { IMoney } from '../../../gql/generated/schemas'

export interface PriceProps {
  money?: IMoney
}

export const Price: React.FC<PriceProps> = ({ money }) => {
  let formattedPrice = ''
  if (money) {
    formattedPrice = new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: money.currency,
    }).format(money.amount)
  }
  return <>{formattedPrice}</>
}
