import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  game: types.Game
}

const EditGameModal = ({ modal, game }: Props) => {
  return (
    <modal.RenderModal titleLabel="Edit Game" footer={<Footer modal={modal} />}>
      <Body modal={modal} game={game} />
    </modal.RenderModal>
  )
}

export default React.memo(EditGameModal)
