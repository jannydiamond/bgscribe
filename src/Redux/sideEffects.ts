import { createAsyncThunk } from '@reduxjs/toolkit'
import db from 'Database'
import {
  AchievementSetId,
  Achievement,
  Session,
  TableNames,
  AchievementId,
} from 'types'
import { RootState } from './store'

const normalize = (entities: Array<{ id: string }>) =>
  entities.reduce((acc, entity) => {
    return {
      ...acc,
      [entity.id]: entity,
    }
  }, {})

const THUNK_PREFIX = 'root'

// Converts a base64 string into a URL which can be used throughout the app
// during runtime
export const base64ToURL = async (base64: string) => {
  const base64Blob = base64 ? await (await fetch(base64)).blob() : ''
  const base64Url = base64Blob ? window.URL.createObjectURL(base64Blob) : ''

  return base64Url
}

const asyncMapBase64ImagesToURLs = async <T extends { image: string }>(
  objects: T[]
): Promise<T[]> => {
  return Promise.all(
    objects.map(async (object) => {
      const { image } = object

      const imageUrl = await base64ToURL(image)

      return {
        ...object,
        image: imageUrl,
      }
    })
  )
}

export const init = createAsyncThunk(`${THUNK_PREFIX}/init`, async () => {
  const games = await db.table(TableNames.GAMES).orderBy('name').toArray()
  const sessions = await db
    .table(TableNames.SESSIONS)
    .orderBy('datePlayed')
    .toArray()
  const sessionTemplates = await db
    .table(TableNames.SESSION_TEMPLATES)
    .orderBy('name')
    .toArray()
  const achievementSets = await db
    .table(TableNames.ACHIEVEMENT_SETS)
    .orderBy('title')
    .toArray()
  const achievements = await db
    .table(TableNames.ACHIEVEMENTS)
    .orderBy('title')
    .toArray()

  const gamesWithImageURLs = await asyncMapBase64ImagesToURLs(games)
  const achievementsWithImageURLs = await asyncMapBase64ImagesToURLs(
    achievements
  )

  return {
    games: normalize(gamesWithImageURLs),
    sessions: normalize(sessions),
    sessionTemplates: normalize(sessionTemplates),
    achievementSets: normalize(achievementSets),
    achievements: normalize(achievementsWithImageURLs),
  }
})

export const deleteGame = createAsyncThunk(
  `${THUNK_PREFIX}/deleteGame`,
  async (gameId: string) => {
    await db.transaction(
      'rw',
      db.table(TableNames.GAMES),
      db.table(TableNames.SESSIONS),
      () => {
        db.table(TableNames.GAMES).delete(gameId)
        db.table(TableNames.SESSIONS).where({ gameId }).delete()
      }
    )
  }
)

export const addSession = createAsyncThunk(
  `${THUNK_PREFIX}/addSession`,
  async (payload: { gameId: string; session: Session }, { getState }) => {
    const { gameId, session } = payload
    const state = getState() as RootState

    const result = await db.transaction(
      'rw',
      db.table(TableNames.GAMES),
      db.table(TableNames.SESSIONS),
      async () => {
        const updatedGame = await db
          .table(TableNames.GAMES)
          .update(gameId, {
            sessions: [...state.Games[gameId].sessions, session.id],
          })
          .then((updated) => {
            if (updated === 1) {
              return db.table(TableNames.GAMES).get(gameId)
            }
          })

        const addedSession = await db
          .table(TableNames.SESSIONS)
          .add(session)
          .then((id) => {
            return db.table(TableNames.SESSIONS).get(id)
          })

        return { updatedGame, addedSession }
      }
    )

    return result
  }
)

export const removeSession = createAsyncThunk(
  `${THUNK_PREFIX}/removeSession`,
  async (payload: { gameId: string; sessionId: string }, { getState }) => {
    const { gameId, sessionId } = payload
    const state = getState() as RootState

    return db.transaction(
      'rw',
      db.table(TableNames.GAMES),
      db.table(TableNames.SESSIONS),
      async () => {
        const updatedGame = await db
          .table(TableNames.GAMES)
          .update(gameId, {
            sessions: state.Games[gameId].sessions.filter(
              (id: string) => id !== sessionId
            ),
          })
          .then((updated) => {
            if (updated === 1) {
              return db.table(TableNames.GAMES).get(gameId)
            }
          })

        await db.table(TableNames.SESSIONS).delete(sessionId)

        return { updatedGame }
      }
    )
  }
)

export const deleteAchievementSet = createAsyncThunk(
  `${THUNK_PREFIX}/deleteAchievementSet`,
  async (achievementSetId: string) => {
    await db.transaction(
      'rw',
      db.table(TableNames.ACHIEVEMENT_SETS),
      db.table(TableNames.ACHIEVEMENTS),
      () => {
        db.table(TableNames.ACHIEVEMENT_SETS).delete(achievementSetId)
        db.table(TableNames.ACHIEVEMENTS).where({ achievementSetId }).delete()
      }
    )
  }
)

export const addAchievement = createAsyncThunk(
  `${THUNK_PREFIX}/addAchievement`,
  async (
    payload: { achievementSetId: AchievementSetId; achievement: Achievement },
    { getState }
  ) => {
    const { achievementSetId, achievement } = payload
    const state = getState() as RootState

    const result = await db.transaction(
      'rw',
      db.table(TableNames.ACHIEVEMENT_SETS),
      db.table(TableNames.ACHIEVEMENTS),
      async () => {
        const updatedAchievementSet = await db
          .table(TableNames.ACHIEVEMENT_SETS)
          .update(achievementSetId, {
            achievements: [
              ...state.AchievementSets.byId[achievementSetId].achievements,
              achievement.id,
            ],
          })
          .then((updated) => {
            if (updated === 1) {
              return db.table(TableNames.ACHIEVEMENT_SETS).get(achievementSetId)
            }
          })

        const addedAchievement = await db
          .table(TableNames.ACHIEVEMENTS)
          .add({
            ...achievement,
            title:
              achievement.title !== '' ? achievement.title : achievement.id,
          })
          .then((id) => {
            return db.table(TableNames.ACHIEVEMENTS).get(id)
          })

        return { updatedAchievementSet, addedAchievement }
      }
    )

    const imageUrl = achievement.image
      ? await base64ToURL(achievement.image)
      : ''

    return {
      ...result,
      image: imageUrl,
    }
  }
)

export const removeAchievement = createAsyncThunk(
  `${THUNK_PREFIX}/removeAchievement`,
  async (
    payload: {
      achievementSetId: AchievementSetId
      achievementId: AchievementId
    },
    { getState }
  ) => {
    const { achievementSetId, achievementId } = payload
    const state = getState() as RootState

    return db.transaction(
      'rw',
      db.table(TableNames.ACHIEVEMENT_SETS),
      db.table(TableNames.ACHIEVEMENTS),
      async () => {
        const updatedAchievementSet = await db
          .table(TableNames.ACHIEVEMENT_SETS)
          .update(achievementSetId, {
            achievements: state.AchievementSets.byId[
              achievementSetId
            ].achievements.filter((id: string) => id !== achievementId),
          })
          .then((updated) => {
            if (updated === 1) {
              return db.table(TableNames.ACHIEVEMENT_SETS).get(achievementSetId)
            }
          })

        await db.table(TableNames.ACHIEVEMENTS).delete(achievementId)

        return { updatedAchievementSet }
      }
    )
  }
)
