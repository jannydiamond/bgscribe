import AchievementUnlockTile from 'components/AchievementUnlockTile'
import FloatingButton from 'components/FloatingButton'
import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'
import { useModal } from 'hooks/useModal'
import ListItem from 'pages/Games/__styled__/ListItem'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSetAchievementsByIdByGame } from 'Redux/root'
import { RootState } from 'Redux/store'
import { Achievement, GameAchievement } from 'types'
import AddAchievementsModal from './AddAchievementsModal'
import UnlockAchievementModal from './UnlockAchievementModal'

type Props = {
  gameId: string
}

const GameAchievements = (props: Props) => {
  const addAchievementsModal = useModal()
  const unlockAchievementModal = useModal()

  const achievementsBySet = Object.values(
    useSelector((state: RootState) =>
      selectSetAchievementsByIdByGame(state, { gameId: props.gameId })
    )
  )

  const [achievementToUnlock, setAchievementToUnlock] = useState<
    (GameAchievement & Achievement) | null
  >(null)

  const handleAchievementToUnlockClick = (
    achievement: GameAchievement & Achievement
  ) => {
    setAchievementToUnlock(achievement)
    unlockAchievementModal.show()
  }

  return (
    <>
      {achievementsBySet.length > 0 ? (
        achievementsBySet.map((set) => {
          return (
            <div key={set.id}>
              <H2>{set.title}</H2>
              {set.achievements.map((achievement) => (
                <ListItem key={achievement.id}>
                  <AchievementUnlockTile
                    imageSrc={achievement.image ? achievement.image : ''}
                    title={achievement.title}
                    subtitle={achievement.description}
                    level={achievement.level}
                    onClick={() => handleAchievementToUnlockClick(achievement)}
                    unlocked={achievement.achieved}
                  />
                </ListItem>
              ))}
            </div>
          )
        })
      ) : (
        <P>No achievements have been added, yet.</P>
      )}
      <FloatingButton
        variant="secondary"
        onClick={() => addAchievementsModal.show()}
      >
        Add Achievements
      </FloatingButton>
      <AddAchievementsModal
        modal={addAchievementsModal}
        gameId={props.gameId}
      />
      <UnlockAchievementModal
        modal={unlockAchievementModal}
        achievement={achievementToUnlock as GameAchievement & Achievement}
      />
    </>
  )
}

export default React.memo(GameAchievements)
