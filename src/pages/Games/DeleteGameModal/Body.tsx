import React from 'react'

import * as types from 'types'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'

type Props = {
  game: types.Game
}

const Body = ({ game }: Props) => {
  return (
    <ModalBodyWrapper>
      Do you really want to delete <b>{game.name}</b>? All your sessions will be
      lost.
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
