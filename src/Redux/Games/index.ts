import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as types from 'types'

import { RootState } from 'Redux/store'

type State = types.Games

const initialState: State = {}

export const GamesSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {
    addGame: (state: State, action: PayloadAction<types.AddGamePayload>) => {
      const { id, name } = action.payload

      return {
        [id]: {
          id: id,
          name: name !== '' ? name : id,
          sessions: [],
          created: new Date(),
        },
        ...state,
      }
    },
    editGame: (state: State, action: PayloadAction<types.EditGamePayload>) => {
      const { id, name } = action.payload

      return {
        ...state,
        [id]: {
          ...state[id],
          name: name !== '' ? name : id,
        },
      }
    },
    deleteGame: (state: State, action: PayloadAction<string>) => {
      const newState = Object.values(state).reduce((acc, game) => {
        if (game.id === action.payload) return acc

        return {
          ...acc,
          [game.id]: game,
        }
      }, {})

      return newState
    },
    addSessionToGame: (
      state: State,
      action: PayloadAction<types.AddSessionToGamePayload>
    ) => {
      const { gameId, sessionId } = action.payload

      const newSessions = [...state[gameId].sessions, sessionId]

      const newState = {
        ...state,
        [gameId]: {
          ...state[gameId],
          sessions: newSessions,
        },
      }

      return newState
    },
    removeSessionFromGame: (
      state: State,
      action: PayloadAction<types.RemoveSessionFromGamePayload>
    ) => {
      const { gameId, sessionId } = action.payload

      const newSessions = state[gameId].sessions.filter(
        (id: string) => id !== sessionId
      )

      const newState = {
        ...state,
        [gameId]: {
          ...state[gameId],
          sessions: newSessions,
        },
      }

      return newState
    },
  },
})

export const {
  addGame,
  editGame,
  deleteGame,
  addSessionToGame,
  removeSessionFromGame,
} = GamesSlice.actions

export const selectGames = (state: RootState) => state.Games
export const selectGameIds = (state: RootState) => Object.keys(state.Games)
export const selectGamesArray = (state: RootState) => Object.values(state.Games)

export default GamesSlice.reducer
