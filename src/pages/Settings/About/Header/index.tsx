import React from 'react'

import HeaderInner from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Title from 'components/Header/__styled__/Title'

const Header = () => {
  return (
    <HeaderInner>
      <BackLink to="/settings">Back to settings</BackLink>
      <Title noMenu>About</Title>
    </HeaderInner>
  )
}

export default React.memo(Header)
