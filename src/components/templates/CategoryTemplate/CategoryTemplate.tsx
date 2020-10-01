import { Center, Spinner } from '@chakra-ui/core'
import React from 'react'
import { ICategoryDetailsFragment } from '../../../gql/generated/interfaces'
import { ProductList } from '../../organisms'

export interface CategoryTemplateProps {
  category?: ICategoryDetailsFragment | null
  isLoading: boolean
}

export const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  category,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner size="xl" color="black" />
        </Center>
      ) : (
        <ProductList
          products={category?.products?.edges.map((edge) => edge.node) || []}
        />
      )}
    </>
  )
}
