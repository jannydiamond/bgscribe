import React from 'react'
import {Modal, Achievement, GameAchievement} from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: Modal
  achievement: GameAchievement & Achievement
}

const UnlockAchievementModal = ({ modal, achievement }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Unlock Achievement"
      footer={<Footer modal={modal} />}
    >
      <Body modal={modal} achievement={achievement} />
    </modal.RenderModal>
  )
}

export default React.memo(UnlockAchievementModal)
