import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { deleteAchievementSet } from 'Redux/sideEffects'

import Button from 'components/__styled__/Button'

type Props = {
  modal: types.Modal
  achievementSet: types.AchievementSet
}

const Footer = ({ modal, achievementSet }: Props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleDeleteAchievementSet = () => {
    dispatch(deleteAchievementSet(achievementSet.id))
    modal.hide()
    history.push('/achievement-sets')
  }

  const handleCancel = () => {
    modal.hide()
  }

  return (
    <>
      <Button onClick={handleCancel} variant="secondary" size="small">
        Cancel
      </Button>
      <Button onClick={handleDeleteAchievementSet} size="small">
        Delete achievement set
      </Button>
    </>
  )
}

export default React.memo(Footer)
