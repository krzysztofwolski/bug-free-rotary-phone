import React from 'react'
import { IMoneyFragment } from '../../../gql/generated/interfaces'

export interface IPriceProps {
  money?: IMoneyFragment
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
