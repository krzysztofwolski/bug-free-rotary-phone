import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { VariantPricing, IVariantPricingProps } from './VariantPricing'

export default {
  title: 'Molecules/VariantPricing',
  component: VariantPricing,
} as Meta

const Template: Story<IVariantPricingProps> = (args) => (
  <VariantPricing {...args} />
)

export const Default = Template.bind({})
Default.args = {}
