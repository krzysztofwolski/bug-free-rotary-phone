import {
  IMoneyFragment,
  ITaxedMoneyFragment,
} from '../gql/generated/interfaces'

export const isPriceEqual = (
  priceA?: IMoneyFragment,
  priceB?: IMoneyFragment
): boolean => {
  if (priceA?.currency !== priceB?.currency) return false
  return priceA?.amount === priceB?.amount
}

export const isGrossPriceEqual = (
  priceA?: ITaxedMoneyFragment,
  priceB?: ITaxedMoneyFragment
): boolean => {
  return isPriceEqual(priceA?.gross, priceB?.gross)
}
