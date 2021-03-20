import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementById } from 'Redux/Achievements'

import KeyValueList from 'components/__styled__/KeyValueList'

import Wrapper from './__styled__/Wrapper'
import P from 'components/__styled__/P'
import Type from './Type'
import Level from './Level'

type Props = {
  achievementId: string
}

const Details = (props: Props) => {
  const achievement = useSelector((state: RootState) =>
    selectAchievementById(state, {
      achievementId: props.achievementId,
    })
  )

  return (
    <Wrapper>
      {achievement.description && <P>{achievement.description}</P>}
      <KeyValueList>
        <Type achievementId={props.achievementId} />
        <Level achievementId={props.achievementId} />
      </KeyValueList>
    </Wrapper>
  )
}

export default React.memo(Details)
