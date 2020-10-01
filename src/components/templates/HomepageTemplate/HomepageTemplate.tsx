import { Box, Text } from '@chakra-ui/core'
import React from 'react'
import { ICollectionFragment } from '../../../gql/generated/interfaces'
import { ProductList } from '../../organisms'

export interface HomepageTemplateProps {
  shopName?: string
  homepageCollection?: ICollectionFragment | null
}

export const HomepageTemplate: React.FC<HomepageTemplateProps> = ({
  homepageCollection,
  shopName,
}) => {
  return (
    <>
      <Box>
        <Text fontSize="3xl">`Welcome to ${shopName}!`</Text>
      </Box>
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
