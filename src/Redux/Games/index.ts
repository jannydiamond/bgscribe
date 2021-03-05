import { createSlice } from '@reduxjs/toolkit'
import { compareDesc } from 'date-fns'

import * as types from 'types'

import { RootState } from 'Redux/store'
import { selectLatestSessionDateByGameId } from 'Redux/Sessions'

import {
  fetchGames,
  addGame,
  editGame,
  deleteGame,
  addSessionToGame,
  removeSessionFromGame,
} from './sideEffects'

type State = types.Games

const initialState: State = {}

export const GamesSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (_, action) => {
      const newState = action.payload
        ? action.payload.reduce((acc, game) => {
            return {
              ...acc,
              [game.id]: game,
            }
          }, {})
        : {}

      return newState
    })
    builder.addCase(fetchGames.rejected, (_, action) => {
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

export const selectGamesArrayWithLatestPlayedDateSorted = (
  state: RootState
) => {
  const games = Object.values(state.Games)

  const gamesWithLastPlayedDate = games.map((game: types.Game) => {
    const lastPlayedDate = (state: RootState) =>
      selectLatestSessionDateByGameId(state, game.id)

    return {
      ...game,
      lastPlayed: lastPlayedDate(state),
    }
  })

  return gamesWithLastPlayedDate.sort((gameA, gameB) => {
    return compareDesc(gameA.lastPlayed, gameB.lastPlayed)
  })
}

export default GamesSlice.reducer
