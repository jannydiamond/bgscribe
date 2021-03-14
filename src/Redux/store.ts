import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { GamesSlice } from 'Redux/Games'
import { SessionsSlice } from 'Redux/Sessions'

export const store = configureStore({
  reducer: {
    Games: GamesSlice.reducer,
    Sessions: SessionsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
