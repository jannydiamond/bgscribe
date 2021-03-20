import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  Achievement,
  AchievementId,
  AchievementSet,
  AchievementSetId,
  TableNames,
} from 'types'

import db from 'Database'
import saveToFile from 'helpers/saveToFile'
import { asyncMapBase64ImagesToURLs, normalize } from 'Redux/helpers'

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

export const exportAchievementSet = createAsyncThunk(
  `${TableNames.ACHIEVEMENT_SETS}/exportAchievementSet`,
  async (achievementSetId: AchievementSetId) => {
    // NOTE:
    // We explicitely want to get the achievementSet from the database to
    // make sure all images are base64 encoded already!
    const normalizedAchievementSet: AchievementSet = await db
      .table(TableNames.ACHIEVEMENT_SETS)
      .get(achievementSetId)

    const achievements = await db
      .table(TableNames.ACHIEVEMENTS)
      .bulkGet(normalizedAchievementSet.achievements)

    const achievementSet = {
      ...normalizedAchievementSet,
      achievements,
    }

    const json = JSON.stringify(achievementSet, null, 2)
    const blob = new Blob([json], { type: 'application/json;charset=utf-8' })

    const reader = new FileReader()

    reader.onload = (event: any) => {
      saveToFile(event.target.result, achievementSet.title)
    }

    reader.readAsText(blob)
  }
)

export const importAchievementSet = createAsyncThunk(
  `${TableNames.ACHIEVEMENT_SETS}/importAchievementSet`,
  async (file: string) => {
    const denormalizedAchievementSet = JSON.parse(file)

    const achievementsFromFile = denormalizedAchievementSet.achievements as Achievement[]

    const normalizedAchievementSet = {
      ...denormalizedAchievementSet,
      achievements: achievementsFromFile.map(
        (achievement: Achievement) => achievement.id
      ),
    }

    await db.transaction(
      'rw',
      db.table(TableNames.ACHIEVEMENT_SETS),
      db.table(TableNames.ACHIEVEMENTS),
      async () => {
        await db
          .table(TableNames.ACHIEVEMENT_SETS)
          .put(normalizedAchievementSet)
        await db.table(TableNames.ACHIEVEMENTS).bulkPut(achievementsFromFile)
      }
    )

    const achievementSet = await db
      .table(TableNames.ACHIEVEMENT_SETS)
      .get(normalizedAchievementSet.id)
    const achievements = await db
      .table(TableNames.ACHIEVEMENTS)
      .bulkGet(achievementSet.achievements)

    const achievementsWithImageURLs = await asyncMapBase64ImagesToURLs(
      achievements
    )

    return {
      achievementSet,
      achievements: normalize(achievementsWithImageURLs),
    }
  }
)
