import FloatingButton from 'components/FloatingButton'
import LinkTile from 'components/LinkTile'
import P from 'components/__styled__/P'
import { useModal } from 'hooks/useModal'
import ListItem from 'pages/Games/__styled__/ListItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAchievementsByGame } from 'Redux/root'
import { RootState } from 'Redux/store'
import AddAchievementSetModal from './AddAchievementSetModal'

type Props = {
  gameId: string
}

const GameAchievements = (props: Props) => {
  const addAchievementSetModal = useModal()
  const achievements = useSelector((state: RootState) =>
    selectAchievementsByGame(state, { gameId: props.gameId })
  )

  return (
    <>
      {achievements.length > 0 ? (
        achievements.map((achievement) => (
          <ListItem key={achievement.id}>
            <LinkTile
              href="#"
              imageSrc={achievement.image ? achievement.image : ''}
              title={achievement.title}
              subtitle={achievement.description}
            />
          </ListItem>
        ))
      ) : (
        <P>No achievements have been added, yet.</P>
      )}
      <FloatingButton
        variant="secondary"
        onClick={() => addAchievementSetModal.show()}
      >
        Add Achievement Set
      </FloatingButton>
      <AddAchievementSetModal
        modal={addAchievementSetModal}
        gameId={props.gameId}
      />
    </>
  )
}

export default React.memo(GameAchievements)
