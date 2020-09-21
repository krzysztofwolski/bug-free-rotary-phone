import { PageHomeShopComp, ssrHomeShop } from 'gql/generated/page'

import { withApollo } from 'gql/withApollo'
import { GetServerSideProps } from 'next'
import { HomepageTemplate } from 'components/templates'
import { DefaultLayout } from 'components/templates/DefaultLayout'
import { INavbarItem } from 'components/organisms/TopNavbar'

const HomePage: PageHomeShopComp = (props) => (
  <DefaultLayout
    menuItems={
      props.data?.shop.navigation?.main?.items?.map(
        (menuItem): INavbarItem => ({
          url: '#',
          label: menuItem?.name || '',
          subItems: [],
        })
      ) || []
    }
  >
    <HomepageTemplate
      homepageCollection={props.data?.shop.homepageCollection}
    />
  </DefaultLayout>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrHomeShop.getServerPage({}, ctx)
}

export default withApollo(ssrHomeShop.withPage(() => ({}))(HomePage))
