import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import { Achievement, GameAchievement, Modal } from 'types'
import { RootState } from 'Redux/store'
import { setGameAchievementAsAchieved } from 'Redux/GameAchievements/sideEffects'
import { selectGameAchievementById } from 'Redux/GameAchievements'
import { createGameAchievementId } from 'Redux/GameAchievements/helpers'
import AchievementPreview from 'components/__styled__/AchievementPreview'
import AchievementAvatar from 'components/AchievementAvatar'

type Props = {
  modal: Modal
  achievement: GameAchievement & Achievement
}

const Body = ({ modal, achievement }: Props) => {
  const dispatch = useDispatch()

  const gameAchievement = useSelector((state: RootState) => selectGameAchievementById(state, { gameAchievementId: createGameAchievementId(achievement)}))

  const handleSubmit = (event: any) => {
    event.preventDefault()

    dispatch(setGameAchievementAsAchieved(gameAchievement))

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="unlockAchievement" onSubmit={handleSubmit}>
        Do you really want to unlock achievement {achievement.title}?
      </Form>
      <AchievementPreview>
        <AchievementAvatar src={achievement.image ?? ''} alt="Preview" level={achievement.level} />
      </AchievementPreview>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
