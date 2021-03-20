import React from 'react'
import { ButtonVariants } from 'types'

import Wrapper from './__styled__/Wrapper'

type Props = {
  variant?: ButtonVariants
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
