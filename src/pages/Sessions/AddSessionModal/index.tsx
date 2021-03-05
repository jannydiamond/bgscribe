import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  game: types.Game
}

const AddSessionModal = ({ modal, game }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Add Session"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} gameId={game.id} />
    </modal.RenderModal>
  )
}

export default React.memo(AddSessionModal)
