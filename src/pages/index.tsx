import {
  ssrFirstProducts,
  PageFirstProductsComp,
} from '../gql/autogenerate/page'

import { withApollo } from '../gql/withApollo'
import { GetServerSideProps } from 'next'
import { Price } from '../components/atoms/Price/Price'
import { Money } from '../gql/autogenerate/schemas'

const HomePage: PageFirstProductsComp = (props) => (
  <div>
    <p>Data:</p>
    {props.data?.products?.edges.map((product, k) => (
      <div>
        {product.node.name}
        <Price key={k} money={product.node.minimalVariantPrice as Money} />
        {product.node.minimalVariantPrice?.amount}
      </div>
    ))}
  </div>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrFirstProducts.getServerPage({}, ctx)
}

export default withApollo(ssrFirstProducts.withPage(() => ({}))(HomePage))
