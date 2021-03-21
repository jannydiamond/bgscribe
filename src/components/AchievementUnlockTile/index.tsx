import React from 'react'

import AchievementAvatar from 'components/AchievementAvatar'
import IconButton from 'components/IconButton'

import Wrapper from './__styled__/Wrapper'
import ContentWrapper from './__styled__/ContentWrapper'
import Title from './__styled__/Title'
import Subtitle from './__styled__/Subtitle'
import IconWrapper from './__styled__/IconWrapper'
import { AchievementLevel } from 'types'
import { useModal } from 'hooks/useModal'
import DetailsModal from './DetailsModal'
type Props = {
  imageSrc?: string
  title: string
  subtitle?: string
  level: AchievementLevel
  unlocked?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AchievementUnlockTile = (props: Props) => {
  const detailsModal = useModal()
  const handleWrapperClick = () => {
    detailsModal.show()
  }

  return (
    <>
      <Wrapper onClick={handleWrapperClick}>
        <AchievementAvatar
          src={props.imageSrc ?? ''}
          alt={props.title}
          level={props.level}
          unlocked={props.unlocked}
        />
        <ContentWrapper>
          <Title>{props.title}</Title>
          {props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
        </ContentWrapper>
        {props.unlocked ? null : (
          <IconWrapper>
            <IconButton
              title="Unlock"
              icon="ra-trophy"
              isRpg
              variant="outlinePrimary"
              onClick={props.onClick}
            />
          </IconWrapper>
        )}
      </Wrapper>
      <detailsModal.RenderModal titleLabel={props.title}>
        <DetailsModal
          subtitle={props.subtitle}
          imageSrc={props.imageSrc}
          level={props.level}
          unlocked={props.unlocked}
        />
      </detailsModal.RenderModal>
    </>
  )
}

export default React.memo(AchievementUnlockTile)
