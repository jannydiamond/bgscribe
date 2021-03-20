import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementById } from 'Redux/Achievements'

import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

type Props = {
  achievementId: string
}

const Type = (props: Props) => {
  const achievement = useSelector((state: RootState) =>
    selectAchievementById(state, {
      achievementId: props.achievementId,
    })
  )

  return (
    <KeyValueListItem>
      <KeyValueListKey>Type:</KeyValueListKey>{' '}
      {achievement.type.type}
    </KeyValueListItem>
  )
}

export default React.memo(Type)
