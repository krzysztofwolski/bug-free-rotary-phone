import { useRouter } from 'next/router'
import { DefaultLayout } from '../../components/templates'
import { CategoryTemplate } from '../../components/templates/CategoryTemplate'
import {
  useCategoryDetailsBySlugQuery,
  useHomepageShopQuery,
} from '../../gql/generated/hooks'
import { withApollo } from '../../gql/withApollo'

const CategoryPage: React.FC = () => {
  const router = useRouter()

  if (!router?.query.slug) {
    // TODO: 404
    return <></>
  }
  const {
    data: categoryData,
    loading: categoryLoading,
  } = useCategoryDetailsBySlugQuery({
    variables: {
      slug: router?.query.slug,
    },
  })
  const { data: shopData } = useHomepageShopQuery({
    variables: {},
  })
  return (
    <DefaultLayout menu={shopData?.shop.navigation?.main}>
      <CategoryTemplate
        category={categoryData?.category}
        isLoading={categoryLoading}
      />
    </DefaultLayout>
  )
}

export default withApollo(CategoryPage)
