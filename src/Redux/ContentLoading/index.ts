import { createSlice } from '@reduxjs/toolkit'
import { init } from 'Redux/sideEffects'
import { RootState } from 'Redux/store'

type State = {
  isLoading: boolean
}

const initialState: State = { isLoading: false }

export const ContentLoadingSlice = createSlice({
  name: 'ContentLoading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (_, _action) => {
      return { isLoading: true }
    })
    builder.addCase(init.fulfilled, (_, _action) => {
      return { isLoading: false }
    })
    builder.addCase(init.rejected, (_, _action) => {
      return { isLoading: false }
    })
  },
})

export const selectContentIsLoading = (state: RootState) =>
  state.ContentLoading.isLoading
