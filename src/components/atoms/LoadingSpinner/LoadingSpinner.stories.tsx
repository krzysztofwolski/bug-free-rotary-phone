import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { LoadingSpinner } from './LoadingSpinner'

export default {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
} as Meta

const Template: Story = (args) => <LoadingSpinner {...args} />

export const Default = Template.bind({})
Default.args = {}
