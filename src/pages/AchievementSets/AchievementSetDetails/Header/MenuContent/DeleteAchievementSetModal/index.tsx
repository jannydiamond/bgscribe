import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  achievementSet: types.AchievementSet
}

const DeleteAchievementSetModal = ({ modal, achievementSet }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Delete Achievement Set"
      footer={<Footer modal={modal} achievementSet={achievementSet} />}
    >
      <Body achievementSet={achievementSet} />
    </modal.RenderModal>
  )
}

export default React.memo(DeleteAchievementSetModal)
