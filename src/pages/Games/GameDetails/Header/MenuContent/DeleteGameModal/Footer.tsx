import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { deleteGame } from 'Redux/sideEffects'

import Button from 'components/__styled__/Button'

type Props = {
  modal: types.Modal
  game: types.Game
}

const Footer = ({ modal, game }: Props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleDeleteGame = () => {
    dispatch(deleteGame(game.id))
    modal.hide()
    history.push('/games')
  }

  const handleCancel = () => {
    modal.hide()
  }

  return (
    <>
      <Button onClick={handleCancel} variant="secondary" size="small">
        Cancel
      </Button>
      <Button onClick={handleDeleteGame} size="small">
        Delete game
      </Button>
    </>
  )
}

export default React.memo(Footer)
