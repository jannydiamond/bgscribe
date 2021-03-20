import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as types from 'types'

import { editSessionTemplate } from 'Redux/SessionTemplates/sideEffects'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import NameInput from './NameInput'
import TemplateInput from './TemplateInput'

type Props = {
  modal: types.Modal
  template: types.SessionTemplate
}

const Body = ({ modal, template }: Props) => {
  const dispatch = useDispatch()

  const [templateName, setTemplateName] = useState<string>(template.name)
  const [currentTemplate, setCurrentTemplate] = useState<string>(
    template.template
  )

  const handleTemplateNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setTemplateName(event.currentTarget.value)

  const handleTemplateChange = (value?: string) =>
    setCurrentTemplate(value ?? '')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    dispatch(
      editSessionTemplate({
        id: template.id,
        name: templateName,
        template: currentTemplate,
      })
    )

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="editSessionTemplate" onSubmit={handleSubmit}>
        <NameInput value={templateName} onChange={handleTemplateNameChange} />
        <TemplateInput
          template={currentTemplate}
          onChange={handleTemplateChange}
        />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
