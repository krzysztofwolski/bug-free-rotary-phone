import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import {
  ProductDetailsTemplate,
  IProductDetailsTemplateProps,
} from './ProductDetailsTemplate'

export default {
  title: 'Templates/ProductDetailsTemplate',
  component: ProductDetailsTemplate,
} as Meta

const Template: Story<IProductDetailsTemplateProps> = (args) => (
  <ProductDetailsTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {}
