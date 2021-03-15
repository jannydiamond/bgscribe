import { createSlice } from '@reduxjs/toolkit'

import { RootState } from 'Redux/store'
import { exportDatabase, importDatabase } from './sideEffects'

type Status = 'idle' | 'pending' | 'error' | 'success'

type State = {
  exportingStatus: Status
  importingStatus: Status
}

const initialState: State = {
  exportingStatus: 'idle',
  importingStatus: 'idle',
}

export const DatabaseSlice = createSlice({
  name: 'Database',
  initialState,
  reducers: {
    resetExportStatus: (state) => {
      return {
        ...state,
        exportingStatus: 'idle',
      }
    },
    resetImportStatus: (state) => {
      return {
        ...state,
        importingStatus: 'idle',
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(exportDatabase.pending, (state, _action) => {
      return {
        ...state,
        exportingStatus: 'pending',
      }
    })
    builder.addCase(exportDatabase.fulfilled, (state, _action) => {
      return {
        ...state,
        exportingStatus: 'success',
      }
    })
    builder.addCase(exportDatabase.rejected, (state, _action) => {
      return {
        ...state,
        exportingStatus: 'error',
      }
    })

    builder.addCase(importDatabase.pending, (state, _action) => {
      return {
        ...state,
        importingStatus: 'pending',
      }
    })
    builder.addCase(importDatabase.fulfilled, (state, _action) => {
      return {
        ...state,
        importingStatus: 'success',
      }
    })
    builder.addCase(importDatabase.rejected, (state, _action) => {
      return {
        ...state,
        importingStatus: 'error',
      }
    })
  },
})

export const { resetExportStatus, resetImportStatus } = DatabaseSlice.actions

export const selectDatabase = (state: RootState) => state.Database

export const selectExportingStatus = (state: RootState) =>
  state.Database.exportingStatus

export const selectImportingStatus = (state: RootState) =>
  state.Database.importingStatus
