import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'

import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'

type Props = {
  achievementSetId: string
}

const Version = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  return (
    <KeyValueListItem>
      <KeyValueListKey>Version:</KeyValueListKey>{' '}
      {achievementSet.version ?? '-'}
    </KeyValueListItem>
  )
}

export default React.memo(Version)
