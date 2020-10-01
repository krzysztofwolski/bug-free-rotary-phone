import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Grid,
  Image,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from '@chakra-ui/core'
import React, { useState } from 'react'
import {
  IProductDetailsFragment,
  IProductVariantFragment,
} from '../../../gql/generated/interfaces'
import { ProductPricing, VariantPricing } from '../../molecules'

export interface IProductDetailsTemplateProps {
  product?: IProductDetailsFragment | null
  isLoading: boolean
}

export const ProductDetailsTemplate: React.FC<IProductDetailsTemplateProps> = ({
  product,
}) => {
  const grandCategory = product?.category?.parent?.parent
  const parentCategory = product?.category?.parent

  const [
    chosenVariant,
    setChosenVariant,
  ] = useState<IProductVariantFragment | null>(null)

  const chooseVariantBySKU = (sku: string) => {
    return product?.variants?.find((variant) => variant?.sku == sku)
  }

  return (
    <>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          {!!grandCategory && (
            <BreadcrumbItem>
              <Link href={`/category/${grandCategory.slug}`}>
                {grandCategory.name}
              </Link>
            </BreadcrumbItem>
          )}
          {!!parentCategory && (
            <BreadcrumbItem>
              <Link href={`/category/${parentCategory.slug}`}>
                {parentCategory.name}
              </Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem>
            <Link href={`/category/${product?.category?.slug}`}>
              {product?.category?.name}
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Grid gridTemplateColumns="50% 50%" gridTemplateRows="500px auto">
        <Box>
          <Image
            src={product?.thumbnail?.url || ''}
            alt={product?.thumbnail?.alt || ''}
          />
        </Box>
        <Box>
          <Box>
            <Text fontSize="3xl">
              {product?.name}
              {!!chosenVariant && ` - ${chosenVariant.name}`}
            </Text>
          </Box>
          {chosenVariant?.pricing ? (
            <Box>
              <VariantPricing pricing={chosenVariant.pricing} />
            </Box>
          ) : (
            !!product?.pricing && (
              <Box>
                <ProductPricing pricing={product?.pricing} />
              </Box>
            )
          )}
          <Box>
            <Select
              placeholder="Select variant"
              value={chosenVariant?.sku || undefined}
              onChange={(e) => {
                setChosenVariant(chooseVariantBySKU(e.target.value) || null)
              }}
            >
              {!!product?.variants &&
                product?.variants?.map((variant) => (
                  <option key={variant?.id} value={variant?.sku}>
                    {variant?.name}
                  </option>
                ))}
            </Select>
            <NumberInput defaultValue={1} min={0} max={20}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button disabled={!chosenVariant}>Add to cart!</Button>
          </Box>
        </Box>
        <Box>
          <Text>{product?.description}</Text>
        </Box>
      </Grid>
    </>
  )
}
