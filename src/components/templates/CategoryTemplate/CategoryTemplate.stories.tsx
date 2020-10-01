import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { CategoryTemplate, CategoryTemplateProps } from './CategoryTemplate'

export default {
  title: 'Templates/CategoryTemplate',
  component: CategoryTemplate,
} as Meta

const Template: Story<CategoryTemplateProps> = (args) => (
  <CategoryTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {}
