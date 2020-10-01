import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductList, IProductListProps } from './ProductList'

export default {
  title: 'Organisms/ProductList',
  component: ProductList,
} as Meta

const Template: Story<IProductListProps> = (args) => <ProductList {...args} />

export const Default = Template.bind({})
Default.args = {}
