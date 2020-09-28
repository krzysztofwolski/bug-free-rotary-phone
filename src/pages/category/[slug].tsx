import { DefaultLayout } from 'components/templates'
import { CategoryTemplate } from 'components/templates/CategoryTemplate'
import {
  useCategoryDetailsBySlugQuery,
  useHomepageShopQuery,
} from 'gql/generated/hooks'
import { withApollo } from 'gql/withApollo'
import { withRouter } from 'next/router'

interface ICategoryProps {
  router?: any
}

const CategoryPage: React.FC<ICategoryProps> = (props) => {
  if (!props.router?.query.slug) {
    // TODO: 404
    return <></>
  }
  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useCategoryDetailsBySlugQuery({
    variables: {
      slug: props.router?.query.slug,
    },
  })
  const {
    data: shopData,
    loading: shopLoading,
    error: shopError,
  } = useHomepageShopQuery({
    variables: {},
  })
  const loading = categoryLoading || shopLoading
  const error = categoryError || shopError
  return (
    <DefaultLayout menu={shopData?.shop.navigation?.main}>
      {!loading && !error && (
        <CategoryTemplate category={categoryData?.category} />
      )}
    </DefaultLayout>
  )
}

export default withApollo(withRouter(CategoryPage))
