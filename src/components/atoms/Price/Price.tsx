import { IMoney } from 'gql/generated/schemas'
import React from 'react'

export interface IPriceProps {
  money?: IMoney
}

export const Price: React.FC<IPriceProps> = ({ money }) => {
  let formattedPrice = ''
  if (money) {
    formattedPrice = new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: money.currency,
    }).format(money.amount)
  }
  return <>{formattedPrice}</>
}
