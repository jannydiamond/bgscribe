import { createSelector, createSlice } from '@reduxjs/toolkit'
import { closestTo, compareDesc } from 'date-fns'

import * as types from 'types'

import { RootState } from 'Redux/store'

import {
  fetchSessions,
  addSession,
  editSession,
  deleteSession,
  deleteAllGameSessions,
} from './sideEffects'

type State = types.Sessions

const initialState: State = {}

export const SessionsSlice = createSlice({
  name: 'Sessions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSessions.fulfilled, (_, action) => {
      const newState = action.payload
        ? action.payload.reduce((acc, session) => {
            return {
              ...acc,
              [session.id]: session,
            }
          }, {})
        : {}

      return newState
    })
    builder.addCase(fetchSessions.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(addSession.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        [id]: action.payload,
        ...state,
      }
    })
    builder.addCase(addSession.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(editSession.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        ...state,
        [id]: action.payload,
      }
    })
    builder.addCase(editSession.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(deleteSession.fulfilled, (state, action) => {
      const newState = Object.values(state).reduce((acc, session) => {
        if (session.id === action.meta.arg) return acc

        return {
          ...acc,
          [session.id]: session,
        }
      }, {})

      return newState
    })
    builder.addCase(deleteSession.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(deleteAllGameSessions.fulfilled, (state, action) => {
      const newState = Object.values(state).reduce((acc, session) => {
        if (session.gameId === action.meta.arg) return acc

        return {
          ...acc,
          [session.id]: session,
        }
      }, {})

      return newState
    })
    builder.addCase(deleteAllGameSessions.rejected, (_, action) => {
      console.log(action.error)
    })
  },
})

export const selectSessions = (state: RootState) => state.Sessions
export const selectSessionIds = (state: RootState) =>
  Object.keys(state.Sessions)
export const selectSessionsArray = (state: RootState) =>
  Object.values(state.Sessions)

export const selectSessionsByGameId = (state: RootState, gameId: string) =>
  Object.values(state.Sessions).filter(
    (session: types.Session) => session.gameId === gameId
  )

export const selectSessionsArraySortedByDatePlayed = createSelector(
  [selectSessionsByGameId],
  (sessions: types.Session[]) =>
    sessions.sort((sessionA, sessionB) => {
      return compareDesc(sessionA.datePlayed, sessionB.datePlayed)
    })
)

export const selectLatestSessionDateByGameId = createSelector(
  [selectSessionsByGameId],
  (sessions: types.Session[]) => {
    const sessionDates = sessions.map(
      (session: types.Session) => session.datePlayed
    )
    const currentDate = new Date()

    return closestTo(currentDate, sessionDates)
  }
)

export default SessionsSlice.reducer
