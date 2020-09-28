import React from 'react'
import { PageHomeShopComp, ssrHomeShop } from 'gql/generated/page'

import { withApollo } from 'gql/withApollo'
import { GetServerSideProps } from 'next'
import { HomepageTemplate } from 'components/templates'
import { DefaultLayout } from 'components/templates/DefaultLayout'

const HomePage: PageHomeShopComp = (props) => (
  <DefaultLayout menu={props.data?.shop.navigation?.main}>
    <HomepageTemplate
      homepageCollection={props.data?.shop.homepageCollection}
    />
  </DefaultLayout>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrHomeShop.getServerPage({}, ctx)
}

export default withApollo(ssrHomeShop.withPage(() => ({}))(HomePage))
