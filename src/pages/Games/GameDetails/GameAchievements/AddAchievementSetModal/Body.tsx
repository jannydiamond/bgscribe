import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModalBodyWrapper from 'components/__styled__/ModalBodyWrapper'
import Form from 'components/__styled__/Form'
import { AchievementSetId, GameAchievement, Modal } from 'types'
import AchievementSetSelect from './AchievementSetSelect'
import { selectAchievementSetsById } from 'Redux/AchievementSets'
import { addGameAchievements } from 'Redux/GameAchievements/sideEffects'
import { selectGameAchievementsById } from 'Redux/GameAchievements'
import { createGameAchievementId } from 'Redux/GameAchievements/helpers'

type Props = {
  modal: Modal
  gameId: string
}

const Body = ({ modal, gameId }: Props) => {
  const dispatch = useDispatch()
  const achievementSetsById = useSelector(selectAchievementSetsById)
  const gameAchievementsById = useSelector(selectGameAchievementsById)

  const [achievementSetIds, setAchievementSets] = useState<AchievementSetId[]>(
    []
  )

  const handleChangeAchievementSets = (options: AchievementSetId[]) => {
    setAchievementSets(options)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const newGameAchievements = achievementSetIds.reduce(
      (acc: GameAchievement[], achievementSetId) => {
        // WHY
        // We check if there already is a game achievment for this game/achievement combination.
        // -> only actually new ones should be added.
        const filteredNewGameAchievements = achievementSetsById[
          achievementSetId
        ].achievements
          .map((achievementId) => ({
            gameId,
            achievementId,
            achieved: false,
          }))
          .filter((ga) => {
            const gameAchievementId = createGameAchievementId(ga)

            return !gameAchievementsById[gameAchievementId]
          })

        return [...acc, ...filteredNewGameAchievements]
      },
      []
    )

    if (newGameAchievements.length > 0) {
      dispatch(addGameAchievements(newGameAchievements))
    }

    modal.hide()
  }

  return (
    <ModalBodyWrapper>
      <Form id="addAchievementSet" onSubmit={handleSubmit}>
        <AchievementSetSelect onChange={handleChangeAchievementSets} />
      </Form>
    </ModalBodyWrapper>
  )
}

export default React.memo(Body)
