import { createAsyncThunk } from '@reduxjs/toolkit'

import { TableNames, AddGamePayload, EditGamePayload } from 'types'

import db from 'Database'

export const addGame = createAsyncThunk(
  `${TableNames.GAMES}/addGame`,
  async (game: AddGamePayload) => {
    const { id, name } = game

    const response = await db
      .table(TableNames.GAMES)
      .add({
        id: id,
        name: name !== '' ? name : id,
        sessions: [],
        created: new Date(),
      })
      .then((gameId) => {
        return db.table(TableNames.GAMES).get(gameId)
      })

    return response
  }
)

export const editGame = createAsyncThunk(
  `${TableNames.GAMES}/editGame`,
  async (game: EditGamePayload) => {
    const { id, name } = game

    const response = await db
      .table(TableNames.GAMES)
      .update(id, {
        name: name !== '' ? name : id,
      })
      .then((updated) => {
        if (updated === 1) {
          return db.table(TableNames.GAMES).get(id)
        }
      })

    return response
  }
)
