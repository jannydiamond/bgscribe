import { createAsyncThunk } from '@reduxjs/toolkit'
import db from 'Database'
import {
  AchievementSetId,
  Achievement,
  Session,
  TableNames,
  AchievementId,
  GameAchievement,
} from 'types'
import { normalizedGameAchievements } from './GameAchievements/helpers'
import { asyncMapBase64ImagesToURLs, base64ToURL, normalize } from './helpers'
import { RootState } from './store'

const THUNK_PREFIX = 'root'

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
  const gameAchievements = await db
    .table(TableNames.GAME_ACHIEVEMENTS)
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
    gameAchievements: normalizedGameAchievements(gameAchievements),
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
  async (achievementSetId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState

    const achievementSet = state.AchievementSets.byId[achievementSetId]
    const relatedGameAchievements = achievementSet.achievements.reduce(
      (acc: GameAchievement[], achievementId) => {
        const gameAchievementsByAchievementId = Object.values(
          state.GameAchievements.byGameAchievementId
        ).filter(
          (gameAchievement) => gameAchievement.achievementId === achievementId
        )

        return [...acc, ...gameAchievementsByAchievementId]
      },
      []
    )

    // WHY
    // Achievements the user has already achieved should not be deleted.
    // Therefore we get all unachieved gameAchievements of the set as well as the
    // related achievements
    const unachievedGameAchievements = relatedGameAchievements.filter(
      (gameAchievement) => !gameAchievement.achieved
    )
    const unachievedAchievementIds = unachievedGameAchievements.map(
      (gameAchievement) => gameAchievement.achievementId
    )
    const unachievedGameAchievementKeys = unachievedGameAchievements.map(
      (gameAchievement) => [
        gameAchievement.gameId,
        gameAchievement.achievementId,
      ]
    )

    const response = await db.transaction(
      'rw',
      db.table(TableNames.ACHIEVEMENT_SETS),
      db.table(TableNames.ACHIEVEMENTS),
      db.table(TableNames.GAME_ACHIEVEMENTS),
      async () => {
        await db.table(TableNames.ACHIEVEMENT_SETS).delete(achievementSetId)
        await db
          .table(TableNames.ACHIEVEMENTS)
          .bulkDelete(unachievedAchievementIds)

        // Somehow bulkDelete does not seem to work with compound keys
        unachievedGameAchievementKeys.forEach(async (gameAchievementKey) => {
          await db
            .table(TableNames.GAME_ACHIEVEMENTS)
            .delete(gameAchievementKey)
        })

        return {
          achievementSetId,
          achievementIdsToDelete: unachievedAchievementIds,
          unachievedGameAchievements,
        }
      }
    )

    return response
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
      achievementId: AchievementId
    },
    { getState }
  ) => {
    const { achievementId } = payload
    const state = getState() as RootState

    const achievement = state.Achievements.byId[achievementId]

    const parentAchievementSet = achievement.achievementSetId
      ? state.AchievementSets.byId[achievement.achievementSetId]
      : undefined

    const relatedGameAchievements = Object.values(
      state.GameAchievements.byGameAchievementId
    ).filter(
      (gameAchievement) => gameAchievement.achievementId === achievementId
    )

    const achievedGameAchievements = relatedGameAchievements.filter(
      (gameAchievement) => gameAchievement.achieved
    )

    if (achievedGameAchievements.length > 0) {
      return Promise.reject(
        "Can't delete Achievement! <Reason: Achievement has already been achieved>"
      )
    }

    // WHY
    // Achievements the user has already achieved should not be deleted.
    // Therefore we get all unachieved gameAchievements of the set as well as the
    // related achievements
    const unachievedGameAchievements = relatedGameAchievements.filter(
      (gameAchievement) => !gameAchievement.achieved
    )

    const unachievedGameAchievementKeys = unachievedGameAchievements.map(
      (gameAchievement) => [
        gameAchievement.gameId,
        gameAchievement.achievementId,
      ]
    )

    const response = await db.transaction(
      'rw',
      db.table(TableNames.ACHIEVEMENT_SETS),
      db.table(TableNames.ACHIEVEMENTS),
      db.table(TableNames.GAME_ACHIEVEMENTS),
      async () => {
        const updatedAchievementSet = parentAchievementSet
          ? await db
              .table(TableNames.ACHIEVEMENT_SETS)
              .update(parentAchievementSet.id, {
                achievements: state.AchievementSets.byId[
                  parentAchievementSet.id
                ].achievements.filter((id: string) => id !== achievementId),
              })
              .then(() => {
                return db
                  .table(TableNames.ACHIEVEMENT_SETS)
                  .get(parentAchievementSet.id)
              })
          : undefined

        await db.table(TableNames.ACHIEVEMENTS).delete(achievementId)

        // Somehow bulkDelete does not seem to work with compound keys
        unachievedGameAchievementKeys.forEach(async (gameAchievementKey) => {
          await db
            .table(TableNames.GAME_ACHIEVEMENTS)
            .delete(gameAchievementKey)
        })

        return {
          updatedAchievementSet,
          achievementId,
          unachievedGameAchievements,
        }
      }
    )

    return response
  }
)
