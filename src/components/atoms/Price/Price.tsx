import React from 'react';
import { Money } from '../../../gql/autogenerate/schemas';

export interface PriceProps {
  money?: Money;
}

export const Price: React.FC<PriceProps> = ({ money }) => {
  let formattedPrice: string = '';
  if (!!money) {
    formattedPrice = new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: money.currency,
    }).format(money.amount);
  }
  return <>{formattedPrice}</>;
};
