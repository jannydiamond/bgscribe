import { createAsyncThunk } from '@reduxjs/toolkit'

import { TableNames, EditSessionPayload } from 'types'

import db from 'Database'

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
