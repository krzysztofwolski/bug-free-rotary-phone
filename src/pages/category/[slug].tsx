import Error from 'next/error'
import { DefaultLayout } from '../../components/templates'
import { CategoryTemplate } from '../../components/templates/CategoryTemplate'
import { useHomepageShopQuery } from '../../gql/generated/hooks'
import { withApollo } from '../../gql/withApollo'
import { GetServerSideProps } from 'next'
import {
  PageCategoryDetailsBySlugComp,
  ssrCategoryDetailsBySlug,
} from '../../gql/generated/page'

const CategoryPage: PageCategoryDetailsBySlugComp = (props) => {
  const categoryData = props.data
  const categoryLoading = false

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

export default withApollo(
  ssrCategoryDetailsBySlug.withPage((router) => {
    return { variables: { slug: router.query?.slug?.toString() || '' } }
  })(CategoryPage)
)

export async function getStaticPaths(): Promise<{
  paths: any
  fallback: boolean
}> {
  const allPosts = ['apparel', 'accessories']
  return {
    paths: allPosts?.map((slug) => `/category/${slug}`) ?? [],
    fallback: true,
  }
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  return await ssrCategoryDetailsBySlug.getServerPage({
    variables: { slug: params?.slug?.toString() || '' },
  })
}
