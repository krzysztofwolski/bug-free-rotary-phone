import { Box, SimpleGrid } from '@chakra-ui/core'
import React from 'react'
import { IProductDetailsFragment } from '../../../gql/generated/interfaces'
import { ProductTile } from '../ProductTile'

export interface IProductListProps {
  products: Array<IProductDetailsFragment>
}

export const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <Box alignContent="center" padding="20px">
      <SimpleGrid minChildWidth="340px" spacing="40px">
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
