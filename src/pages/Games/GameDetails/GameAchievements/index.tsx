import FloatingButton from 'components/FloatingButton'
import AddSessionModal from 'pages/Games/GameDetails/Sessions/AddSessionModal'
import { useModal } from 'hooks/useModal'
import React from 'react'

type Props = {
  gameId: string
}

const GameAchievements = (props: Props) => {
  const addAchievementSetModal = useModal()

  return (
    <>
      <FloatingButton
        variant="secondary"
        onClick={() => addAchievementSetModal.show()}
      >
        Add Achievement Set
      </FloatingButton>
      <AddSessionModal modal={addAchievementSetModal} gameId={props.gameId} />
    </>
  )
}

export default React.memo(GameAchievements)
