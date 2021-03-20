import React from 'react'

import ScreenReaderOnlyText from 'components/__styled__/ScreenReaderOnlyText'
import Icon from 'components/Icon'
import Wrapper from './__styled__/Wrapper'
import { ButtonVariants } from 'types'

type Props = {
  title: string
  icon: string
  solid?: boolean
  variant?: ButtonVariants
  onClick?: () => void
}
const FloatingIconButton = ({
  title,
  icon,
  solid,
  variant,
  onClick,
}: Props) => {
  return (
    <Wrapper onClick={onClick} title={title} variant={variant}>
      <Icon icon={icon} solid={solid} />
      <ScreenReaderOnlyText>{title}</ScreenReaderOnlyText>
    </Wrapper>
  )
}

export default React.memo(FloatingIconButton)
