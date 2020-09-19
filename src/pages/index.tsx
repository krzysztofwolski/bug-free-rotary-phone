import {
  ssrFirstProducts,
  PageFirstProductsComp,
} from '../gql/autogenerate/page';

import { withApollo } from '../gql/withApollo';
import { GetServerSideProps } from 'next';

const HomePage: PageFirstProductsComp = (props) => (
  <div>
    <p>tu powinny byc dane</p>
    {props.data?.products?.edges.map((product, k) => (
      <div key={k}>{product.node.name}</div>
    ))}
  </div>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrFirstProducts.getServerPage({}, ctx);
};

export default withApollo(ssrFirstProducts.withPage(() => ({}))(HomePage));
