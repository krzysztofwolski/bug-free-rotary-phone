import React from 'react'
import { ICollectionFragment } from 'gql/generated/interfaces'
import { ProductList } from 'components/organisms'

export interface HomepageTemplateProps {
  homepageCollection?: ICollectionFragment | null
}

export const HomepageTemplate: React.FC<HomepageTemplateProps> = ({
  homepageCollection,
}) => {
  return (
    <>
      {!!homepageCollection && (
        <ProductList
          products={
            [
              ...(homepageCollection.products?.edges.map((edge) => edge.node) ||
                []),
              ...(homepageCollection.products?.edges.map((edge) => edge.node) ||
                []),
            ] || []
          }
        />
      )}
    </>
  )
}
