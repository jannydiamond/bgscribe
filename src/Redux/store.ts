import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import CounterReducer from 'Redux/Counter/counterSlice'
import GamesReducer from 'Redux/Games'

export const store = configureStore({
  reducer: {
    Counter: CounterReducer,
    Games: GamesReducer,
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
