import { createAsyncThunk } from '@reduxjs/toolkit'

import { TableNames, AddGamePayload, EditGamePayload } from 'types'

import db from 'Database'
import { base64ToURL } from 'Redux/sideEffects'

export const addGame = createAsyncThunk(
  `${TableNames.GAMES}/addGame`,
  async (game: AddGamePayload) => {
    const { id, name, image } = game

    const response = await db
      .table(TableNames.GAMES)
      .add({
        id: id,
        name: name !== '' ? name : id,
        image: image ? image : '',
        sessions: [],
        created: new Date(),
      })
      .then((gameId) => {
        return db.table(TableNames.GAMES).get(gameId)
      })

    const imageUrl = await base64ToURL(image)

    return {
      ...response,
      image: imageUrl,
    }
  }
)

export const editGame = createAsyncThunk(
  `${TableNames.GAMES}/editGame`,
  async (game: EditGamePayload) => {
    const { id, name, image } = game

    const response = await db
      .table(TableNames.GAMES)
      .update(id, {
        name: name !== '' ? name : id,
        ...(image.startsWith('data:image/') ? { image } : {}), // => only write if is base64 encoded image
      })
      .then((updated) => {
        if (updated === 1) {
          return db.table(TableNames.GAMES).get(id)
        }
      })

    const imageUrl = await base64ToURL(image)

    return {
      ...response,
      image: imageUrl,
    }
  }
)
