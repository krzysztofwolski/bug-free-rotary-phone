import React from 'react'
import { ITopNavbarProps, TopNavbar } from '../../organisms'

export type IDefaultLayout = ITopNavbarProps

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children, menu }) => {
  return (
    <>
      <TopNavbar menu={menu} />
      {children}
    </>
  )
}
