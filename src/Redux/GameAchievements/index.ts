import { createSlice } from '@reduxjs/toolkit'
import { GameAchievement, GameAchievementId, TableNames } from 'types'

type State = {
  byGameAchievementId: Record<GameAchievementId, GameAchievement>
}

const initialState: State = { byGameAchievementId: {} }

export const GameAchievementSlice = createSlice({
  name: TableNames.GAME_ACHIEVEMENTS,
  initialState,
  reducers: {},
  extraReducers: {},
})
