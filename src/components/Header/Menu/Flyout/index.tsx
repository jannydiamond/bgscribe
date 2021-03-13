import React from 'react'

import Wrapper from './__styled__/Wrapper'

type Props = {
  isOpen: boolean
  children: React.ReactNode
}

const Flyout = ({ isOpen, children }: Props) => {
  return <Wrapper isOpen={isOpen}>{children}</Wrapper>
}

export default React.memo(Flyout)
