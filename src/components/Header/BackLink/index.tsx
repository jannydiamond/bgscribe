import React from 'react'

import Icon from 'components/Icon'
import ScreenReaderOnlyText from 'components/__styled__/ScreenReaderOnlyText'

import BackLinkInner from './__styled__/BackLinkInner'

type Props = {
  to: string
  children: React.ReactNode
}

const BackLink = ({ to, children }: Props) => {
  return (
    <BackLinkInner to={to}>
      <Icon icon="chevron_left" />
      <ScreenReaderOnlyText>{children}</ScreenReaderOnlyText>
    </BackLinkInner>
  )
}

export default React.memo(BackLink)
