import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from '@chakra-ui/core'
import React from 'react'
import { IProductDetailsFragment } from '../../../gql/generated/interfaces'

export interface IProductDetailsTemplateProps {
  product?: IProductDetailsFragment
  isLoading: boolean
}

export const ProductDetailsTemplate: React.FC<IProductDetailsTemplateProps> = ({
  product,
}) => {
  const grandCategory = product?.category?.parent?.parent
  const parentCategory = product?.category?.parent

  return (
    <>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {!!grandCategory && (
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{grandCategory.name}</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {!!parentCategory && (
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{parentCategory.name}</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{product?.category?.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <Text size="xl">{product?.name}</Text>
      </Box>
      <Box>
        <Select placeholder="Select variant">
          <option value="option1">XL</option>
          <option value="option2">L</option>
          <option value="option3">M</option>
        </Select>
        <NumberInput defaultValue={1} min={0} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button>Add to cart!</Button>
      </Box>
      <Box>
        <Text>{product?.description}</Text>
      </Box>
    </>
  )
}
