import React from 'react'
import { IProductDetailsFragment } from 'gql/generated/interfaces'
import { ProductPricing } from 'components/molecules'
import { Badge, Box, Icon, Image } from '@chakra-ui/core'
import { Price } from 'components/atoms'

export interface IProductTileProps {
  product?: IProductDetailsFragment
}

export const ProductTile: React.FC<IProductTileProps> = ({ product }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={product?.thumbnail?.url || ''}
        alt={product?.thumbnail?.alt || ''}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {product?.category?.name}
          </Box>
        </Box>
        {!!product?.pricing?.onSale && (
          <Badge borderRadius="full" px="2" colorScheme="red">
            Sale
          </Badge>
        )}
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product?.name || ''}
        </Box>

        <Box>
          {!!product?.pricing && <ProductPricing pricing={product.pricing} />}
        </Box>
      </Box>
    </Box>
  )
}
