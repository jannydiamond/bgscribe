import React from 'react'

import * as types from 'types'

import Body from './Body'
import Footer from './Footer'

type Props = {
  modal: types.Modal
  achievement: types.Achievement
  achievementSet: types.AchievementSet
}

const DeleteSessionModal = ({ modal, achievement, achievementSet }: Props) => {
  return (
    <modal.RenderModal
      titleLabel="Delete Session"
      footer={
        <Footer
          modal={modal}
          achievement={achievement}
          achievementSetId={achievementSet.id}
        />
      }
    >
      <Body achievement={achievement} />
    </modal.RenderModal>
  )
}

export default React.memo(DeleteSessionModal)
