import { useRouter, withRouter } from 'next/router'
import Error from 'next/error'
import { DefaultLayout } from '../../components/templates'
import { ProductDetailsTemplate } from '../../components/templates/ProductDetailsTemplate'
import {
  useProductDetailsBySlugQuery,
  useHomepageShopQuery,
} from '../../gql/generated/hooks'
import { withApollo } from '../../gql/withApollo'

const ProductDetailsPage: React.FC = () => {
  const slug = useRouter().query.slug?.toString() || ''
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

  if (!productLoading && !productData?.product) {
    return <Error statusCode={404} />
  }
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
