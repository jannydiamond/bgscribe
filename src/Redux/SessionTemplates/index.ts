import { createSelector, createSlice } from '@reduxjs/toolkit'
import { init } from 'Redux/sideEffects'
import { RootState } from 'Redux/store'
import { SessionTemplateId, SessionTemplates, TableNames } from 'types'
import {
  addSessionTemplate,
  deleteSessionTemplate,
  editSessionTemplate,
} from './sideEffects'

type State = SessionTemplates

const initialState: State = {}

export const SessionTemplatesSlice = createSlice({
  name: TableNames.SESSION_TEMPLATES,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.fulfilled, (_, action) => {
      return action.payload.sessionTemplates
    })

    builder.addCase(addSessionTemplate.fulfilled, (state, action) => {
      const template = action.payload
      return {
        ...state,
        [template.id]: template,
      }
    })

    builder.addCase(editSessionTemplate.fulfilled, (state, action) => {
      const { id } = action.payload

      return {
        ...state,
        [id]: action.payload,
      }
    })

    builder.addCase(deleteSessionTemplate.fulfilled, (state, action) => {
      const newState = Object.values(state).reduce((acc, template) => {
        if (template.id === action.meta.arg) return acc

        return {
          ...acc,
          [template.id]: template,
        }
      }, {})

      return newState
    })
  },
})

export const selectSessionTemplatesById = (state: RootState) =>
  state.SessionTemplates

export const selectSessionTemplateIds = (state: RootState) =>
  Object.keys(state.SessionTemplates)

export const selectSessionTemplatesList = createSelector(
  [selectSessionTemplatesById, selectSessionTemplateIds],
  (byId, ids) => ids.map((id) => byId[id])
)

export const selectSessionTemplateById = (
  state: RootState,
  ownProps: { templateId: SessionTemplateId }
) => state.SessionTemplates[ownProps.templateId]
