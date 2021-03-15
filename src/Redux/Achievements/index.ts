import { createSlice } from '@reduxjs/toolkit'
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
