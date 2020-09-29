import { Center, Spinner } from '@chakra-ui/core'
import React from 'react'

export const LoadingSpinner: React.FC = () => {
  return (
    <>
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          size="xl"
        />
      </Center>
    </>
  )
}
