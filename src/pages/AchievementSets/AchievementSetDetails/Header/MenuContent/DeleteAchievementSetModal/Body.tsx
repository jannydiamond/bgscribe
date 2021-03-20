import React from 'react'

import * as types from 'types'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'

type Props = {
  achievementSet: types.AchievementSet
}

const Body = ({ achievementSet }: Props) => {
  return (
    <ModalBodyWrapper>
      Do you really want to delete the achievement set{' '}
      <b>{achievementSet.title}</b>? All your unachieved achievements of this
      achievement set will be lost.
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
