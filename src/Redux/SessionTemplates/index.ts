import { createSelector, createSlice } from '@reduxjs/toolkit'
import { init } from 'Redux/sideEffects'
import { RootState } from 'Redux/store'
import { SessionTemplateId, SessionTemplates, TableNames } from 'types'
import { addSessionTemplate } from './sideEffects'

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
    // TODO handle inside sideEffect
    builder
      .addCase(init.rejected, (_, action) => {
        console.log(action.error)
      })

      .addCase(addSessionTemplate.fulfilled, (state, action) => {
        const template = action.payload
        return {
          ...state,
          [template.id]: template,
        }
      })
      // TODO handle inside sideEffects and trigger snackbar
      .addCase(addSessionTemplate.rejected, (_, action) => {
        console.log(action.error)
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
