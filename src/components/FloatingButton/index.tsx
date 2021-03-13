import React from 'react'

import Wrapper from './__styled__/Wrapper'

type Props = {
  variant?: 'primary' | 'secondary' | 'danger'
  onClick?: () => void
  children: React.ReactNode
}
const FloatingButton = ({ children, variant, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick} size="small" variant={variant}>
      {children}
    </Wrapper>
  )
}

export default React.memo(FloatingButton)
