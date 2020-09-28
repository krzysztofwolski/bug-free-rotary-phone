import React from 'react'
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  List,
  ListItem,
} from '@chakra-ui/core'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/core'
import { IMenuFragment } from 'gql/generated/interfaces'
import Link from 'next/link'
export interface INavbarItem {
  url?: string
  subItems: INavbarItem[]
  label: string
}

export interface ITopNavbarProps {
  menu?: IMenuFragment | null
}

export const TopNavbar: React.FC<ITopNavbarProps> = (props) => {
  const [show, setShow] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="black"
        color="white"
      >
        <Box
          display={{ sm: 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <Button ref={btnRef} bg="transparent" border="1px" onClick={onOpen}>
            Menu
          </Button>
        </Box>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            <Link href={`/`}>🤙 Bug Free Rotary Phone</Link>
          </Heading>
        </Flex>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        ></Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {!!props.menu?.items && (
              <List spacing={3}>
                {props.menu.items?.map((menuItem) => (
                  <ListItem key={menuItem?.id}>
                    <Link href={`/category/${menuItem?.category?.slug}`}>
                      <Text fontSize="3xl" onClick={onClose}>
                        {menuItem?.name}
                      </Text>
                    </Link>
                    {!!menuItem?.children?.length && (
                      <List spacing={1}>
                        {menuItem?.children.map((childItem) => (
                          <ListItem key={childItem?.id}>
                            <Link
                              href={`/category/${childItem?.category?.slug}`}
                            >
                              <Text fontSize="2xl" onClick={onClose}>
                                - {childItem?.name}
                              </Text>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </ListItem>
                ))}
              </List>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
