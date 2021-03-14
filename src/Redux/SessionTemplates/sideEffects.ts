import { createAsyncThunk } from '@reduxjs/toolkit'
import db from 'Database'
import shortid from 'shortid'
import { TableNames } from 'types'

export const addSessionTemplate = createAsyncThunk(
  `${TableNames.SESSION_TEMPLATES}/addSessionTemplate`,
  async (transientTemplate: { name: string; template: string }) => {
    const id = shortid.generate()

    return await db
      .table(TableNames.SESSION_TEMPLATES)
      .add({
        ...transientTemplate,
        id,
      })
      .then((id) => db.table(TableNames.SESSION_TEMPLATES).get(id))
  }
)

export type EditSessionTemplatePayload = {
  id: string
  name: string
  template: string
}

export const editSessionTemplate = createAsyncThunk(
  `${TableNames.SESSION_TEMPLATES}/editSessionTemplate`,
  async (data: EditSessionTemplatePayload) => {
    const { id, name, template } = data

    const response = await db
      .table(TableNames.SESSION_TEMPLATES)
      .update(id, {
        name: name !== '' ? name : id,
        template: template,
      })
      .then((updated) => {
        if (updated === 1) {
          return db.table(TableNames.SESSION_TEMPLATES).get(id)
        }
      })

    return response
  }
)

export const deleteSessionTemplate = createAsyncThunk(
  `${TableNames.SESSION_TEMPLATES}/deleteSessionTemplate`,
  async (templateId: string) => {
    const response = await db
      .table(TableNames.SESSION_TEMPLATES)
      .delete(templateId)

    return response
  }
)
