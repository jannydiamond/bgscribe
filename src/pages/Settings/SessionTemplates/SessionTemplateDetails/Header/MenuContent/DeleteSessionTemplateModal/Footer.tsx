import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { deleteSessionTemplate } from 'Redux/SessionTemplates/sideEffects'

import Button from 'components/__styled__/Button'

type Props = {
  modal: types.Modal
  template: types.SessionTemplate
}

const Footer = ({ modal, template }: Props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleDeleteTemplate = () => {
    dispatch(deleteSessionTemplate(template.id))

    modal.hide()

    history.push(`/templates`)
  }

  const handleCancel = () => {
    modal.hide()
  }

  return (
    <>
      <Button onClick={handleCancel} variant="secondary" size="small">
        Cancel
      </Button>
      <Button onClick={handleDeleteTemplate} size="small">
        Delete template
      </Button>
    </>
  )
}

export default React.memo(Footer)
