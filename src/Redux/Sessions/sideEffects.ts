import { createAsyncThunk } from '@reduxjs/toolkit'

import { TableNames } from 'types'

import db from 'Database'

export type EditSessionPayload = {
  id: string
  datePlayed: Date
  amountOfPlayers: number
  note: string
}

export const editSession = createAsyncThunk(
  `${TableNames.SESSIONS}/editSession`,
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
