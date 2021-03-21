import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'

import KeyValueListItem from 'components/__styled__/KeyValueListItem'
import KeyValueListKey from 'components/__styled__/KeyValueListKey'
import { selectGameAchievementsByGameId } from 'Redux/GameAchievements'

type Props = {
  gameId: string
}

const AchievementCount = (props: Props) => {
  const allRelatedAchievements = useSelector((state: RootState) =>
    selectGameAchievementsByGameId(state, { gameId: props.gameId })
  )

  const unlockedAchievements = allRelatedAchievements.filter(
    (achievement) => achievement.achieved
  )

  return (
    <KeyValueListItem>
      <KeyValueListKey>Unlocked Achievements:</KeyValueListKey>{' '}
      {unlockedAchievements.length} / {allRelatedAchievements.length}
    </KeyValueListItem>
  )
}

export default React.memo(AchievementCount)
