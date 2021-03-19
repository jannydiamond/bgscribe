import React from 'react'

import Wrapper from './__styled__/Wrapper'

type Props = {
  children: React.ReactNode
}

const Tabbar = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>
}

export default React.memo(Tabbar)
