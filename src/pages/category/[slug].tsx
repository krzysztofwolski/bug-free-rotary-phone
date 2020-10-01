import { useRouter } from 'next/router'
import Error from 'next/error'
import { DefaultLayout } from '../../components/templates'
import { CategoryTemplate } from '../../components/templates/CategoryTemplate'
import {
  useCategoryDetailsBySlugQuery,
  useHomepageShopQuery,
} from '../../gql/generated/hooks'
import { withApollo } from '../../gql/withApollo'

const CategoryPage: React.FC = () => {
  const slug = useRouter().query.slug?.toString() || ''
  const {
    data: categoryData,
    loading: categoryLoading,
  } = useCategoryDetailsBySlugQuery({
    variables: {
      slug,
    },
  })

  const { data: shopData } = useHomepageShopQuery({
    variables: {},
  })

  if (!categoryLoading && !categoryData?.category) {
    return <Error statusCode={404} />
  }

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
