import { ITopNavbarProps, TopNavbar } from 'components/organisms/TopNavbar'
import React from 'react'

export type IDefaultLayout = ITopNavbarProps

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children, menu }) => {
  return (
    <>
      <TopNavbar menu={menu} />
      {children}
    </>
  )
}
