import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import shortid from 'shortid'

import * as types from 'types'

import { RootState } from 'Redux/store'

const initialState: types.Games = {}

export const GamesSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<string>) => {
      const gameId = shortid.generate()

      return {
        [gameId]: {
          id: gameId,
          name: action.payload,
          sessions: [],
          created: new Date(),
        },
        ...state,
      }
    },
    editGame: (state, action: PayloadAction<types.EditGamePayload>) => {
      const { id, name } = action.payload

      return {
        ...state,
        [id]: {
          ...state[id],
          name: name,
        },
      }
    },
    deleteGame: (state, action: PayloadAction<string>) => {
      const newState = Object.values(state).reduce((acc, game) => {
        if (game.id === action.payload) return acc

        return {
          ...acc,
          [game.id]: game,
        }
      }, {})

      return newState
    },
  },
})

export const { addGame, editGame, deleteGame } = GamesSlice.actions

export const selectGames = (state: RootState) => state.Games
export const selectGameIds = (state: RootState) => Object.keys(state.Games)
export const selectGamesArray = (state: RootState) => Object.values(state.Games)

export default GamesSlice.reducer
