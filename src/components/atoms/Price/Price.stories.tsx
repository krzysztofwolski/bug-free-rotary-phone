import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Price, PriceProps } from './Price';

export default {
  title: 'Atoms/Price',
  component: Price,
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as Meta;

const Template: Story<PriceProps> = (args) => <Price {...args} />;

export const USD = Template.bind({});
USD.args = {
  money: {
    amount: 540000.2,
    currency: 'USD',
    localized: '',
  },
};

export const EUR = Template.bind({});
EUR.args = {
  money: {
    amount: 540000.2,
    currency: 'EUR',
    localized: '',
  },
};

export const PLN = Template.bind({});
PLN.args = {
  money: {
    amount: 540000.2,
    currency: 'PLN',
    localized: '',
  },
};
