import React from 'react'

import HeaderInner from 'components/__styled__/Header'
import Title from 'components/Header/__styled__/Title'

const Header = () => {
  return (
    <HeaderInner basic>
      <Title>Achievement Sets</Title>
    </HeaderInner>
  )
}

export default React.memo(Header)
