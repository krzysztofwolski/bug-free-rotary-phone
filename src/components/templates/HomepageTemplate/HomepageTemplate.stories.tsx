import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { HomepageTemplate, HomepageTemplateProps } from './HomepageTemplate'

export default {
  title: 'Templates/HomepageTemplate',
  component: HomepageTemplate,
} as Meta

const Template: Story<HomepageTemplateProps> = (args) => (
  <HomepageTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {}
