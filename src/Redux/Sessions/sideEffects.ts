import { createAsyncThunk } from '@reduxjs/toolkit'

import { TableNames, AddSessionPayload, EditSessionPayload } from 'types'

import db from 'Database'

export const addSession = createAsyncThunk(
  'Sessions/addSession',
  async (session: AddSessionPayload) => {
    const { id, gameId, datePlayed, amountOfPlayers, note } = session

    const response = await db
      .table(TableNames.SESSIONS)
      .add({
        id: id,
        gameId: gameId,
        datePlayed: datePlayed,
        amountOfPlayers: amountOfPlayers,
        note: note,
        created: new Date(),
      })
      .then((id) => {
        return db.table(TableNames.SESSIONS).get(id)
      })

    return response
  }
)

export const editSession = createAsyncThunk(
  'Sessions/editSession',
  async (session: EditSessionPayload) => {
    const { id, datePlayed, amountOfPlayers, note } = session

    const response = await db
      .table(TableNames.SESSIONS)
      .update(id, {
        datePlayed: datePlayed,
        amountOfPlayers: amountOfPlayers,
        note: note,
      })
      .then((updated) => {
        if (updated === 1) {
          return db.table(TableNames.SESSIONS).get(id)
        }
      })

    return response
  }
)

export const deleteSession = createAsyncThunk(
  'Sessions/deleteSession',
  async (sessionId: string) => {
    const response = await db.table(TableNames.SESSIONS).delete(sessionId)

    return response
  }
)

export const deleteAllGameSessions = createAsyncThunk(
  'Sessions/deleteAllGameSessions',
  async (gameId: string) => {
    const response = await db
      .table(TableNames.SESSIONS)
      .where({ gameId: gameId })
      .delete()

    return response
  }
)
