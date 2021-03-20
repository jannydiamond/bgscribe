import React from 'react'
import {Modal, GameId} from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: Modal
  gameId: GameId
}

const AddAchievementsModal = ({ modal, gameId }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Add Achievements from Sets"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} gameId={gameId} />
    </modal.RenderModal>
  )
}

export default React.memo(AddAchievementsModal)
