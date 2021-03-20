import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { removeAchievement } from 'Redux/sideEffects'

import Button from 'components/__styled__/Button'

type Props = {
  modal: types.Modal
  achievement: types.Achievement
  achievementSetId: string
}

const Footer = ({ modal, achievement, achievementSetId }: Props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleDeleteSession = () => {
    dispatch(
      removeAchievement({
        achievementSetId,
        achievementId: achievement.id,
      })
    )

    modal.hide()

    history.push(`/achievement-sets/${achievementSetId}`)
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
        Delete achievement
      </Button>
    </>
  )
}

export default React.memo(Footer)
