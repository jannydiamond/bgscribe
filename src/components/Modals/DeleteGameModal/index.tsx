import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  game: types.Game
}

const DeleteGameModal = ({ modal, game }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Delete Game"
      footer={<Footer modal={modal} game={game} />}
    >
      <Body game={game} />
    </modal.RenderModal>
  )
}

export default React.memo(DeleteGameModal)
