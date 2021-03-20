import Icon from 'components/Icon'
import React from 'react'

import LinkInner from './__styled__/LinkInner'

type Props = {
  to: string
  label: string
  icon: string
  isRpg?: boolean
}

const Link = ({ to, label, icon, isRpg }: Props) => (
  <LinkInner to={to} isActive={(match: any) => (match ? true : false)}>
    <Icon icon={icon} solid isRpg={isRpg} />
    <span>{label}</span>
  </LinkInner>
)

export default React.memo(Link)
