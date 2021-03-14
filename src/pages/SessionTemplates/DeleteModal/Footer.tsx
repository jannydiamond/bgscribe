import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { removeSession } from 'Redux/sideEffects'

import Button from 'components/__styled__/Button'

type Props = {
  modal: types.Modal
  session: types.Session
  gameId: string
}

const Footer = ({ modal, session, gameId }: Props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleDeleteSession = () => {
    dispatch(
      removeSession({
        gameId,
        sessionId: session.id,
      })
    )

    modal.hide()

    history.push(`/games/${gameId}`)
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
