import AchievementAvatar from 'components/AchievementAvatar'
import AchievementPreview from 'components/__styled__/AchievementPreview'
import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import P from 'components/__styled__/P'
import React from 'react'
import { AchievementLevel } from 'types'

type Props = {
  imageSrc?: string
  subtitle?: string
  level: AchievementLevel
  unlocked?: boolean
}

const DetailsModal = (props: Props) => {
  return (
    <ModalBodyWrapper>
      <P>{props.subtitle}</P>
      <AchievementPreview level={props.level} unlocked={props.unlocked}>
        <AchievementAvatar
          src={props.imageSrc ?? ''}
          alt="Preview"
          level={props.level}
          unlocked={props.unlocked}
        />
      </AchievementPreview>
    </ModalBodyWrapper>
  )
}

export default React.memo(DetailsModal)
