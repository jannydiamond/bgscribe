import React from 'react'

import Avatar from 'components/Avatar'
import Icon from 'components/Icon'

import Link from './__styled__/Link'
import ContentWrapper from './__styled__/ContentWrapper'
import Title from './__styled__/Title'
import Subtitle from './__styled__/Subtitle'
import IconWrapper from './__styled__/IconWrapper'

type Props = {
  href: string
  imageSrc?: string
  title: string
  subtitle?: string
}

const LinkTile = (props: Props) => {
  return (
    <Link to={props.href}>
      {props.imageSrc !== undefined ? (
        <Avatar src={props.imageSrc} alt={props.title} />
      ) : null}
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

export default React.memo(LinkTile)
