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
    id: 'TWVudTox',
    name: 'navbar',
    items: [
      {
        id: 'TWVudUl0ZW06MQ==',
        name: 'Accessories',
        category: {
          id: 'Q2F0ZWdvcnk6Nw==',
          name: 'Accessories',
          slug: 'accessories',
          __typename: 'Category',
        },
        collection: null,
        page: null,
        __typename: 'MenuItem',
        children: [
          {
            id: 'TWVudUl0ZW06Mg==',
            name: 'Paints',
            category: {
              id: 'Q2F0ZWdvcnk6MjA=',
              name: 'Paints',
              slug: 'paints',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
          {
            id: 'TWVudUl0ZW06Mw==',
            name: 'Homewares',
            category: {
              id: 'Q2F0ZWdvcnk6MjI=',
              name: 'Homewares',
              slug: 'homewares',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
        ],
      },
      {
        id: 'TWVudUl0ZW06NA==',
        name: 'Groceries',
        category: {
          id: 'Q2F0ZWdvcnk6OA==',
          name: 'Groceries',
          slug: 'groceries',
          __typename: 'Category',
        },
        collection: null,
        page: null,
        __typename: 'MenuItem',
        children: [
          {
            id: 'TWVudUl0ZW06NQ==',
            name: 'Juices',
            category: {
              id: 'Q2F0ZWdvcnk6MTQ=',
              name: 'Juices',
              slug: 'juices',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
          {
            id: 'TWVudUl0ZW06Ng==',
            name: 'Alcohol',
            category: {
              id: 'Q2F0ZWdvcnk6MTU=',
              name: 'Alcohol',
              slug: 'alcohol',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
        ],
      },
      {
        id: 'TWVudUl0ZW06Nw==',
        name: 'Apparel',
        category: {
          id: 'Q2F0ZWdvcnk6OQ==',
          name: 'Apparel',
          slug: 'apparel',
          __typename: 'Category',
        },
        collection: null,
        page: null,
        __typename: 'MenuItem',
        children: [
          {
            id: 'TWVudUl0ZW06OA==',
            name: 'T-shirts',
            category: {
              id: 'Q2F0ZWdvcnk6MTA=',
              name: 'T-shirts',
              slug: 't-shirts',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
          {
            id: 'TWVudUl0ZW06OQ==',
            name: 'Polo Shirts',
            category: {
              id: 'Q2F0ZWdvcnk6MTE=',
              name: 'Polo Shirts',
              slug: 'polo-shirts',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
          {
            id: 'TWVudUl0ZW06MTA=',
            name: 'Hoodies',
            category: {
              id: 'Q2F0ZWdvcnk6MTI=',
              name: 'Hoodies',
              slug: 'hoodies',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
          {
            id: 'TWVudUl0ZW06MTE=',
            name: 'Footwear',
            category: {
              id: 'Q2F0ZWdvcnk6MTM=',
              name: 'Footwear',
              slug: 'footwear',
              __typename: 'Category',
            },
            collection: null,
            page: null,
            __typename: 'MenuItem',
          },
        ],
      },
    ],
    __typename: 'Menu',
  },
  __typename: 'Navigation',
}
