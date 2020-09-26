import { Box, SimpleGrid } from '@chakra-ui/core'
import { IProductDetailsFragment } from 'gql/generated/interfaces'
import React from 'react'
import { ProductTile } from '../ProductTile'

export interface IProductListProps {
  products: Array<IProductDetailsFragment>
}

export const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <Box alignContent="center" padding="20px">
      <SimpleGrid minChildWidth="340px" spacing="40px">
        {products.map((product) => (
          <ProductTile product={product} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
