import { createSelector, createSlice } from '@reduxjs/toolkit'
import { closestTo, compareDesc } from 'date-fns'

import { RootState } from 'Redux/store'
import { addSession, deleteGame, init, removeSession } from 'Redux/sideEffects'

import { editSession } from './sideEffects'
import { Session, Sessions, TableNames } from 'types'

type State = Sessions

const initialState: State = {}

export const SessionsSlice = createSlice({
  name: TableNames.SESSIONS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.fulfilled, (_, action) => {
      return action.payload.sessions
    })
    // TODO handle inside sideEffect and trigger snackbar
    builder.addCase(init.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(addSession.fulfilled, (state, action) => {
      const { addedSession } = action.payload

      return {
        [addedSession.id]: addedSession,
        ...state,
      }
    })
    // TODO handle inside sideEffect
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

    builder.addCase(removeSession.fulfilled, (state, action) => {
      const newState = Object.values(state).reduce((acc, session) => {
        if (session.id === action.meta.arg.sessionId) return acc

        return {
          ...acc,
          [session.id]: session,
        }
      }, {})

      return newState
    })
    // TODO handle inside sideEffect
    builder.addCase(removeSession.rejected, (_, action) => {
      console.log(action.error)
    })

    builder.addCase(deleteGame.fulfilled, (state, action) => {
      const newState = Object.values(state).reduce((acc, session) => {
        if (session.gameId === action.meta.arg) return acc

        return {
          ...acc,
          [session.id]: session,
        }
      }, {})

      return newState
    })
    // TODO handle inside sideEffect
    builder.addCase(deleteGame.rejected, (_, action) => {
      console.log(action.error)
    })
  },
})

export const selectSessionsById = (state: RootState) => state.Sessions
export const selectSessionIds = (state: RootState) =>
  Object.keys(state.Sessions)
export const selectSessionsArray = (state: RootState) =>
  Object.values(state.Sessions)
export const selectSessionById = (
  state: RootState,
  ownProps: { sessionId: string }
) => state.Sessions[ownProps.sessionId]

export const selectSessionsByGameId = (state: RootState, gameId: string) =>
  Object.values(state.Sessions).filter(
    (session: Session) => session.gameId === gameId
  )

export const selectSessionsArraySortedByDatePlayed = createSelector(
  [selectSessionsByGameId],
  (sessions: Session[]) =>
    sessions.sort((sessionA, sessionB) => {
      return compareDesc(sessionA.datePlayed, sessionB.datePlayed)
    })
)

export const selectLatestSessionDateByGameId = createSelector(
  [selectSessionsByGameId],
  (sessions: Session[]) => {
    const sessionDates = sessions.map((session: Session) => session.datePlayed)
    const currentDate = new Date()

    return closestTo(currentDate, sessionDates)
  }
)
