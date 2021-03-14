import { createAsyncThunk } from '@reduxjs/toolkit'
import db from 'Database'
import { Session, TableNames } from 'types'
import {RootState} from './store'

const normalize = (entities: Array<{ id: string }>) =>
  entities.reduce((acc, session) => {
    return {
      ...acc,
      [session.id]: session,
    }
  }, {})

export const fetchGamesWithSessions = createAsyncThunk(
  'root/fetchGamesWithSessions',
  async () => {
    const games = await db.table(TableNames.GAMES).orderBy('name').toArray()
    const sessions = await db
      .table(TableNames.SESSIONS)
      .orderBy('datePlayed')
      .toArray()

    return {
      games: normalize(games),
      sessions: normalize(sessions),
    }
  }
)

export const deleteGame = createAsyncThunk(
  'root/deleteGame',
  async (gameId: string) => {
    const response = await db.table(TableNames.GAMES).delete(gameId)

    return response
  }
)

export const addSession = createAsyncThunk(
  'root/addSession',
  async (payload: { gameId: string, session: Session }, { getState }) => {
    const { gameId, session } = payload
    const state = getState() as RootState

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

export const removeSession = createAsyncThunk(
  'root/removeSession',
  async (payload: { gameId: string, sessionId: string }, { getState }) => {
    const { gameId, sessionId } = payload
    const state = getState() as RootState

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
