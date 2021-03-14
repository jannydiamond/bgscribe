import { createAsyncThunk } from '@reduxjs/toolkit'
import db from 'Database'
import shortid from 'shortid'
import { TableNames } from 'types'

export const addSessionTemplate = createAsyncThunk(
  `${TableNames.SESSION_TEMPLATES}/addSessionTemplate`,
  async (transientTemplate: { name: string; template: string }) => {
    const id = shortid.generate()

    return await db
      .table(TableNames.SESSION_TEMPLATES)
      .add({
        ...transientTemplate,
        id,
      })
      .then((id) => db.table(TableNames.SESSION_TEMPLATES).get(id))
  }
)
