import {createSlice} from "@reduxjs/toolkit";
import {fetchGamesWithSessions} from "Redux/sideEffects";
import {RootState} from "Redux/store";

type State = {
  isLoading: boolean
}

const initialState: State = { isLoading: false }

export const ContentLoadingSlice = createSlice({
  name: 'ContentLoading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGamesWithSessions.pending, (_, _action) => {
      return { isLoading: true }
    })
    builder.addCase(fetchGamesWithSessions.fulfilled, (_, _action) => {
      return { isLoading: false }
    })
    builder.addCase(fetchGamesWithSessions.rejected, (_, _action) => {
      return { isLoading: false }
    })
  }
})

export const selectContentIsLoading = (state: RootState) => state.ContentLoading.isLoading
