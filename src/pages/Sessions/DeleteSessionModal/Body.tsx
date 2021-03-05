import React from 'react'
import { format } from 'date-fns'

import * as types from 'types'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'

type Props = {
  session: types.Session
}

const Body = ({ session }: Props) => {
  return (
    <ModalBodyWrapper>
      Do you really want to delete{' '}
      <b>Session: {format(session.datePlayed, 'dd.MM.yyyy')}</b>?
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
