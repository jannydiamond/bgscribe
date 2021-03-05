import React from 'react'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { removeSessionFromGame } from 'Redux/Games/sideEffects'
import { deleteSession } from 'Redux/Sessions/sideEffects'

import Button from 'components/__styled__/Button'

type Props = {
  modal: types.Modal
  session: types.Session
  gameId: string
}

const Footer = ({ modal, session, gameId }: Props) => {
  const dispatch = useDispatch()

  const handleDeleteSession = () => {
    dispatch(
      removeSessionFromGame({
        gameId: gameId,
        sessionId: session.id,
      })
    )

    dispatch(deleteSession(session.id))

    modal.hide()
  }

  const handleCancel = () => {
    modal.hide()
  }

  return (
    <>
      <Button onClick={handleCancel} variant="secondary" size="small">
        Cancel
      </Button>
      <Button onClick={handleDeleteSession} size="small">
        Delete session
      </Button>
    </>
  )
}

export default React.memo(Footer)
