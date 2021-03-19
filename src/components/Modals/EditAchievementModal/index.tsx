import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  achievement: types.Achievement
}

const AddAchievementModal = ({ modal, achievement }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Edit Achievement"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} achievement={achievement} />
    </modal.RenderModal>
  )
}

export default React.memo(AddAchievementModal)
