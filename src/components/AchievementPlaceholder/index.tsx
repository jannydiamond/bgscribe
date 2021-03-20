import Icon from 'components/Icon'
import React from 'react'
import { AchievementLevel } from 'types'
import Wrapper from './__styled__/Wrapper'

type Props = {
  level: AchievementLevel
  unlocked?: boolean
}

const AchievementPlaceholder = (props: Props) => {
  return <Wrapper level={props.level} unlocked={props.unlocked}>
    <Icon icon="ra-trophy" isRpg />
  </Wrapper>
}

export default React.memo(AchievementPlaceholder)
