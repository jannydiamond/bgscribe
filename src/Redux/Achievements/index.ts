import { createSlice } from '@reduxjs/toolkit'
import { removeIn, setIn } from 'immutable'
import { importAchievementSet } from 'Redux/AchievementSets/sideEffects'
import {
  addAchievement,
  deleteAchievementSet,
  init,
  removeAchievement,
} from 'Redux/sideEffects'
import { RootState } from 'Redux/store'
import { Achievement, AchievementId, TableNames } from 'types'
import { editAchievement } from './sideEffects'

type State = {
  byId: Record<AchievementId, Achievement>
}

const initialState: State = { byId: {} }

export const AchievementSlice = createSlice({
  name: TableNames.ACHIEVEMENTS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(init.fulfilled, (_, action) => {
        return {
          byId: action.payload.achievements,
        }
      })
      // TODO handle inside sideEffect and trigger snackbar
      .addCase(init.rejected, (_, action) => {
        console.log(action.error)
      })

      .addCase(addAchievement.fulfilled, (state, action) => {
        const { addedAchievement } = action.payload

        return setIn(state, ['byId', addedAchievement.id], addedAchievement)
      })
      // TODO handle inside sideEffect
      .addCase(addAchievement.rejected, (_, action) => {
        console.log(action.error)
      })

      .addCase(editAchievement.fulfilled, (state, action) => {
        const { id } = action.payload

        return setIn(state, ['byId', id], action.payload)
      })
      .addCase(editAchievement.rejected, (_, action) => {
        console.log(action.error)
      })

      // TODO remove related unachieved gameAchievements
      .addCase(removeAchievement.fulfilled, (state, action) => {
        const { achievementId } = action.meta.arg

        return removeIn(state, ['byId', achievementId])
      })
      // TODO handle inside sideEffect
      .addCase(removeAchievement.rejected, (_, action) => {
        console.log(action.error)
      })

      .addCase(deleteAchievementSet.fulfilled, (state, action) => {
        const { achievementIdsToDelete } = action.payload

        const newState = achievementIdsToDelete.reduce((acc, id) => {
          return removeIn(acc, ['byId', id])
        }, state)

        return newState
      })
      // TODO handle inside sideEffect
      .addCase(deleteAchievementSet.rejected, (_, action) => {
        console.log(action.error)
      })

      .addCase(importAchievementSet.fulfilled, (state, action) => {
        const { achievements } = action.payload

        if (!achievements) {
          return state
        }

        return {
          ...state,
          byId: {
            ...state.byId,
            ...achievements,
          },
        }
      })
      // TODO handle inside sideEffect
      .addCase(importAchievementSet.rejected, (_, action) => {
        console.log(action.error)
      })
  },
})

export const selectAchievementsById = (state: RootState) =>
  state.Achievements.byId
export const selectAchievementIds = (state: RootState) =>
  Object.keys(state.Achievements.byId)
export const selectAchievementsArray = (state: RootState) =>
  Object.values(state.Achievements.byId)
export const selectAchievementById = (
  state: RootState,
  ownProps: { achievementId: string }
) => state.Achievements.byId[ownProps.achievementId]

export const selectAchievementsByAchievementSetId = (
  state: RootState,
  achievementSetId: string
) =>
  Object.values(state.Achievements.byId).filter(
    (achievement: Achievement) =>
      achievement.achievementSetId === achievementSetId
  )
