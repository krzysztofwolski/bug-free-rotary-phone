import React from 'react'
import { ITopNavbarProps, TopNavbar } from '../../organisms'

export type IDefaultLayoutProps = ITopNavbarProps

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({
  children,
  menu,
}) => {
  return (
    <>
      <TopNavbar menu={menu} />
      {children}
    </>
  )
}
