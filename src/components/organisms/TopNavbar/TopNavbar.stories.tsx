import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TopNavbar, TopNavbarProps } from './TopNavbar'

export default {
  title: 'Organisms/TopNavbar',
  component: TopNavbar,
} as Meta

const Template: Story<TopNavbarProps> = (args) => <TopNavbar {...args} />

export const Default = Template.bind({})
Default.args = {}
