import { createAsyncThunk } from '@reduxjs/toolkit'
import db from 'Database'
import { GameAchievement, TableNames } from 'types'
import { normalizedGameAchievements } from './helpers'

export const addGameAchievements = createAsyncThunk(
  `${TableNames.GAME_ACHIEVEMENTS}/addGameAchievement`,
  async (gameAchievements: GameAchievement[]) => {
    const response = await db
      .table(TableNames.GAME_ACHIEVEMENTS)
      .bulkAdd(gameAchievements)
      .then(() => {
        return normalizedGameAchievements(gameAchievements)
      })

    return response
  }
)
