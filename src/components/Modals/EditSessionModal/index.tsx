import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  session: types.Session
}

const EditGameModal = ({ modal, session }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Edit Session"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} session={session} />
    </modal.RenderModal>
  )
}

export default React.memo(EditGameModal)
