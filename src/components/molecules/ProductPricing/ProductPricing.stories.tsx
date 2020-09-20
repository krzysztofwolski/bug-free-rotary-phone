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

export const Default = Template.bind({})
Default.args = {}
