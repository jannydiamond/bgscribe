import React from 'react'

import ScreenReaderOnlyText from 'components/__styled__/ScreenReaderOnlyText'
import Icon from 'components/Icon'
import Wrapper from './__styled__/Wrapper'

type Props = {
  title: string
  icon: string
  solid?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
  onClick?: () => void
}
const IconButton = ({ title, icon, solid, variant, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick} title={title} variant={variant}>
      <Icon icon={icon} solid={solid} />
      <ScreenReaderOnlyText>{title}</ScreenReaderOnlyText>
    </Wrapper>
  )
}

export default IconButton
