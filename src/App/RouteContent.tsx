import React from 'react'

import Header from 'components/Header'
import BottomNavigation from 'components/BottomNavigation'

import Content from './__styled__/Content'

type Props = {
  children: React.ReactNode
}

const RouteContent = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <BottomNavigation />
    </>
  )
}

export default React.memo(RouteContent)
