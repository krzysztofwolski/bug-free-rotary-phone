import { withRouter } from 'next/router'
import { DefaultLayout } from '../../components/templates'
import { ProductDetailsTemplate } from '../../components/templates/ProductDetailsTemplate'
import {
  useProductDetailsBySlugQuery,
  useHomepageShopQuery,
} from '../../gql/generated/hooks'
import { withApollo } from '../../gql/withApollo'

interface IProductDetailsPageProps {
  router?: any
}

const ProductDetailsPage: React.FC<IProductDetailsPageProps> = (props) => {
  const slug = props.router?.query.productSlug
  if (!slug) {
    // TODO: 404
    return <>404</>
  }
  const {
    data: productData,
    loading: productLoading,
  } = useProductDetailsBySlugQuery({
    variables: {
      slug,
    },
  })
  const { data: shopData } = useHomepageShopQuery({
    variables: {},
  })
  return (
    <DefaultLayout menu={shopData?.shop.navigation?.main}>
      <ProductDetailsTemplate
        product={productData?.product}
        isLoading={productLoading}
      />
    </DefaultLayout>
  )
}

export default withApollo(withRouter(ProductDetailsPage))
