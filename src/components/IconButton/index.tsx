import React from 'react'

import ScreenReaderOnlyText from 'components/__styled__/ScreenReaderOnlyText'
import Icon from 'components/Icon'
import Wrapper from './__styled__/Wrapper'
import { ButtonVariants } from 'types'

type Props = {
  title: string
  icon: string
  solid?: boolean
  isRpg?: boolean
  variant?: ButtonVariants
  onClick?: () => void
}

const IconButton = (props: Props) => {
  return (
    <Wrapper onClick={props.onClick} title={props.title} variant={props.variant}>
      <Icon icon={props.icon} solid={props.solid} isRpg={props.isRpg} />
      <ScreenReaderOnlyText>{props.title}</ScreenReaderOnlyText>
    </Wrapper>
  )
}

export default React.memo(IconButton)
