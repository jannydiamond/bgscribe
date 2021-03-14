import React from 'react'

import StyledHeader from 'components/__styled__/Header'
import Title from 'components/Header/__styled__/Title'

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Title>Session Templates</Title>
    </StyledHeader>
  )
}

export default React.memo(Header)
