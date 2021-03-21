import { createSlice } from '@reduxjs/toolkit'
import { importDatabase } from 'Redux/Database/sideEffects'
import { RootState } from 'Redux/store'

export type SnackbarType = 'default' | 'error' | 'success'

export type Snackbar = {
  type: SnackbarType
  message: string
}

type State = {
  queue: Snackbar[]
}

const initialState: State = {
  queue: [],
}

export const snackbarSlice = createSlice({
  name: 'snackbars',
  initialState,
  reducers: {
    dequeue: (state) => {
      const [_head, ...tail] = state.queue
      return {
        queue: tail,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(importDatabase.fulfilled, (state, _) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'success',
              message: 'Database import successful!',
            },
          ],
        }
      })
      .addCase(importDatabase.rejected, (state, _) => {
        return {
          ...state,
          queue: [
            ...state.queue,
            {
              type: 'error',
              message:
                'An error occurred while importing the database. Please try again.',
            },
          ],
        }
      })
  },
})

export const selectFirstSnackbarElement = (state: RootState) =>
  state.Snackbar.queue[0]
