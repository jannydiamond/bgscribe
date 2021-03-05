import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as types from 'types'

import { RootState } from 'Redux/store'

type State = types.Sessions

const initialState: State = {}

export const SessionsSlice = createSlice({
  name: 'Sessions',
  initialState,
  reducers: {
    addSession: (
      state: State,
      action: PayloadAction<types.AddSessionPayload>
    ) => {
      const { id, gameId, datePlayed, amountOfPlayers, note } = action.payload

      return {
        [id]: {
          id: id,
          gameId: gameId,
          datePlayed: datePlayed,
          amountOfPlayers: amountOfPlayers,
          note: note,
          created: new Date(),
        },
        ...state,
      }
    },
    editSession: (
      state: State,
      action: PayloadAction<types.EditSessionPayload>
    ) => {
      const { id, datePlayed, amountOfPlayers, note } = action.payload

      return {
        ...state,
        [id]: {
          ...state[id],
          datePlayed: datePlayed,
          amountOfPlayers: amountOfPlayers,
          note: note,
        },
      }
    },
    deleteSession: (state: State, action: PayloadAction<string>) => {
      const newState = Object.values(state).reduce((acc, session) => {
        if (session.id === action.payload) return acc

        return {
          ...acc,
          [session.id]: session,
        }
      }, {})

      return newState
    },
    deleteAllGameSessions: (state: State, action: PayloadAction<string[]>) => {
      const newState = Object.values(state).reduce((acc, session) => {
        if (action.payload.indexOf(session.id) !== -1) return acc

        return {
          ...acc,
          [session.id]: session,
        }
      }, {})

      return newState
    },
  },
})

export const {
  addSession,
  editSession,
  deleteSession,
  deleteAllGameSessions,
} = SessionsSlice.actions

export const selectSessions = (state: RootState) => state.Sessions
export const selectSessionIds = (state: RootState) =>
  Object.keys(state.Sessions)
export const selectSessionsArray = (state: RootState) =>
  Object.values(state.Sessions)

export const selectSessionsByGameId = (state: RootState, gameId: string) =>
  Object.values(state.Sessions).filter(
    (session: types.Session) => session.gameId === gameId
  )

export default SessionsSlice.reducer
