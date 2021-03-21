import FloatingButton from 'components/FloatingButton'
import H2 from 'components/__styled__/H2'
import P from 'components/__styled__/P'
import { useModal } from 'hooks/useModal'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectSetAchievementsByIdByGame } from 'Redux/root'
import { RootState } from 'Redux/store'
import AddAchievementsModal from './AddAchievementsModal'
import GameAchievement from './GameAchievement'

type Props = {
  gameId: string
}

const GameAchievements = (props: Props) => {
  const addAchievementsModal = useModal()

  const achievementsBySet = Object.values(
    useSelector((state: RootState) =>
      selectSetAchievementsByIdByGame(state, { gameId: props.gameId })
    )
  )

  return (
    <>
      {achievementsBySet.length > 0 ? (
        achievementsBySet.map((set) => {
          return (
            <div key={set.id}>
              <H2>{set.title}</H2>
              {set.achievements.map((achievement) => (
                <GameAchievement
                  key={achievement.id}
                  achievement={achievement}
                />
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
    </>
  )
}

export default React.memo(GameAchievements)
