import { PageHomeShopComp, ssrHomeShop } from '../gql/generated/page'

import { withApollo } from '../gql/withApollo'
import { GetServerSideProps } from 'next'
import { HomepageTemplate } from '../components/templates'

const HomePage: PageHomeShopComp = (props) => (
  <HomepageTemplate
    defaultCurrency={props.data?.shop.defaultCurrency}
    homepageCollection={props.data?.shop.homepageCollection}
  />
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrHomeShop.getServerPage({}, ctx)
}

export default withApollo(ssrHomeShop.withPage(() => ({}))(HomePage))
