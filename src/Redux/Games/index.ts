import { createSelector, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'Redux/store'
import { addSession, deleteGame, init, removeSession } from 'Redux/sideEffects'

import { addGame, editGame } from './sideEffects'
import { Games, TableNames } from 'types'

type State = Games

const initialState: State = {}

export const GamesSlice = createSlice({
  name: TableNames.GAMES,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.fulfilled, (_, action) => {
      return action.payload.games
    })
    // TODO handle inside sideEffect
    builder.addCase(init.rejected, (_, action) => {
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

    builder.addCase(addSession.fulfilled, (state, action) => {
      const { updatedGame } = action.payload

      return {
        ...state,
        [updatedGame.id]: updatedGame,
      }
    })
    // TODO handle inside sideEffect
    builder.addCase(addSession.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(removeSession.fulfilled, (state, action) => {
      const { updatedGame } = action.payload

      return {
        ...state,
        [updatedGame.id]: updatedGame,
      }
    })
    // TODO handle inside sideEffect
    builder.addCase(removeSession.rejected, (_, action) => {
      console.log(action.error)
    })
  },
})

export const selectGamesById = (state: RootState) => state.Games
export const selectGameIds = (state: RootState) => Object.keys(state.Games)
export const selectGamesArray = (state: RootState) => Object.values(state.Games)
export const selectGameById = (
  state: RootState,
  ownProps: { gameId: string }
) => state.Games[ownProps.gameId]

export const selectGamesWithoutSessions = createSelector(
  [selectGamesArray],
  (games) => games.filter((game) => game.sessions.length < 1)
)

export const selectGamesContainingSessions = createSelector(
  [selectGamesArray],
  (games) => games.filter((game) => game.sessions.length > 0)
)
