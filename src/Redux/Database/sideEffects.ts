import { createAsyncThunk } from '@reduxjs/toolkit'
import { importDB, exportDB } from 'dexie-export-import'
import db from 'Database'
import saveToFile from 'helpers/saveToFile'
import { init } from 'Redux/sideEffects'

const THUNK_PREFIX = 'Database'

export const exportDatabase = createAsyncThunk(
  `${THUNK_PREFIX}/exportDatabase`,
  async (name: string) => {
    const blob = await exportDB(db, { prettyJson: true })

    const reader = new FileReader()

    reader.onload = (event: any) => {
      saveToFile(event.target.result, name)
    }

    reader.readAsText(blob)
  }
)

export const importDatabase = createAsyncThunk(
  `${THUNK_PREFIX}/importDatabase`,
  async (file: Blob, thunkAPI) => {
    await db.delete().then(async () => {
      await importDB(file).then(async () => {
        db.open().then(() => {
          thunkAPI.dispatch(init())
        })
      })
    })
  }
)
