import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'

import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

type Props = {
  achievementSetId: string
}

const DatePlayed = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  return (
    <KeyValueListItem>
      <KeyValueListKey>Date added:</KeyValueListKey>{' '}
      {format(achievementSet.created, 'dd.MM.yyyy')}
    </KeyValueListItem>
  )
}

export default React.memo(DatePlayed)
