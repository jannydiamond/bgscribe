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
    {isRpg ? <i className={`ra ra-lg ${icon}`} /> : <Icon icon={icon} solid />}
    <span>{label}</span>
  </LinkInner>
)

export default React.memo(Link)
