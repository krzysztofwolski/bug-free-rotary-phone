import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductTile, IProductTileProps } from './ProductTile'

export default {
  title: 'Organisms/ProductTile',
  component: ProductTile,
} as Meta

const Template: Story<IProductTileProps> = (args) => <ProductTile {...args} />

export const Default = Template.bind({})
Default.args = {}
