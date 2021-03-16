import React from 'react'

import HeaderInner from 'components/__styled__/Header'
import BackLink from 'components/Header/BackLink'
import Title from 'components/Header/__styled__/Title'

const Header = () => {
  return (
    <HeaderInner>
      <BackLink to="/achievement-sets/1">Back to achievement set</BackLink>
      <Title noMenu>Achievement</Title>
    </HeaderInner>
  )
}

export default React.memo(Header)
