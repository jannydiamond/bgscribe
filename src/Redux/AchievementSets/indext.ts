import { createSlice } from '@reduxjs/toolkit'
import { AchievementSet, AchievementSetId, TableNames } from 'types'

type State = {
  byId: Record<AchievementSetId, AchievementSet>
}

const initialState: State = { byId: {} }

export const AchievementSetSlice = createSlice({
  name: TableNames.ACHIEVEMENT_SETS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})
