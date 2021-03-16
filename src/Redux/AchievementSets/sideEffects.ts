import { createAsyncThunk } from '@reduxjs/toolkit'

import { AchievementId, AchievementSetId, TableNames } from 'types'

import db from 'Database'

type AchievementSetPayload = {
  id: AchievementSetId
  title: string
  description?: string
  tags: string[]
  version: string
  achievements: AchievementId[]
  author?: {
    name?: string
    email?: string
  }
}

export const addAchievementSet = createAsyncThunk(
  `${TableNames.ACHIEVEMENT_SETS}/addAchievementSet`,
  async (achievementSet: AchievementSetPayload) => {
    const {
      id,
      title,
      description,
      tags,
      version,
      achievements,
      author,
    } = achievementSet

    const response = await db
      .table(TableNames.ACHIEVEMENT_SETS)
      .add({
        id: id,
        title: title !== '' ? title : id,
        description,
        tags,
        version,
        achievements,
        author,
        created: new Date(),
      })
      .then((achievementSetId) => {
        return db.table(TableNames.ACHIEVEMENT_SETS).get(achievementSetId)
      })

    return response
  }
)

export const editAchievementSet = createAsyncThunk(
  `${TableNames.ACHIEVEMENT_SETS}/editAchievementSet`,
  async (achievementSet: AchievementSetPayload) => {
    const {
      id,
      title,
      description,
      tags,
      version,
      achievements,
      author,
    } = achievementSet

    const response = await db
      .table(TableNames.ACHIEVEMENT_SETS)
      .update(id, {
        title: title !== '' ? title : id,
        description,
        tags,
        version,
        achievements,
        author,
      })
      .then((updated) => {
        if (updated === 1) {
          return db.table(TableNames.ACHIEVEMENT_SETS).get(id)
        }
      })

    return response
  }
)
