import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import GamesReducer from 'Redux/Games'
import SessionsReducer from 'Redux/Sessions'

export const store = configureStore({
  reducer: {
    Games: GamesReducer,
    Sessions: SessionsReducer,
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
