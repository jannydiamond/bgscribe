import React from 'react'
import { useSelector } from 'react-redux'

import { Achievement } from 'types'

import { RootState } from 'Redux/store'
import { selectAchievementsByAchievementSetId } from 'Redux/Achievements'

import LinkTile from 'components/LinkTile'
import P from 'components/__styled__/P'
import H2 from 'components/__styled__/H2'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'

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
        <ListItem key={achievement.id}>
          <LinkTile
            href={`/achievement-sets/${props.achievementSetId}/${achievement.id}`}
            imageSrc={achievement.image ?? '-'}
            title={achievement.title}
            subtitle={achievement.description ?? '-'}
          />
        </ListItem>
      )
    })
  }

  return (
    <>
      <H2>Achievements</H2>
      {achievementsArray.length > 0 ? (
        <List>{renderAchievements(achievementsArray)}</List>
      ) : (
        <P>No achievements have been added, yet.</P>
      )}
    </>
  )
}

export default React.memo(Achievements)
