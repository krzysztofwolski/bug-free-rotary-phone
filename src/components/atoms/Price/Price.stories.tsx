import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Price, IPriceProps } from './Price'

export default {
  title: 'Atoms/Price',
  component: Price,
} as Meta

const Template: Story<IPriceProps> = (args) => <Price {...args} />

export const USD = Template.bind({})
USD.args = {
  money: {
    amount: 540000.2,
    currency: 'USD',
  },
}

export const EUR = Template.bind({})
EUR.args = {
  money: {
    amount: 540000.2,
    currency: 'EUR',
  },
}

export const PLN = Template.bind({})
PLN.args = {
  money: {
    amount: 540000.2,
    currency: 'PLN',
  },
}
