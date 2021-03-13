import React from 'react'

import Icon from 'components/Icon'
import ScreenReaderOnlyText from 'components/__styled__/ScreenReaderOnlyText'

import ButtonInner from './__styled__/ButtonInner'

type Props = {
  isOpen: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ isOpen, children, onClick }: Props) => {
  return (
    <ButtonInner onClick={onClick} isOpen={isOpen}>
      <Icon icon="more_vert" />
      <ScreenReaderOnlyText>{children}</ScreenReaderOnlyText>
    </ButtonInner>
  )
}

export default React.memo(Button)
