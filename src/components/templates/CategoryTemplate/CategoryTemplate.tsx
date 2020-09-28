import React from 'react'
import { ICategoryFragment } from 'gql/generated/interfaces'
import { ProductList } from 'components/organisms'

export interface CategoryTemplateProps {
  category?: ICategoryFragment | null
}

export const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  category,
}) => {
  return (
    <>
      {!!category && (
        <ProductList
          products={category.products?.edges.map((edge) => edge.node) || []}
        />
      )}
    </>
  )
}
