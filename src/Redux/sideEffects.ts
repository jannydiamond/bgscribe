import { createAsyncThunk } from '@reduxjs/toolkit'
import db from 'Database'
import { TableNames } from 'types'

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
