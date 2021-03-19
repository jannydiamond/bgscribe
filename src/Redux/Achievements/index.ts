import { createSlice } from '@reduxjs/toolkit'
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
    builder.addCase(init.fulfilled, (_, action) => {
      return {
        byId: action.payload.achievements,
      }
    })
    // TODO handle inside sideEffect and trigger snackbar
    builder.addCase(init.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(addAchievement.fulfilled, (state, action) => {
      const { addedAchievement } = action.payload

      return {
        byId: {
          [addedAchievement.id]: addedAchievement,
          ...state.byId,
        },
      }
    })
    // TODO handle inside sideEffect
    builder.addCase(addAchievement.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(editAchievement.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: action.payload,
        },
      }
    })
    builder.addCase(editAchievement.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(removeAchievement.fulfilled, (state, action) => {
      const newState = Object.values(state.byId).reduce((acc, achievement) => {
        if (achievement.id === action.meta.arg.achievementId) return acc

        return {
          ...acc,
          [achievement.id]: achievement,
        }
      }, {})

      return {
        byId: newState,
      }
    })
    // TODO handle inside sideEffect
    builder.addCase(removeAchievement.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(deleteAchievementSet.fulfilled, (state, action) => {
      const newState = Object.values(state.byId).reduce((acc, achievement) => {
        if (achievement.achievementSetId === action.meta.arg) return acc

        return {
          ...acc,
          [achievement.id]: achievement,
        }
      }, {})

      return {
        byId: newState,
      }
    })
    // TODO handle inside sideEffect
    builder.addCase(deleteAchievementSet.rejected, (_, action) => {
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
