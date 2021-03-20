import React from 'react'

import Wrapper from './__styled__/Wrapper'
import Image from './__styled__/Image'
import AchievementPlaceholder from 'components/AchievementPlaceholder'
import { AchievementLevel } from 'types'

type Props = {
  src: string
  alt: string
  level: AchievementLevel
  unlocked?: boolean
}

const AchievementAvatar = (props: Props) => {
  return (
    <Wrapper level={props.level} unlocked={props.unlocked}>{props.src ? <Image src={props.src} alt={props.alt} unlocked={props.unlocked} /> : <AchievementPlaceholder level={props.level} unlocked={props.unlocked} />}</Wrapper>
  )
}

export default React.memo(AchievementAvatar)
