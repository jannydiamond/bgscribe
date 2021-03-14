import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  template: types.SessionTemplate
}

const EditSessionTemplateModal = ({ modal, template }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Edit Template"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} template={template} />
    </modal.RenderModal>
  )
}

export default React.memo(EditSessionTemplateModal)
