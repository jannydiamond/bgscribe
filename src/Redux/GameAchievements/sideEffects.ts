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

export const setGameAchievementAsAchieved = createAsyncThunk(
  `${TableNames.GAME_ACHIEVEMENTS}/setGameAchievementAsAchieved`,
  async (gameAchievement: GameAchievement) => {
    const response = await db
      .table(TableNames.GAME_ACHIEVEMENTS)
      .update([gameAchievement.gameId, gameAchievement.achievementId], {
        achieved: true,
      })
      .then((updated) => {
        if (updated === 1) {
          return db
            .table(TableNames.GAME_ACHIEVEMENTS)
            .get([gameAchievement.gameId, gameAchievement.achievementId])
        }
      })

    return response
  }
)
