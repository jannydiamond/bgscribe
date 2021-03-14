import { createSelector, createSlice } from '@reduxjs/toolkit'

import * as types from 'types'

import { RootState } from 'Redux/store'

import {
  addGame,
  editGame,
  deleteGame,
  addSessionToGame,
  removeSessionFromGame,
} from './sideEffects'
import {fetchGamesWithSessions} from 'Redux/sideEffects'

type State = types.Games

const initialState: State = {}

export const GamesSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGamesWithSessions.fulfilled, (_, action) => {
      return action.payload.games
    })
    // TODO handle inside sideEffect
    builder.addCase(fetchGamesWithSessions.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(addGame.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        [id]: action.payload,
        ...state,
      }
    })
    builder.addCase(addGame.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(editGame.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        ...state,
        [id]: action.payload,
      }
    })
    builder.addCase(editGame.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(deleteGame.fulfilled, (state, action) => {
      const newState = Object.values(state).reduce((acc, game) => {
        if (game.id === action.meta.arg) return acc

        return {
          ...acc,
          [game.id]: game,
        }
      }, {})

      return newState
    })
    builder.addCase(deleteGame.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(addSessionToGame.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        ...state,
        [id]: action.payload,
      }
    })
    builder.addCase(addSessionToGame.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(removeSessionFromGame.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        ...state,
        [id]: action.payload,
      }
    })
    builder.addCase(removeSessionFromGame.rejected, (_, action) => {
      console.log(action.error)
    })
  },
})

export const selectGames = (state: RootState) => state.Games
export const selectGameIds = (state: RootState) => Object.keys(state.Games)
export const selectGamesArray = (state: RootState) => Object.values(state.Games)

export const selectGamesWithoutSessions = createSelector(
  [selectGamesArray],
  (games) => games.filter(game => game.sessions.length < 1)
)

export const selectGamesWithSessions = createSelector(
  [selectGamesArray],
  (games) => games.filter(game => game.sessions.length > 0)
)
