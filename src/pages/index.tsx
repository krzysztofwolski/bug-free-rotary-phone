import React from 'react'
import { GetStaticProps } from 'next'
import { PageHomeShopComp, ssrHomeShop } from '../gql/generated/page'
import { DefaultLayout, HomepageTemplate } from '../components/templates'
import { withApollo } from '../gql/withApollo'

const HomePage: PageHomeShopComp = (props) => (
  <DefaultLayout menu={props.data?.shop.navigation?.main}>
    <HomepageTemplate
      homepageCollection={props.data?.shop.homepageCollection}
    />
  </DefaultLayout>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  return await ssrHomeShop.getServerPage({}, ctx)
}

export default withApollo(ssrHomeShop.withPage(() => ({}))(HomePage))
