import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'Redux/store'
import { selectAchievementSetById } from 'Redux/AchievementSets'
import Tags from 'components/Tags'

type Props = {
  achievementSetId: string
}

const AchievementSetTags = (props: Props) => {
  const achievementSet = useSelector((state: RootState) =>
    selectAchievementSetById(state, {
      achievementSetId: props.achievementSetId,
    })
  )

  return achievementSet.tags.length > 0 ? (
    <Tags tags={achievementSet.tags} />
  ) : null
}

export default React.memo(AchievementSetTags)
