import React from 'react'
import { ICollectionFragment } from '../../../gql/generated/interfaces'
import { ProductTile } from '../../organisms'

export interface HomepageTemplateProps {
  homepageCollection?: ICollectionFragment | null
  defaultCurrency?: string
}

export const HomepageTemplate: React.FC<HomepageTemplateProps> = ({
  homepageCollection,
  defaultCurrency,
}) => {
  const name = 'HomepageTemplate'
  return (
    <>
      <h1>{name}</h1>
      <div>{defaultCurrency}</div>

      {!!homepageCollection && (
        <div>
          {homepageCollection.products?.edges.map((productNode) => (
            <ProductTile product={productNode.node} />
          ))}
        </div>
      )}
    </>
  )
}
