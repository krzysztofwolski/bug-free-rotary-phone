import React from 'react'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core'

const menuItem = (label: string, url: string) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {label}
  </Text>
)

export interface INavbarItem {
  url?: string
  subItems: INavbarItem[]
  label: string
}

export interface ITopNavbarProps {
  menuItems: INavbarItem[]
}

export const TopNavbar: React.FC<ITopNavbarProps> = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="green.600"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          🤙 Bug Free Rotary Phone
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        {props.menuItems.map((item) => menuItem(item.label, item.url || '#'))}
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Login
        </Button>
      </Box>
    </Flex>
  )
}
