import React from 'react'

import Wrapper from './__styled__/Wrapper'

type Props = {
  children: React.ReactNode
}

const Details = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}

export default React.memo(Details)
