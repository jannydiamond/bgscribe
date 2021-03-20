import { createSlice } from '@reduxjs/toolkit'
import { init } from 'Redux/sideEffects'
import { RootState } from 'Redux/store'
import { GameAchievement, GameAchievementId, GameId, TableNames } from 'types'
import { addGameAchievements } from './sideEffects'

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
      // TODO handle inside sideEffect
      .addCase(init.rejected, (_, action) => {
        console.log(action.error)
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
      .addCase(addGameAchievements.rejected, (_, action) => {
        console.log(action.error)
      })
  },
})

export const selectGameAchievementsById = (state: RootState) =>
  state.GameAchievements.byGameAchievementId

export const selectGameAchievementsByGameId = (
  state: RootState,
  props: { gameId: GameId }
) =>
  Object.values(state.GameAchievements.byGameAchievementId).filter(
    (gameAchievement) => gameAchievement.gameId === props.gameId
  )
