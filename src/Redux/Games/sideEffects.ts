import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  TableNames,
  AddGamePayload,
  EditGamePayload,
  AddSessionToGamePayload,
  RemoveSessionFromGamePayload,
} from 'types'

import { RootState } from 'Redux/store'

import db from 'Database'

export const addGame = createAsyncThunk(
  'Games/addGame',
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
  'Games/editGame',
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

export const deleteGame = createAsyncThunk(
  'Games/deleteGame',
  async (gameId: string) => {
    const response = await db.table(TableNames.GAMES).delete(gameId)

    return response
  }
)

export const removeSessionFromGame = createAsyncThunk(
  'Games/removeSessionFromGame',
  async (payload: RemoveSessionFromGamePayload, { getState }) => {
    const { gameId, sessionId } = payload
    const state = getState() as RootState

    const response = await db
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

    return response
  }
)
