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
import Link from 'next/link'
import { IMenuFragment } from '../../../gql/generated/interfaces'
export interface INavbarItem {
  url?: string
  subItems: INavbarItem[]
  label: string
}

export interface ITopNavbarProps {
  menu?: IMenuFragment | null
}

export const TopNavbar: React.FC<ITopNavbarProps> = (props) => {
  const [show] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLElement | null>(null)
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
          {!!btnRef && (
            <Button
              // ref={btnRef.current}
              bg="transparent"
              border="1px"
              onClick={onOpen}
            >
              Menu
            </Button>
          )}
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
        // finalFocusRef={btnRef}
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
                    <Text fontSize="3xl" onClick={onClose}>
                      <Link href={`/category/${menuItem?.category?.slug}`}>
                        {menuItem?.name}
                      </Link>
                    </Text>
                    {!!menuItem?.children?.length && (
                      <List spacing={1}>
                        {menuItem?.children.map((childItem) => (
                          <ListItem key={childItem?.id}>
                            <Text fontSize="2xl" onClick={onClose}>
                              <Link
                                href={`/category/${childItem?.category?.slug}`}
                              >
                                {`- ${childItem?.name}`}
                              </Link>
                            </Text>
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
