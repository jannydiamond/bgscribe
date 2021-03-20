import AchievementUnlockTile from 'components/AchievementUnlockTile'
import FloatingButton from 'components/FloatingButton'
import P from 'components/__styled__/P'
import { useModal } from 'hooks/useModal'
import ListItem from 'pages/Games/__styled__/ListItem'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAchievementsByGame } from 'Redux/root'
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

  const achievements = useSelector((state: RootState) =>
    selectAchievementsByGame(state, { gameId: props.gameId })
  )

  const [achievementToUnlock, setAchievementToUnlock] = useState<GameAchievement & Achievement | null>(null)

  const handleAchievementToUnlockClick = (achievement: GameAchievement & Achievement) => {
    setAchievementToUnlock(achievement)
    unlockAchievementModal.show()
  }

  return (
    <>
      {achievements.length > 0 ? (
        achievements.map((achievement) => (
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
        ))
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
