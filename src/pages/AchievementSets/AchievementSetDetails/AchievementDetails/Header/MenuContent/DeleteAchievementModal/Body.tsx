import React from 'react'

import * as types from 'types'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'

type Props = {
  achievement: types.Achievement
}

const Body = ({ achievement }: Props) => {
  return (
    <ModalBodyWrapper>
      Do you really want to delete <b>Achievement: {achievement.title}</b>?
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
