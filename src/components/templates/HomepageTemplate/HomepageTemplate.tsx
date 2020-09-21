import React from 'react'
import { ICollectionFragment } from 'gql/generated/interfaces'
import { ProductTile } from 'components/organisms'
import { Grid } from '@chakra-ui/core'
import { DefaultLayout } from '../DefaultLayout'

export interface HomepageTemplateProps {
  homepageCollection?: ICollectionFragment | null
}

export const HomepageTemplate: React.FC<HomepageTemplateProps> = ({
  homepageCollection,
}) => {
  return (
    <>
      {!!homepageCollection && (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {homepageCollection.products?.edges.map((productNode) => (
            <ProductTile product={productNode.node} />
          ))}
        </Grid>
      )}
    </>
  )
}
