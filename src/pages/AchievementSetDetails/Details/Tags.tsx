import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'

type Props = {
  achievementSetId: string
}

const Tags = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  return (
    <>
      {achievementSet.tags.map((tag) => (
        <span>{tag}</span>
      ))}
    </>
  )
}

export default React.memo(Tags)
