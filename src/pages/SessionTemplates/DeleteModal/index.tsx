import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  session: types.Session
  game: types.Game
}

const DeleteSessionModal = ({ modal, session, game }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Delete Session"
      footer={<Footer modal={modal} session={session} gameId={game.id} />}
    >
      <Body session={session} />
    </modal.RenderModal>
  )
}

export default React.memo(DeleteSessionModal)
