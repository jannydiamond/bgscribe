import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { addSessionTemplate } from 'Redux/SessionTemplates/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import NameInput from './NameInput'
import TemplateInput from './TemplateInput'

type Props = {
  modal: types.Modal
}

const Body = ({ modal }: Props) => {
  const dispatch = useDispatch()

  const [templateName, setTemplateName] = useState<string>('')
  const [template, setTemplate] = useState<string>('')

  const handleTemplateNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setTemplateName(event.currentTarget.value)

  const handleTemplateChange = (value?: string) => setTemplate(value ?? '')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    dispatch(addSessionTemplate({ name: templateName, template }))

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="addSessionTemplate" onSubmit={handleSubmit}>
        <NameInput value={templateName} onChange={handleTemplateNameChange} />
        <TemplateInput template={template} onChange={handleTemplateChange} />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
