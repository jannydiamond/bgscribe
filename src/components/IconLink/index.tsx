import React from 'react'

import Icon from 'components/Icon'

import IconLinkInner from './__styled__/IconLinkInner'

type Props = {
  to: string
  icon: string
  children: React.ReactNode
}

const IconLink = ({ to, icon, children }: Props) => {
  return (
    <IconLinkInner to={to}>
      <Icon icon={icon} />
      {children}
    </IconLinkInner>
  )
}

export default React.memo(IconLink)
