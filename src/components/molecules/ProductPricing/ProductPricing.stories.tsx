import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductPricing, ProductPricingProps } from './ProductPricing'

export default {
  title: 'Molecules/ProductPricing',
  component: ProductPricing,
} as Meta

const Template: Story<ProductPricingProps> = (args) => (
  <ProductPricing {...args} />
)

export const SinglePrice = Template.bind({})
SinglePrice.args = {
  pricing: {
    onSale: true,
    discount: {
      currency: 'USD',
      gross: {
        amount: 9,
        currency: 'USD',
      },
      net: {
        amount: 9,
        currency: 'USD',
      },
      tax: {
        amount: 0,
        currency: 'USD',
      },
    },
    discountLocalCurrency: null,
    priceRange: {
      start: {
        currency: 'USD',
        gross: {
          amount: 21,
          currency: 'USD',
        },
        net: {
          amount: 21,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
      stop: {
        currency: 'USD',
        gross: {
          amount: 21,
          currency: 'USD',
        },
        net: {
          amount: 21,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
    },
    priceRangeUndiscounted: {
      start: {
        currency: 'USD',
        gross: {
          amount: 30,
          currency: 'USD',
        },
        net: {
          amount: 30,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
      stop: {
        currency: 'USD',
        gross: {
          amount: 30,
          currency: 'USD',
        },
        net: {
          amount: 30,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
    },
    priceRangeLocalCurrency: null,
  },
}

export const PriceRange = Template.bind({})
PriceRange.args = {
  pricing: {
    onSale: true,
    discount: {
      currency: 'USD',
      gross: {
        amount: 9,
        currency: 'USD',
      },
      net: {
        amount: 9,
        currency: 'USD',
      },
      tax: {
        amount: 0,
        currency: 'USD',
      },
    },
    discountLocalCurrency: null,
    priceRange: {
      start: {
        currency: 'USD',
        gross: {
          amount: 21,
          currency: 'USD',
        },
        net: {
          amount: 21,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
      stop: {
        currency: 'USD',
        gross: {
          amount: 42,
          currency: 'USD',
        },
        net: {
          amount: 42,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
    },
    priceRangeUndiscounted: {
      start: {
        currency: 'USD',
        gross: {
          amount: 30,
          currency: 'USD',
        },
        net: {
          amount: 30,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
      stop: {
        currency: 'USD',
        gross: {
          amount: 50,
          currency: 'USD',
        },
        net: {
          amount: 50,
          currency: 'USD',
        },
        tax: {
          amount: 0,
          currency: 'USD',
        },
      },
    },
    priceRangeLocalCurrency: null,
  },
}
