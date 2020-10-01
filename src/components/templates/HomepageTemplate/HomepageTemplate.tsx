import React from 'react'
import { ICollectionFragment } from '../../../gql/generated/interfaces'
import { ProductList } from '../../organisms'

export interface HomepageTemplateProps {
  shopName?: string
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
            homepageCollection.products?.edges.map((edge) => edge.node) || []
          }
        />
      )}
    </>
  )
}
