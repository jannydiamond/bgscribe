import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  achievementSet: types.AchievementSet
}

const EditAchievementSetModal = ({ modal, achievementSet }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Edit Achievement Set"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} achievementSet={achievementSet} />
    </modal.RenderModal>
  )
}

export default React.memo(EditAchievementSetModal)
