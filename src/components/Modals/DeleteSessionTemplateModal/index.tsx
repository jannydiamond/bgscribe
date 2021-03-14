import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  template: types.SessionTemplate
}

const DeleteSessionTemplateModal = ({ modal, template }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Delete Template"
      footer={<Footer modal={modal} template={template} />}
    >
      <Body template={template} />
    </modal.RenderModal>
  )
}

export default React.memo(DeleteSessionTemplateModal)
