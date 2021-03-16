import React from 'react'
import { useSelector } from 'react-redux'

import { AchievementSet } from 'types'
import { selectAchievementSetArray } from 'Redux/AchievementSets'

import LinkTile from 'components/LinkTile'
import P from 'components/__styled__/P'

const AchievementSetList = () => {
  const achievementSets = useSelector(selectAchievementSetArray)

  return (
    <>
      {achievementSets.length > 0 ? (
        achievementSets.map((achievementSet: AchievementSet) => (
          <LinkTile
            key={achievementSet.id}
            href={`/achievement-sets/${achievementSet.id}`}
            title={achievementSet.title}
            subtitle={
              achievementSet.description ? achievementSet.description : ''
            }
          />
        ))
      ) : (
        <P>No achievement sets have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(AchievementSetList)
