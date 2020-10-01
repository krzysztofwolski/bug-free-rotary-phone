import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TopNavbar, ITopNavbarProps } from './TopNavbar'

export default {
  title: 'Organisms/TopNavbar',
  component: TopNavbar,
} as Meta

const Template: Story<ITopNavbarProps> = (args) => <TopNavbar {...args} />

export const Loading = Template.bind({})
Loading.args = {}

export const WithMenu = Template.bind({})
WithMenu.args = {
  menu: {
    id: 'TWVudTox', // eslint-disable-line spellcheck/spell-checker
    name: 'navbar',
    items: [
      {
        id: 'TWVudUl0ZW06MQ==', // eslint-disable-line spellcheck/spell-checker
        name: 'Accessories',
        category: {
          id: 'Q2F0ZWdvcnk6Nw==', // eslint-disable-line spellcheck/spell-checker
          name: 'Accessories',
          slug: 'accessories',
        },
        collection: null,
        page: null,
        children: [
          {
            id: 'TWVudUl0ZW06Mg==', // eslint-disable-line spellcheck/spell-checker
            name: 'Paints',
            category: {
              id: 'Q2F0ZWdvcnk6MjA=', // eslint-disable-line spellcheck/spell-checker
              name: 'Paints',
              slug: 'paints',
            },
            collection: null,
            page: null,
          },
          {
            id: 'TWVudUl0ZW06Mw==', // eslint-disable-line spellcheck/spell-checker
            name: 'Homewares', // eslint-disable-line spellcheck/spell-checker
            category: {
              id: 'Q2F0ZWdvcnk6MjI=', // eslint-disable-line spellcheck/spell-checker
              name: 'Homewares', // eslint-disable-line spellcheck/spell-checker
              slug: 'homewares', // eslint-disable-line spellcheck/spell-checker
            },
            collection: null,
            page: null,
          },
        ],
      },
      {
        id: 'TWVudUl0ZW06NA==', // eslint-disable-line spellcheck/spell-checker
        name: 'Groceries',
        category: {
          id: 'Q2F0ZWdvcnk6OA==', // eslint-disable-line spellcheck/spell-checker
          name: 'Groceries',
          slug: 'groceries',
        },
        collection: null,
        page: null,
        children: [
          {
            id: 'TWVudUl0ZW06NQ==', // eslint-disable-line spellcheck/spell-checker
            name: 'Juices',
            category: {
              id: 'Q2F0ZWdvcnk6MTQ=', // eslint-disable-line spellcheck/spell-checker
              name: 'Juices',
              slug: 'juices',
            },
            collection: null,
            page: null,
          },
          {
            id: 'TWVudUl0ZW06Ng==', // eslint-disable-line spellcheck/spell-checker
            name: 'Alcohol',
            category: {
              id: 'Q2F0ZWdvcnk6MTU=', // eslint-disable-line spellcheck/spell-checker
              name: 'Alcohol',
              slug: 'alcohol',
            },
            collection: null,
            page: null,
          },
        ],
      },
      {
        id: 'TWVudUl0ZW06Nw==', // eslint-disable-line spellcheck/spell-checker
        name: 'Apparel',
        category: {
          id: 'Q2F0ZWdvcnk6OQ==', // eslint-disable-line spellcheck/spell-checker
          name: 'Apparel',
          slug: 'apparel',
        },
        collection: null,
        page: null,
        children: [
          {
            id: 'TWVudUl0ZW06OA==', // eslint-disable-line spellcheck/spell-checker
            name: 'T-shirts',
            category: {
              id: 'Q2F0ZWdvcnk6MTA=', // eslint-disable-line spellcheck/spell-checker
              name: 'T-shirts',
              slug: 't-shirts',
            },
            collection: null,
            page: null,
          },
          {
            id: 'TWVudUl0ZW06OQ==', // eslint-disable-line spellcheck/spell-checker
            name: 'Polo Shirts',
            category: {
              id: 'Q2F0ZWdvcnk6MTE=', // eslint-disable-line spellcheck/spell-checker
              name: 'Polo Shirts',
              slug: 'polo-shirts',
            },
            collection: null,
            page: null,
          },
          {
            id: 'TWVudUl0ZW06MTA=', // eslint-disable-line spellcheck/spell-checker
            name: 'Hoodies',
            category: {
              id: 'Q2F0ZWdvcnk6MTI=', // eslint-disable-line spellcheck/spell-checker
              name: 'Hoodies',
              slug: 'hoodies',
            },
            collection: null,
            page: null,
          },
          {
            id: 'TWVudUl0ZW06MTE=', // eslint-disable-line spellcheck/spell-checker
            name: 'Footwear',
            category: {
              id: 'Q2F0ZWdvcnk6MTM=', // eslint-disable-line spellcheck/spell-checker
              name: 'Footwear',
              slug: 'footwear',
            },
            collection: null,
            page: null,
          },
        ],
      },
    ],
  },
}
