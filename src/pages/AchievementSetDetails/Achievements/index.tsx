import React from 'react'
import { useSelector } from 'react-redux'

import { Achievement } from 'types'

import { RootState } from 'Redux/store'
import { selectAchievementsByAchievementSetId } from 'Redux/Achievements'

import LinkTile from 'components/LinkTile'
import P from 'components/__styled__/P'
import H2 from 'components/__styled__/H2'

type Props = {
  achievementSetId: string
}

const Achievements = (props: Props) => {
  const achievementsArray: Achievement[] = useSelector((state: RootState) =>
    selectAchievementsByAchievementSetId(state, props.achievementSetId)
  )

  const renderAchievements = (achievements: Achievement[]) => {
    return achievements.map((achievement: Achievement) => {
      return (
        <LinkTile
          key={achievement.id}
          href={`/games/${props.achievementSetId}/${achievement.id}`}
          imageSrc={achievement.image ?? '-'}
          title={achievement.title}
          subtitle={achievement.description ?? '-'}
        />
      )
    })
  }

  return (
    <>
      <H2>Achievements</H2>
      {achievementsArray.length > 0 ? (
        renderAchievements(achievementsArray)
      ) : (
        <P>No achievements have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(Achievements)
