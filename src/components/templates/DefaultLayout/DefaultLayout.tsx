import { ITopNavbarProps, TopNavbar } from 'components/organisms/TopNavbar'
import React from 'react'

export type IDefaultLayout = ITopNavbarProps

export const DefaultLayout: React.FC<IDefaultLayout> = ({
  children,
  menuItems,
}) => {
  return (
    <>
      <TopNavbar menuItems={menuItems} />
      {children}
    </>
  )
}
