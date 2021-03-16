import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'Redux/store'
import { Achievement, AchievementId, TableNames } from 'types'

type State = {
  byId: Record<AchievementId, Achievement>
}

const initialState: State = { byId: {} }

export const AchievementSlice = createSlice({
  name: TableNames.ACHIEVEMENTS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
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
