import React from 'react'
import { useSelector } from 'react-redux'

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
    <>
      {achievementSet.author?.name ? (
        <KeyValueListItem>
          <KeyValueListKey>Created by:</KeyValueListKey>{' '}
          {achievementSet.author?.email
            ? `${achievementSet.author?.name} (${achievementSet.author?.email})`
            : `${achievementSet.author?.name}`}
        </KeyValueListItem>
      ) : null}
    </>
  )
}

export default React.memo(DatePlayed)
