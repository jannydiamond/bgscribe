import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  achievementSetId: types.AchievementSetId
}

const AddAchievementModal = ({ modal, achievementSetId }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Add Achievement"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} achievementSetId={achievementSetId} />
    </modal.RenderModal>
  )
}

export default React.memo(AddAchievementModal)
