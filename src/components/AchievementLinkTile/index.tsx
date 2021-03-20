import React from 'react'

import AchievementAvatar from 'components/AchievementAvatar'
import Icon from 'components/Icon'

import Link from './__styled__/Link'
import ContentWrapper from './__styled__/ContentWrapper'
import Title from './__styled__/Title'
import Subtitle from './__styled__/Subtitle'
import IconWrapper from './__styled__/IconWrapper'
import { AchievementLevel } from 'types'

type Props = {
  href: string
  imageSrc?: string
  title: string
  subtitle?: string
  level: AchievementLevel
}

const AchievementLinkTile = (props: Props) => {
  return (
    <Link to={props.href}>
      <AchievementAvatar src={props.imageSrc ?? ''} alt={props.title} level={props.level} />
      <ContentWrapper>
        <Title>{props.title}</Title>
        {props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
      </ContentWrapper>
      <IconWrapper>
        <Icon icon="chevron_right" />
      </IconWrapper>
    </Link>
  )
}

export default React.memo(AchievementLinkTile)
