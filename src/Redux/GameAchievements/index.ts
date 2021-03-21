import { createSlice } from '@reduxjs/toolkit'
import { removeIn } from 'immutable'
import {
  deleteAchievementSet,
  init,
  removeAchievement,
} from 'Redux/sideEffects'
import { RootState } from 'Redux/store'
import {
  AchievementId,
  GameAchievement,
  GameAchievementId,
  GameId,
  TableNames,
} from 'types'
import { createGameAchievementId } from './helpers'
import {
  addGameAchievements,
  setGameAchievementAsAchieved,
} from './sideEffects'

export type State = {
  byGameAchievementId: Record<GameAchievementId, GameAchievement>
}

const initialState: State = { byGameAchievementId: {} }

export const GameAchievementSlice = createSlice({
  name: TableNames.GAME_ACHIEVEMENTS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(init.fulfilled, (_, action) => {
        return action.payload.gameAchievements
      })

      .addCase(addGameAchievements.fulfilled, (state, action) => {
        return {
          ...state,
          byGameAchievementId: {
            ...state.byGameAchievementId,
            ...action.payload.byGameAchievementId,
          },
        }
      })

      .addCase(setGameAchievementAsAchieved.fulfilled, (state, action) => {
        const updatedGameAchievement = action.payload

        return {
          ...state,
          byGameAchievementId: {
            ...state.byGameAchievementId,
            [createGameAchievementId(
              updatedGameAchievement
            )]: updatedGameAchievement,
          },
        }
      })

      .addCase(deleteAchievementSet.fulfilled, (state, action) => {
        const { unachievedGameAchievements } = action.payload

        const newState = unachievedGameAchievements.reduce(
          (acc, unachievedGameAchievement) => {
            const id = createGameAchievementId(unachievedGameAchievement)

            return removeIn(acc, ['byGameAchievementId', id])
          },
          state
        )

        return newState
      })

      .addCase(removeAchievement.fulfilled, (state, action) => {
        const { unachievedGameAchievements } = action.payload

        const newState = unachievedGameAchievements.reduce(
          (acc, unachievedGameAchievement) => {
            const id = createGameAchievementId(unachievedGameAchievement)

            return removeIn(acc, ['byGameAchievementId', id])
          },
          state
        )

        return newState
      })
  },
})

export const selectGameAchievementsById = (state: RootState) =>
  state.GameAchievements.byGameAchievementId

export const selectGameAchievementById = (
  state: RootState,
  ownProps: { gameAchievementId: GameAchievementId }
) => state.GameAchievements.byGameAchievementId[ownProps.gameAchievementId]

export const selectGameAchievementsByGameId = (
  state: RootState,
  props: { gameId: GameId }
) =>
  Object.values(state.GameAchievements.byGameAchievementId).filter(
    (gameAchievement) => gameAchievement.gameId === props.gameId
  )

export const selectGameAchievementsByAchievementId = (
  state: RootState,
  props: { achievementId: AchievementId }
) =>
  Object.values(state.GameAchievements.byGameAchievementId).filter(
    (gameAchievement) => gameAchievement.achievementId === props.achievementId
  )
