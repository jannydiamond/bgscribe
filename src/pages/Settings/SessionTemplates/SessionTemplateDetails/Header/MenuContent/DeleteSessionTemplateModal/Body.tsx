import React from 'react'

import * as types from 'types'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'

type Props = {
  template: types.SessionTemplate
}

const Body = ({ template }: Props) => {
  return (
    <ModalBodyWrapper>
      Do you really want to delete <b>Template: {template.name}</b>?
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
