import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { GamesSlice } from 'Redux/Games'
import { SessionsSlice } from 'Redux/Sessions'
import { AchievementSlice } from './Achievements'
import { AchievementSetSlice } from './AchievementSets'
import { ContentLoadingSlice } from './ContentLoading'
import { GameAchievementSlice } from './GameAchievements'
import { SessionTemplatesSlice } from './SessionTemplates'
import { DatabaseSlice } from './Database'

export const store = configureStore({
  reducer: {
    Games: GamesSlice.reducer,
    Sessions: SessionsSlice.reducer,
    SessionTemplates: SessionTemplatesSlice.reducer,
    Achievements: AchievementSlice.reducer,
    AchievementSets: AchievementSetSlice.reducer,
    GameAchievements: GameAchievementSlice.reducer,
    ContentLoading: ContentLoadingSlice.reducer,
    Database: DatabaseSlice.reducer,
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
